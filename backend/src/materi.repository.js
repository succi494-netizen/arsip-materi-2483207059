import pool from './db.js';

export async function semua() {
  const [rows] = await pool.query(
    'SELECT id, judul, mata_kuliah, pertemuan, tautan, dibuat FROM materi ORDER BY id'
  );
  return rows.map((r) => ({
    id: r.id,
    judul: r.judul,
    mataKuliah: r.mata_kuliah,
    pertemuan: r.pertemuan,
    tautan: r.tautan,
    dibuat: r.dibuat,
  }));
}