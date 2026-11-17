function DaftarMateri({ materi }) {
  return (
    <ul>
      {materi.map((item) => (
        <li key={item.id}>
          <h3>{item.judul}</h3>
          <p>{item.mataKuliah}</p>
          <p>Pertemuan {item.pertemuan}</p>
          {item.tautan !== null && (
            <a href={item.tautan}>Buka</a>
          )}
        </li>
      ))}
    </ul>
  );
}

export default DaftarMateri;