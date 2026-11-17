USE arsip_materi;

INSERT INTO materi (judul, mata_kuliah, pertemuan, tautan) VALUES
('Pengantar HTML dan CSS', 'Pemrograman Web', 1, 'https://contoh.ac.id/web/p1.pdf'),
('JUDUL BARIS 2', 'MATKUL BARIS 2', 2, 'https://contoh.ac.id/...'),
('JUDUL BARIS 3', 'MATKUL BARIS 3', 3, NULL),
('UTS SUCI CAHYANTI', 'Pemrograman Web', 8, NULL);

SELECT * FROM materi;