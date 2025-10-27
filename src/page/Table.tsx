import { useEffect, useState } from "react";

interface ClubStanding {
  rank: number;
  id: number;
  name: string;
  short_name: string;
  image: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsDifference: number;
  points: number;
}

const Table = () => {
  const [standings, setStandings] = useState<ClubStanding[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch standings data 
  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch("http://localhost:3000/api/standings", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const result = await res.json();

        // set standings data
        setStandings(result.data);
        // error handling
      } catch (err) {
        console.error("Gagal mengambil data standings:", err);
        setError("Tidak bisa memuat data klasemen. Pastikan sudah login atau server aktif.");
        // hasil loading selesai
      } finally {
        setLoading(false);
      }
    };

    fetchStandings();
  }, []);
    // Render states
  if (loading) return <p>Memuat data klasemen...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Klasemen Super League</h1>

      <table className="min-w-full border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-center">#</th>
            <th className="p-2 text-left">Klub</th>
            <th className="p-2 text-center">M</th>
            <th className="p-2 text-center">M</th>
            <th className="p-2 text-center">S</th>
            <th className="p-2 text-center">K</th>
            <th className="p-2 text-center">GD</th>
            <th className="p-2 text-center">Poin</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((team) => (
            <tr key={team.id} className="border-t hover:bg-gray-50">
              <td className="p-2 text-center font-medium">{team.rank}</td>
              <td className="flex items-center gap-2 p-2">
                <img src={team.image} alt={team.name} className="w-6 h-6" />
                <span>{team.name}</span>
              </td>
              <td className="p-2 text-center">{team.played}</td>
              <td className="p-2 text-center">{team.wins}</td>
              <td className="p-2 text-center">{team.draws}</td>
              <td className="p-2 text-center">{team.losses}</td>
              <td className="p-2 text-center">{team.goalsDifference}</td>
              <td className="p-2 text-center font-semibold">{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
