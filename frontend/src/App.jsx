import { useState, useEffect } from 'react';
import DaftarMateri from './components/DaftarMateri';
import { ambilMateri } from './api/materi';

function App() {
  const [materi, setMateri] = useState([]);
  const [memuat, setMemuat] = useState(true);
  const [galat, setGalat] = useState(null);

  async function muat() {
    setMemuat(true);
    setGalat(null);
    try {
      const data = await ambilMateri();
      setMateri(data);
    } catch (err) {
      setGalat(err.message);
    } finally {
      setMemuat(false);
    }
  }

  useEffect(() => {
    muat();
  }, []);

  return (
    <div>
      <h1>ArsipMateri</h1>
      {memuat && <p>Memuat...</p>}
      {galat && (
        <div>
          <p>{galat}</p>
          <button onClick={muat}>Coba lagi</button>
        </div>
      )}
      {!memuat && !galat && materi.length === 0 && <p>Belum ada materi</p>}
      {!memuat && !galat && materi.length > 0 && <DaftarMateri materi={materi} />}
    </div>
  );
}

export default App;