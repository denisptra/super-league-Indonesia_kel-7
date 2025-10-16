import { useState } from "react";

const NewsForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [authorId, setAuthorId] = useState(1); // misal sementara id user = 1

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newNews = { title, description, authorId };

    const res = await fetch("http://localhost:3000/api/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNews),
    });

    const data = await res.json();
    console.log("✅ Berita berhasil ditambahkan:", data);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Judul berita"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
      />
      <textarea
        placeholder="Deskripsi berita"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Tambah Berita
      </button>
    </form>
  );
};

export default NewsForm;
