import type { PoolConfig } from 'pg';

/**
 * Builds pg Pool options for local Postgres vs cloud hosts (Supabase, etc.).
 * Forces ssl.rejectUnauthorized=false for remote hosts to avoid
 * "self-signed certificate in certificate chain" errors when running locally.
 */
export function getPgPoolConfig(): PoolConfig {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL environment variable is not set');
  }

  const isLocal =
    /@(localhost|127\.0\.0\.1)(:|\/)/i.test(connectionString) ||
    connectionString.includes('host=localhost');

  if (isLocal) {
    return { connectionString, ssl: false };
  }

  // Remote/cloud DB (Supabase, etc.) — strip sslmode from the URL so the pg
  // driver doesn't re-enable cert verification, then set rejectUnauthorized:false
  const url = new URL(connectionString);
  url.searchParams.delete('sslmode');
  const cleanConnectionString = url.toString();

  return {
    connectionString: cleanConnectionString,
    ssl: { rejectUnauthorized: false },
  };
}
