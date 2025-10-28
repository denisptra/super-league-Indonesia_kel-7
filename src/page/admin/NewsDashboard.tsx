import { useEffect, useState } from "react";
import { Plus, Edit, Trash2, Search } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  author: string;
  date: string;
  status: "published" | "pending" | "archived";
  image: string;
}

interface ApiResponse {
  data?: NewsItem[];
}

const NewsDashboard: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/news");
        const json: ApiResponse = await res.json();
        setNews(Array.isArray(json.data) ? json.data : []);
      } catch (err) {
        console.error("Gagal mengambil data berita:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading)
    return (
      <p className="text-center text-slate-500 py-10">Memuat data berita...</p>
    );

  return (
    <div className="p-4 md:p-6">
      {/* Header Section */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-slate-800">
            Daftar Berita
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Kelola berita terbaru untuk dashboard.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Cari berita..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64 pl-10 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          <button
            onClick={() => alert("Tambah berita baru")}
            className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-sm focus:ring-2 focus:ring-sky-400"
          >
            <Plus className="h-4 w-4" />
            Tambah Berita
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <table className="min-w-full border-separate border-spacing-0">
          <thead>
            <tr>
              {[
                "No",
                "Thumbnail",
                "Judul",
                "Penulis",
                "Tanggal",
                "Status",
                "Aksi",
              ].map((head) => (
                <th
                  key={head}
                  className="bg-slate-50 px-5 py-3 text-left text-xs font-semibold uppercase text-slate-600 border-b"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredNews.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-12 text-slate-500">
                  Tidak ada berita yang cocok dengan pencarian.
                </td>
              </tr>
            ) : (
              filteredNews.map((item, i) => (
                <tr
                  key={item.id}
                  className="odd:bg-white even:bg-slate-50 border-b hover:bg-slate-100 transition"
                >
                  <td className="px-5 py-3 text-sm font-medium text-slate-700">
                    {i + 1}
                  </td>
                  <td className="px-5 py-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-10 w-14 rounded-lg object-cover"
                    />
                  </td>
                  <td className="px-5 py-3 text-slate-800 font-medium">
                    {item.title}
                  </td>
                  <td className="px-5 py-3 text-slate-600 text-sm">
                    {item.author}
                  </td>
                  <td className="px-5 py-3 text-slate-600 text-sm">
                    {new Date(item.date).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-5 py-3 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        item.status === "published"
                          ? "bg-emerald-100 text-emerald-700"
                          : item.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => alert(`Edit berita: ${item.title}`)}
                        className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-slate-900 focus:ring-2 focus:ring-sky-400 h-9 w-9"
                        title="Edit"
                      >
                        <Edit className="h-4 w-4" />
                      </button>

                      <button
                        onClick={() =>
                          confirm(`Hapus berita "${item.title}"?`)
                        }
                        className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white text-rose-600 hover:text-rose-700 focus:ring-2 focus:ring-rose-400 h-9 w-9"
                        title="Hapus"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewsDashboard;
