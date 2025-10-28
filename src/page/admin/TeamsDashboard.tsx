import { useEffect, useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";

/* ---------- Types ---------- */
interface Team {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface ApiResponse {
  data?: Team[];
}

/* ---------- Main Component ---------- */
const TeamsDashboard: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTeams = async (): Promise<void> => {
      try {
        const res = await fetch("http://localhost:3000/api/teams");
        const json: ApiResponse = await res.json();
        setTeams(Array.isArray(json.data) ? json.data : []);
      } catch (err) {
        console.error("Gagal mengambil data tim:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-slate-500 py-10">
        Memuat data tim...
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6">
      {/* ---------- Header ---------- */}
      <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-slate-800">
            Daftar Tim
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Kelola informasi tim yang berpartisipasi dalam liga.
          </p>
        </div>

        <button
          onClick={() => alert("Tambah tim baru")}
          className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:ring-2 focus:ring-sky-400"
        >
          <Plus className="h-4 w-4" />
          Tambah Tim
        </button>
      </div>

      {/* ---------- Table ---------- */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <table className="min-w-full border-separate border-spacing-0">
          <thead>
            <tr>
              {["No", "Logo", "Nama Tim", "Kota", "Aksi"].map(
                (head) => (
                  <th
                    key={head}
                    className="bg-slate-50 px-5 py-3 text-left text-xs font-semibold uppercase text-slate-600 border-b"
                  >
                    {head}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {teams.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-12 text-slate-500">
                  Belum ada tim terdaftar.
                </td>
              </tr>
            ) : (
              teams.map((team, i) => (
                <tr
                  key={team.id}
                  className="odd:bg-white even:bg-slate-50 border-b hover:bg-slate-100 transition"
                >
                  {/* No */}
                  <td className="px-5 py-3 text-sm font-medium text-slate-700">
                    {i + 1}
                  </td>

                  {/* Logo */}
                  <td className="px-5 py-3">
                    <img
                      src={team.image|| "/placeholder.png"}
                      alt={team.name}
                      className="h-9 w-9 rounded-full object-cover border border-slate-200"
                    />
                  </td>

                  {/* Nama Tim */}
                  <td className="px-5 py-3 text-slate-800 font-medium">
                    {team.name}
                  </td>

                  {/* Kota */}
                  <td className="px-5 py-3 text-sm text-slate-600">
                    {team.description}
                  </td>

                  {/* Aksi */}
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
                          confirm(`Hapus data tim "${team.name}"?`)
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

export default TeamsDashboard;
