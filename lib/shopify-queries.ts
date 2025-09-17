export const PRODUCT_BY_HANDLE = `
query ProductByHandle($handle: String!) {
  product(handle: $handle) {
    id
    title
    variants(first: 50) {
      nodes { 
        id 
        title 
        availableForSale 
        price {
          amount
          currencyCode
        }
      }
    }
  }
}`;

export const CART_CREATE = `
mutation CartCreate($input: CartInput!) {
  cartCreate(input: $input) {
    cart { 
      id 
      checkoutUrl 
      totalQuantity
      cost {
        totalAmount {
          amount
          currencyCode
        }
      }
    }
    userErrors { code field message }
  }
}`;

export const CART_LINES_ADD = `
mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart { 
      id 
      checkoutUrl 
      totalQuantity
      cost {
        totalAmount {
          amount
          currencyCode
        }
      }
      lines(first: 100) {
        nodes {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              id
              title
              product {
                title
              }
              price {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
    userErrors { code field message }
  }
}`;

export const CART_BUYER_IDENTITY = `
mutation CartBuyerIdentityUpdate($cartId: ID!, $buyerIdentity: CartBuyerIdentityInput!) {
  cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
    cart { id }
    userErrors { code field message }
  }
}`;

export const CART_DISCOUNT_CODES = `
mutation CartDiscountCodesUpdate($cartId: ID!, $discountCodes: [String!]!) {
  cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
    cart { 
      discountCodes { 
        code 
        applicable 
      } 
    }
    userErrors { field message }
  }
}`;

export const GET_CART = `
query GetCart($cartId: ID!) {
  cart(id: $cartId) {
    id
    checkoutUrl
    totalQuantity
    cost {
      totalAmount {
        amount
        currencyCode
      }
    }
    lines(first: 100) {
      nodes {
        id
        quantity
        merchandise {
          ... on ProductVariant {
            id
            title
            product {
              title
            }
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
}`;