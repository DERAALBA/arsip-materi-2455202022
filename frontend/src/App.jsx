import { useState, useEffect } from 'react';
import DaftarMateri from './components/DaftarMateri.jsx';
import { ambilMateri } from './api/materi.js';

function App() {
  const [materi, setMateri] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function muatMateri() {
    setLoading(true);
    setError('');

    try {
      const data = await ambilMateri();
      setMateri(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    muatMateri();
  }, []);

  return (
    <div>
      <h1>ArsipMateri</h1>

      {loading && <p>Memuat...</p>}

      {!loading && error && (
        <div>
          <p>{error}</p>
          <button onClick={muatMateri}>Coba lagi</button>
        </div>
      )}

      {!loading && !error && materi.length === 0 && (
        <p>Belum ada materi.</p>
      )}

      {!loading && !error && materi.length > 0 && (
        <DaftarMateri materi={materi} />
      )}
    </div>
  );
}

export default App;