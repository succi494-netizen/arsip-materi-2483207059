import DaftarMateri from './components/DaftarMateri';

const dataDummy = [
  {
    id: 1,
    judul: 'Pengantar React',
    mataKuliah: 'Pemrograman Web',
    pertemuan: 1,
    tautan: 'https://react.dev',
    dibuat: '2026-11-01',
  },
  {
    id: 2,
    judul: 'Dasar SQL',
    mataKuliah: 'Basis Data',
    pertemuan: 2,
    tautan: 'https://www.w3schools.com/sql/',
    dibuat: '2026-11-02',
  },
  {
    id: 3,
    judul: 'Konsep REST API',
    mataKuliah: 'Pemrograman Web',
    pertemuan: 3,
    tautan: null,
    dibuat: '2026-11-03',
  },
];

function App() {
  return (
    <div>
      <h1>ArsipMateri</h1>
      <DaftarMateri materi={dataDummy} />
    </div>
  );
}

export default App;