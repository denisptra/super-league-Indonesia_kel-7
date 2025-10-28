import { useEffect, useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";

interface Standing {
  rank: number;
  name: string;
  short_name: string;
  image: string;
  played: number;
  win: number;
  draw: number;
  loss: number;
  gf: number;
  ga: number;
  gd: number;
  points: number;
}

const StatsDashboard: React.FC = () => {
  const [standings, setStandings] = useState<Standing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3000/api/standings");
        const data = await res.json();
        setStandings(Array.isArray(data.data) ? data.data : []);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading)
    return (
      <p className="text-center text-slate-500 py-10">
        Memuat data klasemen...
      </p>
    );

  return (
    <div className="p-4 md:p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-slate-800">
            Klasemen Tim
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Data performa dan statistik gol tiap tim.
          </p>
        </div>

        <button
          type="button"
          onClick={() => alert("Tambah data tim")}
          className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:ring-2 focus:ring-sky-400"
        >
          <Plus className="h-4 w-4" />
          Tambah Tim
        </button>
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <table className="min-w-full border-separate border-spacing-0">
          <thead>
            <tr>
              {[
                "No",
                "Logo",
                "Tim",
                "Main",
                "Menang",
                "Seri",
                "Kalah",
                "Gol Masuk",
                "Gol Kebobolan",
                "Selisih",
                "Poin",
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
            {standings.length === 0 ? (
              <tr>
                <td colSpan={12} className="text-center py-12 text-slate-500">
                  Belum ada data klasemen.
                </td>
              </tr>
            ) : (
              standings.map((team, i) => (
                <tr
                  key={team.rank}
                  className="odd:bg-white even:bg-slate-50 border-b hover:bg-slate-100 transition"
                >
                  <td className="px-5 py-3 text-sm">{i + 1}</td>
                  <td className="px-5 py-3">
                    <img
                      src={team.image}
                      alt={team.name}
                      className="h-8 w-8 rounded object-contain"
                    />
                  </td>
                  <td className="px-5 py-3 font-medium text-slate-800">
                    {team.short_name || team.name}
                  </td>
                  <td className="px-5 py-3 text-center">{team.played}</td>
                  <td className="px-5 py-3 text-center text-emerald-700 font-semibold">
                    {team.win}
                  </td>
                  <td className="px-5 py-3 text-center">{team.draw}</td>
                  <td className="px-5 py-3 text-center text-rose-700 font-semibold">
                    {team.loss}
                  </td>
                  <td className="px-5 py-3 text-center">{team.gf}</td>
                  <td className="px-5 py-3 text-center">{team.ga}</td>
                  <td
                    className={`px-5 py-3 text-center font-semibold ${
                      team.gd >= 0
                        ? "text-emerald-700"
                        : "text-rose-700"
                    }`}
                  >
                    {team.gd}
                  </td>
                  <td className="px-5 py-3 text-center font-bold text-sky-700">
                    {team.points}
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => alert(`Edit tim: ${team.name}`)}
                        className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-slate-900 focus:ring-2 focus:ring-sky-400 h-9 w-9"
                        title="Edit"
                      >
                        <Edit className="h-4 w-4" />
                      </button>

                      <button
                        onClick={() =>
                          confirm(`Hapus data tim ${team.name}?`)
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

export default StatsDashboard;
