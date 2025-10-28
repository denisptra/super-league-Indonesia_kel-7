import { useEffect, useState } from "react";

interface Stats {
  title: string;
  value: number | string;
}

const Dashboard = () => {
  const [stats, setStats] = useState<Stats[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [matchesRes, teamsRes, newsRes] = await Promise.all([
          fetch("http://localhost:3000/api/matches"),
          fetch("http://localhost:3000/api/teams"),
          fetch("http://localhost:3000/api/news"),
        ]);

        const [matchesData, teamsData, newsData] = await Promise.all([
          matchesRes.json(),
          teamsRes.json(),
          newsRes.json(),
        ]);

        const totalMatches = matchesData.data?.length || 0;
        const totalTeams = teamsData.data?.length || 0;
        const totalNews = newsData.data?.length || 0;

        setStats([
          { title: "Total Pertandingan", value: totalMatches },
          { title: "Total Tim", value: totalTeams },
          { title: "Total Berita", value: totalNews },
        ]);
      } catch (err) {
        console.error("Gagal mengambil data dashboard:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-gray-500 py-10">
        Memuat statistik dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div
            key={s.title}
            className="bg-white rounded-xl shadow-md p-5 border border-sky-100 hover:shadow-lg transition"
          >
            <p className="text-gray-500 text-sm">{s.title}</p>
            <h2 className="text-3xl text-sky-700 mt-2 font-semibold">
              {s.value}
            </h2>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <h2 className="text-gray-700 text-lg font-medium mb-4">
          Aktivitas Mingguan
        </h2>
        <div className="h-48 flex items-center justify-center text-gray-400 text-sm">
          📈 (Grafik taruh di sini — bisa pakai Recharts atau Chart.js)
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
