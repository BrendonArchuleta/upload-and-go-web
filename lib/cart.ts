import { sf } from "./shopify-client";
import { CART_CREATE, CART_LINES_ADD, CART_BUYER_IDENTITY, CART_DISCOUNT_CODES, GET_CART } from "./shopify-queries";

export interface Cart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    totalAmount: {
      amount: string;
      currencyCode: string;
    };
  };
  lines?: {
    nodes: Array<{
      id: string;
      quantity: number;
      merchandise: {
        id: string;
        title: string;
        product: {
          title: string;
        };
        price: {
          amount: string;
          currencyCode: string;
        };
      };
    }>;
  };
}

const NEW_KEY = 'shopify_cart_v1';
const OLD_KEYS = ['shopify_cart', 'cart']; // migrate if found

function readCart(): Cart | null {
  try {
    // migrate old keys once
    for (const k of OLD_KEYS) {
      const old = localStorage.getItem(k);
      if (old) {
        localStorage.setItem(NEW_KEY, old);
        localStorage.removeItem(k);
        break;
      }
    }
    const raw = localStorage.getItem(NEW_KEY);
    return raw ? JSON.parse(raw) as Cart : null;
  } catch { 
    return null; 
  }
}

function saveCart(cart: Cart) { 
  localStorage.setItem(NEW_KEY, JSON.stringify(cart)); 
}

export async function ensureCart(): Promise<Cart> {
  const existing = readCart();
  if (existing?.id && existing?.checkoutUrl) {
    // Optionally refresh cart data from Shopify
    try {
      const data = await sf<{ cart: Cart }>(GET_CART, { cartId: existing.id });
      if (data.cart) {
        saveCart(data.cart);
        return data.cart;
      }
    } catch (error) {
      console.warn('Failed to refresh cart, creating new one');
    }
  }

  const data = await sf<{ cartCreate: { cart: Cart; userErrors: any[] } }>(CART_CREATE, { input: {} });
  const errs = data.cartCreate.userErrors || [];
  if (errs.length) throw new Error(errs.map((e: any) => e.message).join('; '));
  const cart = data.cartCreate.cart;
  if (!cart) throw new Error('Failed to create cart');
  saveCart(cart);
  return cart;
}

export async function addToCart(variantGid: string, quantity = 1): Promise<Cart> {
  const cart = await ensureCart();
  const data = await sf<{ cartLinesAdd: { cart: Cart; userErrors: any[] } }>(CART_LINES_ADD, {
    cartId: cart.id,
    lines: [{ merchandiseId: variantGid, quantity }],
  });
  const errs = data.cartLinesAdd.userErrors || [];
  if (errs.length) throw new Error(errs.map((e: any) => e.message).join('; '));
  const updated = data.cartLinesAdd.cart;
  saveCart(updated);
  return updated;
}

export async function setBuyerEmail(email: string) {
  const cart = await ensureCart();
  await sf(CART_BUYER_IDENTITY, { cartId: cart.id, buyerIdentity: { email } });
}

export async function applyDiscount(code: string) {
  const cart = await ensureCart();
  await sf(CART_DISCOUNT_CODES, { cartId: cart.id, discountCodes: [code] });
}

/** Safe checkout with fallback:
 * - If no cart, and a variant is supplied, auto create+add then redirect.
 * - If no cart and no variant, throw a friendly error (UI should disable button).
 */
export async function goToCheckout(opts?: { variantId?: string; qty?: number }) {
  let cart = readCart();
  if (!cart) {
    if (opts?.variantId) {
      cart = await addToCart(opts.variantId, opts.qty ?? 1);
    } else {
      throw new Error('No cart yet. Add an item first.');
    }
  }
  window.location.href = cart.checkoutUrl;
}

export function clearCart() {
  localStorage.removeItem(NEW_KEY);
}