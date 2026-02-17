const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const isConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

function headers() {
  return {
    apikey: SUPABASE_ANON_KEY,
    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    'Content-Type': 'application/json',
    Prefer: 'return=representation',
  };
}

export async function saveResponse(response) {
  if (!isConfigured) {
    console.warn('Supabase not configured — response saved to localStorage only');
    return null;
  }

  const res = await fetch(`${SUPABASE_URL}/rest/v1/responses`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ id: response.id, data: response }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Failed to save response: ${err}`);
  }

  return res.json();
}

export async function fetchAllResponses() {
  if (!isConfigured) {
    return null; // caller will fall back to localStorage
  }

  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/responses?select=data&order=created_at.asc`,
    { headers: headers() }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Failed to fetch responses: ${err}`);
  }

  const rows = await res.json();
  return rows.map(row => row.data);
}

export async function deleteAllResponses() {
  if (!isConfigured) return null;

  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/responses?id=neq.00000000-0000-0000-0000-000000000000`,
    { method: 'DELETE', headers: headers() }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Failed to delete responses: ${err}`);
  }
}

export { isConfigured };
