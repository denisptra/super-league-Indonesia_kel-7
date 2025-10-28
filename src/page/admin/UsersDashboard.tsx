import { useEffect, useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";

/* ---------- Types ---------- */
interface User {
  id: number;
  name: string;
  email: string;
  role: "Administrator" | "Editor" | "Writer" | string;
  createdAt: string;
}

/* ---------- Main Component ---------- */
const UsersDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("Token tidak ditemukan, user belum login.");
          return;
        }

        const res = await fetch("http://localhost:3000/api/users", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const json = await res.json();

        // Bisa handle dua format: array langsung atau object { data: [] }
        const result: User[] = Array.isArray(json)
          ? json
          : Array.isArray(json.data)
          ? json.data
          : [];

        setUsers(result);
      } catch (err) {
        console.error("Gagal mengambil data pengguna:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-slate-500 py-10">
        Memuat data pengguna...
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6">
      {/* ---------- Header ---------- */}
      <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-slate-800">
            Daftar Pengguna
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Kelola akun pengguna yang terdaftar di sistem.
          </p>
        </div>

        <button
          onClick={() => alert("Tambah pengguna baru")}
          className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:ring-2 focus:ring-sky-400"
        >
          <Plus className="h-4 w-4" />
          Tambah Pengguna
        </button>
      </div>

      {/* ---------- Table ---------- */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <table className="min-w-full border-separate border-spacing-0">
          <thead>
            <tr>
              {["No", "Nama", "Email", "Peran", "Dibuat Pada", "Aksi"].map(
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
            {users.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-12 text-slate-500">
                  Belum ada pengguna terdaftar.
                </td>
              </tr>
            ) : (
              users.map((user, i) => (
                <tr
                  key={user.id}
                  className="odd:bg-white even:bg-slate-50 border-b hover:bg-slate-100 transition"
                >
                  {/* No */}
                  <td className="px-5 py-3 text-sm font-medium text-slate-700">
                    {i + 1}
                  </td>

                  {/* Nama */}
                  <td className="px-5 py-3 font-medium text-slate-800">
                    {user.name}
                  </td>

                  {/* Email */}
                  <td className="px-5 py-3 text-sm text-slate-600">
                    {user.email}
                  </td>

                  {/* Role */}
                  <td className="px-5 py-3">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${
                        user.role === "Administrator"
                          ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                          : user.role === "Editor"
                          ? "bg-sky-50 text-sky-700 ring-sky-200"
                          : "bg-orange-50 text-orange-700 ring-orange-200"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  {/* Created At */}
                  <td className="px-5 py-3 text-sm text-slate-600 whitespace-nowrap">
                    {new Date(user.createdAt).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>

                  {/* Aksi */}
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => alert(`Edit pengguna: ${user.name}`)}
                        className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-slate-900 focus:ring-2 focus:ring-sky-400 h-9 w-9"
                        title="Edit"
                      >
                        <Edit className="h-4 w-4" />
                      </button>

                      <button
                        onClick={() =>
                          confirm(`Hapus pengguna "${user.name}"?`)
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

export default UsersDashboard;
