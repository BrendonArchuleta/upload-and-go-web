export async function sf<T = any>(query: string, variables?: Record<string, any>): Promise<T> {
  const r = await fetch('/api/shopify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables })
  });
  const json = await r.json();
  if (json.errors) {
    console.error('Shopify errors:', json.errors);
    throw new Error(json.errors.map((e: any) => e.message).join('; '));
  }
  return json.data as T;
}