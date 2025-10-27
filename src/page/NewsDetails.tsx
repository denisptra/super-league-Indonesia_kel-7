import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  status: string;
}

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/news/${id}`);
        const result = await res.json();
        setNewsItem(result.data);
      } catch (err) {
        console.error("Gagal memuat detail berita:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500 text-lg">
        🔄 Memuat detail berita...
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="text-center py-10 text-gray-500 text-lg">
        Berita tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="max-w-[900px] mx-auto bg-white shadow-lg rounded-2xl p-8 my-6">
      <img
        src={newsItem.image}
        alt={newsItem.title}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold text-neutral-800 mb-3">{newsItem.title}</h1>
      <p className="text-gray-500 mb-6">
        {new Date(newsItem.date).toLocaleDateString("id-ID")}
      </p>
      <p className="text-gray-700 leading-relaxed">{newsItem.description}</p>
    </div>
  );
};

export default NewsDetail;
