import pool from './db.js';

try {
  const [rows] = await pool.query(
    'SELECT VERSION() AS versi, DATABASE() AS db, CURRENT_USER() AS pengguna'
  );

  console.log('Koneksi database berhasil!');
  console.table(rows);
} catch (error) {
  console.error('Koneksi gagal:', error.code);
  console.error(error.message);
} finally {
  await pool.end();
}