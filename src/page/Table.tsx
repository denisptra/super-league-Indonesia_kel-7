import { useEffect, useState } from "react";

interface ClubStanding {
  rank: number;
  id: number;
  name: string;
  image: string;
  played: number;
  win: number;
  draw: number;
  loss: number;
  gf: number;
  ga: number;
  gd: number;
  points: number;
  form?: string[];
}

const Table = () => {
  const [standings, setStandings] = useState<ClubStanding[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const generateForm = (team: ClubStanding): string[] => {
    const totalMatches = Math.min(team.played, 3);
    const results: string[] = [];
    
    for (let i = 0; i < totalMatches; i++) {
      if (i < team.win) results.push("W");
      else if (i < team.win + team.draw) results.push("D");
      else results.push("L");
    }
    while (results.length < 3) results.push("-");
    return results;
  };

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:3000/api/standings", {
          headers: { Authorization:`Bearer ${token} `},
        });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const result = await res.json();

        const dataWithForm = result.data.map((team: ClubStanding) => ({
          ...team,
          form: generateForm(team),
        }));

        setStandings(dataWithForm);
      } catch (err) {
        console.error("Gagal mengambil data standings:", err);
        setError(
          "Tidak bisa memuat data klasemen. Pastikan sudah login atau server aktif."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchStandings();
  }, []);

  if (loading)
    return (
      <p className="text-center py-10 text-gray-500 animate-pulse">
        🔄 Memuat data klasemen...
      </p>
    );
  if (error)
    return (
      <p className="text-center text-red-500 mt-10 font-medium">{error}</p>
    );

  return (
    <div className="w-full mx-auto px-10 my-10">
      {/* ===== Header ===== */}
      <div className="w-full bg-[#0A518C] text-white py-3 px-5 rounded-t-2xl font-semibold text-lg shadow">
        Klasemen
      </div>

      {/* ===== Card Container ===== */}
      <div className="bg-white rounded-b-2xl shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-neutral-200 overflow-x-auto">
        <table className="min-w-full text-sm text-gray-800">
          <thead className="bg-[#E5F1FA] text-[#0A518C] uppercase text-xs border-b border-[#BFD7EA]">
            <tr>
              <th className="p-3 text-center w-10">#</th>
              <th className="p-3 text-left">Klub</th>
              <th className="p-3 text-center w-14">M</th>
              <th className="p-3 text-center w-10">M</th>
              <th className="p-3 text-center w-10">S</th>
              <th className="p-3 text-center w-10">K</th>
              <th className="p-3 text-center w-10">GM</th>
              <th className="p-3 text-center w-10">GK</th>
              <th className="p-3 text-center w-10">GD</th>
              <th className="p-3 text-center w-16">Poin</th>
              <th className="p-3 text-center w-36">Form</th>
            </tr>
          </thead>

          <tbody>
            {standings.map((team, index) => (
              <tr
                key={team.id}
                className={`border-b border-[#E0E8EF] hover:bg-[#F6FAFD] transition ${
                  index % 2 === 0 ? "bg-[#F9FBFD]" : "bg-white"
                }`}
              >
                {/* Peringkat */}
                <td className="p-3 text-center font-bold text-gray-700">
                  {team.rank}
                </td>

                {/* Klub */}
                <td className="p-3 flex items-center gap-2">
                  <img
                    src={team.image}
                    alt={team.name}
                    className="w-7 h-7 rounded-full border border-gray-300"
                  />
                  <span className="font-medium text-gray-700">
                    {team.name}
                  </span>
                </td>

                {/* Statistik */}
                <td className="p-3 text-center">{team.played}</td>
                <td className="p-3 text-center text-green-600 font-semibold">
                  {team.win}
                </td>
                <td className="p-3 text-center">{team.draw}</td>
                <td className="p-3 text-center text-red-500 font-semibold">
                  {team.loss}
                </td>
                <td className="p-3 text-center">{team.gf}</td>
                <td className="p-3 text-center">{team.ga}</td>
                <td className="p-3 text-center font-semibold text-gray-800">
                  {team.gd}
                </td>

                {/* Poin */}
                <td className="p-3 text-center font-bold text-[#0A518C]">
                  {team.points}
                </td>

                {/* Form */}
                <td className="p-3 text-center">
                  <div className="flex justify-center gap-1">
                    {team.form?.map((f, i) => (
                      <span
                        key={i}
                        className={`w-6 h-6 flex items-center justify-center text-xs font-bold rounded-full ${
                          f === "W"
                            ? "bg-green-500 text-white"
                            : f === "D"
                            ? "bg-gray-400 text-white"
                            : f === "L"
                            ? "bg-red-500 text-white"
                            : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-center text-xs text-gray-500 mt-3 italic">
        Data diperbarui otomatis setelah setiap pertandingan selesai.
      </p>
    </div>
  );
};

export default Table;