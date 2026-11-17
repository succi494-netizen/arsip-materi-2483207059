import pool from './db.js';

try {
  const [rows] = await pool.query(
    'SELECT VERSION() AS versi, DATABASE() AS db, CURRENT_USER() AS pengguna'
  );
  console.log(rows[0]);
} catch (err) {
  console.error('Koneksi gagal. Kode error:', err.code);
} finally {
  await pool.end();
}