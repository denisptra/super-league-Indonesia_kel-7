import { useEffect, useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";

/* ---------- Types ---------- */
type MatchStatus = "incoming" | "live" | "finished" | string;

interface Team {
  id?: number | string;
  name: string;
  short_name?: string;
  image: string;
}

interface ApiMatch {
  id?: number | string;
  homeTeam?: Team;
  awayTeam?: Team;
  home_team?: Team;
  away_team?: Team;
  status?: MatchStatus;
  score_a?: number | string | null;
  score_b?: number | string | null;
  home_score?: number | string | null;
  away_score?: number | string | null;
  date?: string;
  location?: string;
}

interface MatchItem {
  id: number | string;
  homeTeam: Team;
  awayTeam: Team;
  status?: MatchStatus;
  score_a?: number | null;
  score_b?: number | null;
  date: string;
  location?: string;
}

interface ApiResponse {
  data?: ApiMatch[];
}

/* ---------- Helpers ---------- */
const fmtDateTime = (iso: string): string => {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "-";
  return d.toLocaleString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const statusBadge = (status?: MatchStatus): string => {
  switch ((status ?? "").toLowerCase()) {
    case "live":
      return "bg-red-50 text-red-700 ring-red-200";
    case "finished":
      return "bg-emerald-50 text-emerald-700 ring-emerald-200";
    default:
      return "bg-yellow-50 text-yellow-700 ring-yellow-200";
  }
};

type Outcome = "homeWin" | "awayWin" | "draw" | "unknown";
const getOutcome = (m: MatchItem): Outcome => {
  const hs = m.score_a;
  const as = m.score_b;
  if (typeof hs !== "number" || typeof as !== "number") return "unknown";
  if (hs > as) return "homeWin";
  if (as > hs) return "awayWin";
  return "draw";
};

const toNumber = (val: string | number | null | undefined): number | null => {
  if (val === null || val === undefined || val === "") return null;
  const parsed = Number(val);
  return Number.isFinite(parsed) ? parsed : null;
};

/* ---------- Sub Component ---------- */
interface TeamCellProps {
  team: Team;
  highlight?: boolean;
  align?: "left" | "right";
}

const TeamCell: React.FC<TeamCellProps> = ({
    team,
  highlight = false,
  align = "left",
}) => (
  <div
    className={`flex items-center gap-3 ${
      align === "right" ? "justify-end" : ""
    }`}
  >
    <div
      className={`min-w-0 ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      <div
        className={`truncate ${
          highlight
            ? "font-semibold text-slate-900"
            : "font-medium text-slate-800"
        }`}
      >
        {team.name}
      </div>
      {team.short_name && (
        <div className="text-xs text-slate-500">{team.short_name}</div>
      )}
    </div>
  </div>
);

/* ---------- Main Component ---------- */
const MatchDashboard: React.FC = () => {
  const [matches, setMatches] = useState<MatchItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMatches = async (): Promise<void> => {
      try {
        const res = await fetch("http://localhost:3000/api/matches");
        const json: ApiResponse = await res.json();

        const list: MatchItem[] = (json.data ?? []).map((m) => ({
          id:
            m.id ??
            globalThis.crypto?.randomUUID?.() ??
            String(Math.random()),
          homeTeam: m.homeTeam ?? m.home_team ?? { name: "-", image: "" },
          awayTeam: m.awayTeam ?? m.away_team ?? { name: "-", image: "" },
          status: m.status ?? "incoming",
          score_a: toNumber(m.score_a ?? m.home_score),
          score_b: toNumber(m.score_b ?? m.away_score),
          date: m.date ?? "",
          location: m.location ?? "-",
        }));

        setMatches(list);
      } catch (err) {
        console.error("Gagal mengambil data pertandingan:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading)
    return (
      <div className="text-center text-gray-500 py-10">
        Memuat data pertandingan...
      </div>
    );

  return (
    <>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-800">
            Daftar Pertandingan
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Jadwal dan hasil pertandingan terbaru.
          </p>
        </div>

        <button
          type="button"
          onClick={() => alert("Tambah pertandingan")}
          className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:ring-2 focus:ring-sky-400"
        >
          <Plus className="h-4 w-4" />
          Tambah Pertandingan
        </button>
      </div>

      {/* Table */}
      <div className="relative overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full table-fixed border-separate border-spacing-0">
          <thead>
            <tr>
              {[
                "No",
                "Tanggal",
                "Status",
                "Home",
                "Skor",
                "Away",
                "Lapangan",
                "Aksi",
              ].map((h) => (
                <th
                  key={h}
                  className="bg-slate-50 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 border-b"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {matches.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="px-6 py-16 text-center text-slate-500"
                >
                  Belum ada data pertandingan.
                </td>
              </tr>
            ) : (
              matches.map((m, i) => {
                const outcome = getOutcome(m);
                const homeHighlight = outcome === "homeWin";
                const awayHighlight = outcome === "awayWin";

                return (
                  <tr
                    key={m.id}
                    className="odd:bg-white even:bg-slate-50 border-b hover:bg-slate-100 transition"
                  >
                    <td className="px-5 py-4 text-sm font-medium text-slate-700 w-14">
                      {i + 1}
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-700 whitespace-nowrap">
                      {fmtDateTime(m.date)}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${statusBadge(
                          m.status
                        )}`}
                      >
                        {(m.status ?? "incoming").toUpperCase()}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-right">
                      <TeamCell
                        team={m.homeTeam}
                        highlight={homeHighlight}
                        align="right"
                      />
                    </td>

                    <td className="px-5 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <span
                          className={`px-2 py-1 rounded-lg border text-sm font-semibold min-w-[2.5rem] text-center ${
                            homeHighlight
                              ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                              : outcome === "awayWin"
                              ? "bg-slate-50 border-slate-200 text-slate-400"
                              : "bg-slate-50 border-slate-200 text-slate-700"
                          }`}
                        >
                          {m.score_a ?? "-"}
                        </span>
                        <span className="text-slate-400 font-semibold">:</span>
                        <span
                          className={`px-2 py-1 rounded-lg border text-sm font-semibold min-w-[2.5rem] text-center ${
                            awayHighlight
                              ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                              : outcome === "homeWin"
                              ? "bg-slate-50 border-slate-200 text-slate-400"
                              : "bg-slate-50 border-slate-200 text-slate-700"
                          }`}
                        >
                          {m.score_b ?? "-"}
                        </span>
                      </div>
                    </td>

                    <td className="px-5 py-4 text-left">
                      <TeamCell
                        team={m.awayTeam}
                        highlight={awayHighlight}
                        align="left"
                      />
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-700">
                      {m.location || <span className="text-slate-400">-</span>}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => alert(`Edit match ID: ${m.id}`)}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-slate-900 focus:ring-2 focus:ring-sky-400"
                          title="Edit"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() =>
                            confirm(`Hapus pertandingan ID: ${m.id}?`)
                          }
                          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-rose-600 hover:text-rose-700 focus:ring-2 focus:ring-rose-400"
                          title="Hapus"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MatchDashboard;
