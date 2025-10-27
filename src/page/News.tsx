import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  status: string;
}

const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/news");
        const result = await res.json();
        setNews(result.data || []);
      } catch (err) {
        console.error("Gagal fetch berita:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500 text-lg">
        Memuat berita...
      </div>
    );
  }

  const publishedNews = news.filter(
    (item) => item.status?.toLowerCase() === "published"
  );

  if (publishedNews.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 text-lg">
        Belum ada berita yang dipublikasikan.
      </div>
    );
  }

  // ✅ Ambil berita utama dari hasil filter
  const beritaUtama = publishedNews[0];
  const beritaPopuler = publishedNews.slice(1);

  return (
    <div className="w-full max-w-[1340px] h-auto bg-white rounded-2xl shadow-lg flex flex-col gap-10 p-5 mx-auto my-5">
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-7">
        {/* === BERITA UTAMA === */}
        <div className="w-full lg:w-[620px] flex flex-col gap-6">
          <Link to={`/news/${beritaUtama.id}`}>
            <img
              className="w-full h-96 rounded-lg object-cover hover:opacity-90 transition"
              src={beritaUtama.image}
              alt={beritaUtama.title}
            />
          </Link>

          <div className="flex flex-col gap-3.5">
            <Link to={`/news/${beritaUtama.id}`}>
              <h2 className="text-neutral-800 text-2xl font-bold leading-9 hover:text-sky-700 transition">
                {beritaUtama.title}
              </h2>
            </Link>
            <p className="text-neutral-500 text-base font-medium">
              {new Date(beritaUtama.date).toLocaleDateString("id-ID")}
            </p>
            <p className="text-gray-600 text-justify line-clamp-4">
              {beritaUtama.description}
            </p>
          </div>
        </div>

        {/* === BERITA POPULER === */}
        <div className="w-full lg:w-[670px] flex flex-col pt-2.5">
          <h3 className="text-neutral-800 text-xl font-bold mb-4">
            Berita Populer
          </h3>
          {beritaPopuler.slice(0, 5).map((item, index) => (
            <div
              key={item.id}
              className={`flex items-start gap-5 py-3 ${
                index < 4 ? "border-b border-gray-200" : ""
              }`}
            >
              <div className="w-9 h-9 bg-sky-800 rounded-full flex justify-center items-center flex-shrink-0">
                <span className="text-white text-xl font-medium">
                  {index + 1}
                </span>
              </div>

              <div className="flex-grow flex flex-col gap-2.5">
                <Link to={`/news/${item.id}`}>
                  <h6 className="text-neutral-800 text-lg font-medium leading-normal hover:text-sky-700 transition">
                    {item.title}
                  </h6>
                  <p className="text-gray-600">
                    {item.description.slice(0, 60) +
                      (item.description.length > 60 ? "..." : "")}
                  </p>
                </Link>
                <p className="text-neutral-500 text-sm font-medium">
                  {new Date(item.date).toLocaleDateString("id-ID")}
                </p>
              </div>

              <Link to={`/news/${item.id}`}>
                <img
                  className="w-20 h-20 rounded-lg object-cover hover:opacity-90 transition flex-shrink-0"
                  src={item.image}
                  alt={item.title}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
