import React, { useEffect, useState } from "react";

type TeamStats = {
  played: number;
  win: number;
  draw: number;
  loss: number;
  points: number;
};

type Team = {
  id: number;
  name: string;
  short_name: string;
  image: string;
  description: string;
  stats: TeamStats;
};

// ✅ Komponen untuk 1 tim
const TeamCard = ({ team }: { team: Team }) => {
  return (
    <div className="w-full max-w-md mx-auto rounded-xl shadow-md bg-white overflow-hidden">
      {/* Header Gambar */}
      <div className="flex items-center gap-3 p-4 border-b">
        <img
          src={team.image}
          alt={team.name}
          className="w-14 h-14 object-contain"
        />
        <div>
          <h2 className="text-lg font-bold text-gray-800">{team.name}</h2>
          <p className="text-sm text-gray-500">{team.short_name}</p>
        </div>
      </div>

      {/* Deskripsi */}
      <div className="p-4">
        <p className="text-sm text-gray-600 leading-relaxed">
          {team.description}
        </p>
      </div>

      {/* Statistik */}
      <div className="grid grid-cols-5 text-center border-t">
        <div className="p-3">
          <p className="text-lg font-bold text-gray-800">{team.stats.played}</p>
          <p className="text-xs text-gray-500">Main</p>
        </div>
        <div className="p-3">
          <p className="text-lg font-bold text-green-600">{team.stats.win}</p>
          <p className="text-xs text-gray-500">Menang</p>
        </div>
        <div className="p-3">
          <p className="text-lg font-bold text-yellow-600">{team.stats.draw}</p>
          <p className="text-xs text-gray-500">Seri</p>
        </div>
        <div className="p-3">
          <p className="text-lg font-bold text-red-600">{team.stats.loss}</p>
          <p className="text-xs text-gray-500">Kalah</p>
        </div>
        <div className="p-3 bg-gray-50">
          <p className="text-lg font-bold text-blue-600">{team.stats.points}</p>
          <p className="text-xs text-gray-500">Poin</p>
        </div>
      </div>
    </div>
  );
};

// ✅ Komponen untuk ambil data API dan render list
const TeamList = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/teams")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal memuat data tim");
        return res.json();
      })
      .then((data) => {
        setTeams(data.data || []);
      })
      .catch((err) => {
        console.error(err);
        setError("Tidak bisa memuat data tim.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Memuat data tim...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {teams.length === 0 ? (
        <p className="text-center text-gray-500">Belum ada data tim.</p>
      ) : (
        teams.map((team) => <TeamCard key={team.id} team={team} />)
      )}
    </div>
  );
};

export default TeamList;

