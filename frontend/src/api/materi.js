export async function ambilMateri() {
  let res;

  try {
    res = await fetch(
      `${import.meta.env.VITE_API_URL}/materi`
    );
  } catch {
    throw new Error('Tidak dapat terhubung ke server');
  }

  if (!res.ok) {
    throw new Error('Gagal mengambil data materi');
  }

  return res.json();
}