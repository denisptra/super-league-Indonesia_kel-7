import React, { useEffect, useState } from "react";

type Team = {
  id: number;
  name: string;
  short_name: string;
  image: string;
};

type MatchItem = {
  id: number;
  team_a: number;
  team_b: number;
  date: string;
  location: string;
  status: string;
  score_a?: number;
  score_b?: number;
};



const MatchPage: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [matches, setMatches] = useState<MatchItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [teamsRes, matchesRes] = await Promise.all([
          fetch("http://localhost:3000/api/teams"),
          fetch("http://localhost:3000/api/matches"),
        ]);
        const teamsData = await teamsRes.json();
        const matchesData = await matchesRes.json();
        setTeams(teamsData.data || []);
        setMatches(matchesData.data || []);


      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getTeamById = (id: number) => teams.find((t) => t.id === id);
  const upcomingMatches = matches
    .filter((m) => m.status !== "Finished")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const finishedMatches = matches
    .filter((m) => m.status === "Finished")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500 text-lg animate-pulse">
        🔄️Memuat data pertandingan...
      </div>
    );
  }

  return (

    <main className="min-h-screen bg-gray-50 py-2 px-4">

      {/* TOP MARQUEE */}
      <div className="self-stretch bg-white rounded-2xl shadow-[1px_1px_5px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-start gap-2.5 my-5 overflow-hidden">
        <div className="self-stretch flex flex-col sm:flex-row items-center justify-center sm:justify-between border-b border-gray-100 px-8 py-6 hover:bg-gray-50 transition">
          
          <div className="marquee flex items-center gap-6 will-change-transform" aria-hidden="false">
            <div className="marquee-track flex gap-6">
          {/* Track pertama */}
        {teams?.map((team) => (
          <img
            key={`team1-${team.id}`}
            src={team.image || "https://placehold.co/31x31"}
            alt={team.name}
            className="w-16 h-16 object-cover rounded-full"
          />
        ))}
        {/* Track kedua (duplikasi untuk looping mulus) */}
        {teams?.map((team) => (
          <img
            key={`team2-${team.id}`}
            src={team.image || "https://placehold.co/31x31"}
            alt={team.name}
            className="w-16 h-16 object-cover rounded-full"
          />
        ))}
      </div>
    </div>
  </div>
</div>


      <div className="flex flex-col items-center justify-start w-full max-w-[1340px] gap-6 mx-auto">
        <div className="self-stretch bg-white rounded-2xl shadow-[1px_1px_5px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-start gap-2.5 my-5">
          <div className="self-stretch h-12 px-5 py-3.5 bg-[#0A518C] rounded-t-2xl flex items-center justify-start">
            <div className="text-base font-medium text-neutral-50 font-['Roboto']">
              Pertandingan Mendatang
            </div>
          </div>

          {upcomingMatches.length > 0 ? (
            upcomingMatches.map((match) => {
              const teamA = getTeamById(match.team_a);
              const teamB = getTeamById(match.team_b);
              const matchTime = new Date(match.date).toLocaleTimeString("id-ID", {
                hour: "2-digit",
                minute: "2-digit",
              });
              const matchDate = new Date(match.date).toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "short",
              });

              return (
                <div
                  key={match.id}
                  className="self-stretch flex flex-col sm:flex-row items-center justify-center sm:justify-between border-b border-gray-100 px-8 py-6 hover:bg-gray-50 transition"
                >
                  <div className="flex items-center justify-end w-60 gap-2">
                    <div className="text-sm font-medium text-zinc-700 text-right">
                      {teamA?.name || "Tim A"}
                    </div>
                    <img
                      className="w-10 h-10"
                      src={teamA?.image || "https://placehold.co/31x31"}
                      alt={teamA?.name}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center w-44 text-center">
                    <div className="text-lg font-medium text-[#0A518C] font-['Roboto']">
                      {matchDate}
                    </div>
                    <div className="text-sm text-gray-500">{matchTime}</div>
                    <p className="text-xs text-gray-400 italic">{match.location}</p>
                  </div>

                  {/* Team B */}
                  <div className="flex items-center justify-start w-60 gap-2">
                    <img
                      className="w-10 h-10"
                      src={teamB?.image || "https://placehold.co/31x31"}
                      alt={teamB?.name}
                    />
                    <div className="text-sm font-medium text-zinc-700">
                      {teamB?.name || "Tim B"}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500 py-5 text-sm">Tidak ada pertandingan yang akan datang.</p>
          )}
        </div>
        <div className="self-stretch bg-white rounded-2xl shadow-[1px_1px_5px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-start gap-2.5 my-5">
          <div className="self-stretch h-12 px-5 py-3.5 bg-[#0A518C] rounded-t-2xl flex items-center justify-start">
            <div className="text-base font-medium text-neutral-50 font-['Roboto']">
              Hasil Pertandingan
            </div>
          </div>

          {finishedMatches.length > 0 ? (
            finishedMatches.map((match) => {
              const teamA = getTeamById(match.team_a);
              const teamB = getTeamById(match.team_b);

              return (
                <div
                  key={match.id}
                  className="self-stretch flex flex-col sm:flex-row items-center justify-center sm:justify-between border-b border-gray-100 px-8 py-6 hover:bg-gray-50 transition"
                >
                  {/* Team A */}
                  <div className="flex items-center justify-end w-60 gap-2">
                    <div className="text-sm font-medium text-zinc-700 text-right">
                      {teamA?.name || "Tim A"}
                    </div>
                    <img
                      className="w-10 h-10"
                      src={teamA?.image || "https://placehold.co/31x31"}
                      alt={teamA?.name}
                    />
                  </div>

                  {/* Score + Date + Location */}
                  <div className="flex flex-col items-center justify-center w-44 text-center">
                    <div className="flex items-center justify-center text-neutral-800 font-['Roboto'] text-lg font-semibold gap-4">
                      <span>{match.score_a}</span>
                      <div className="flex items-center gap-2 text-sm font-normal text-neutral-500">
                        <span className="text-gray-400">|</span>
                        <span>
                          {new Date(match.date).toLocaleDateString("id-ID", {
                            day: "2-digit",
                            month: "short",
                          })}
                        </span>
                        <span className="text-gray-400">|</span>
                      </div>
                      <span>{match.score_b}</span>
                    </div>
                    <p className="text-xs text-gray-400 italic text-center">{match.location}</p>
                  </div>
                  <div className="flex items-center justify-start w-60 gap-2">
                    <img
                      className="w-10 h-10"
                      src={teamB?.image || "https://placehold.co/31x31"}
                      alt={teamB?.name}
                    />
                    <div className="text-sm font-medium text-zinc-700">
                      {teamB?.name || "Tim B"}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500 py-5 text-sm">Belum ada hasil pertandingan.</p>
          )}
        </div>
      </div>

      <style>{`
        .marquee {
        position: relative;
        width: 100%;
        overflow: hidden;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          animation: marqueeScroll 25s linear infinite;
          will-change: transform;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

    </main>
  );
};

export default MatchPage;