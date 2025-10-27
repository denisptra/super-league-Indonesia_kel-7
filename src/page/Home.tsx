import { useEffect, useState } from "react";
import type { Match } from "../types/Match";
import type { Team } from "../types/Match";

import  MatchCard  from "../components/MatchCard";
import  TeamItem  from "../components/TeamItem";
import  MatchItem  from "../components/MatchItem";
import  NewsItem  from "../components/NewsItem";
//import { match } from "react-router-dom";

const newsList = [
  {
    image: "/images/Pep-Guardiola.webp",
    title: "Real Madrid Explore Vinicius Junior Swap Liverpool's Final Konate Offer",
    source: "SI",
    time: "1 jam Lalu",
  },
  {
    image: "/images/Pep-Guardiola.webp",
    title: "Real Madrid Explore Vinicius Junior Swap Liverpool's Final Konate Offer",
    source: "SI",
    time: "1 jam Lalu",
  },
  {
    image: "/images/Pep-Guardiola.webp",
    title: "Real Madrid Explore Vinicius Junior Swap Liverpool's Final Konate Offer",
    source: "SI",
    time: "1 jam Lalu",
  },
];

export default function HomePage() {
  {/* const [matches, setMatches] = useState<Match[]>([]); */}
  const [teams, setTeams] = useState<Team[]>([]);
  const [topTeams, setTopTeams] = useState<Team[]>([]);
  const [incomingMatches, setIncomingMatches] = useState<Match[]>([]);
  const [todayMatches, setTodayMatches] = useState<Match[]>([]);
  const [finishedMatches, setFinishedMatches] = useState<Match[]>([]);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:3000/api/matches").then((res) => res.json()),
      fetch("http://localhost:3000/api/teams").then((res) => res.json()),
      fetch("http://localhost:3000/api/standings").then((res) => res.json())
    ])
      .then(([matchResult, teamResult, standingResult]) => {
        const matches = matchResult.data;
        const allTeams = teamResult.data;
        const standings = standingResult.data;

        const enrichedMatches = matches.map((m: any) => {
          const home = allTeams.find((t: any) => t.id === m.homeTeam.id);
          const away = allTeams.find((t: any) => t.id === m.awayTeam.id);
          
          const dateObj = new Date(m.date);
          const formattedDate = dateObj.toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "long",
            year: "numeric"
          });

          const formattedTime = dateObj.toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
          });

          return {
            ...m,
            homeTeam: { ...m.homeTeam, logo: home?.image || "/images/image-not-found.png" },
            awayTeam: { ...m.awayTeam, logo: away?.image || "/images/image-not-found.png" },
            formattedDate,
            formattedTime
          };
        });

        {/* setMatches(enrichedMatches); */}

        const filteredIncoming = enrichedMatches.filter((m: any) => {
          return m.status === "Incoming";
        });

        setIncomingMatches(filteredIncoming);

        {/* current logic: segala today */}
        const today = new Date().toDateString();
        const filteredToday = enrichedMatches.filter((m: any) => {
          const matchDate = new Date(m.date).toDateString();
          return matchDate === today;
        });

        setTodayMatches(filteredToday);

        const filteredFinished = enrichedMatches.filter((m: any) => {
          return m.status === "Finished";
        });
        
        setFinishedMatches(filteredFinished);

        const enrichedTeams = allTeams.map((t: any) => {
          const standing = standings.find((s: any) => s.id === t.id);

          return {
            ...t,
            rank: standing?.rank || "Unranked"
          };
        });

        // order dlu rank
        const sorted = enrichedTeams.sort((a: any, b: any) => a.rank - b.rank);
        const topFive = sorted.slice(0, 5);
        setTopTeams(topFive);
      })
      .catch((err) => console.error("Error:", err));
  }, []);
  
  return (
    <div className="max-w-[1440px] mx-auto px-12 pt-7 pb-7 flex flex-col gap-7">
      
      {/* Pertandingan incoming */}
      <section className="bg-white rounded-2xl shadow p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Pertandingan Mendatang</h2>
          {/* <span className="text-sm text-neutral-500">Semua Pertandingan</span> */}
        </div>
        <div className="overflow-x-auto">
          <div
            className={`flex gap-4 ${
              incomingMatches.length <= 2 ? "justify-center" : "justify-start"
            } min-w-max`}
          >
            {incomingMatches.length > 0 ? (
              incomingMatches.map((m, id) => (
              <MatchCard key={id} {...m} />
            ))
            ) : (
              <div className="py-6 text-center text-gray-500">
                Tidak ada pertandingan mendatang.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Layout 3 kolom */}
      <div className="flex gap-6 items-start">
        {/* Kolom kiri: top teams*/}
        <aside className="w-80 bg-white rounded-2xl shadow">
            <div className="bg-[#0A518C] text-white px-4 py-2 rounded-t-2xl">
                <h3 className="text-sm font-semibold">Liga Teratas</h3>
            </div>
            <div className="p-4 flex flex-col gap-2">
                {topTeams.map((t, id) => (
                <TeamItem key={id} {...t} />
                ))}
            </div>
        </aside>

        {/* Tengah */}
        <main className="flex-1 flex flex-col gap-6">
            {/* Today match */}
            <section className="w-full bg-white rounded-2xl shadow">
                <div className="bg-[#0A518C] text-white px-4 py-2 rounded-t-2xl flex justify-between items-center">
                    {/*<button className="px-2">←</button>*/}
                    <h3 className="text-sm font-semibold">Hari Ini</h3>
                    {/*<button className="px-2">→</button>*/}
                </div>
                <div className="flex flex-col divide-y">
                  {todayMatches.length > 0 ? (
                    todayMatches.map((m, id) => (
                      <MatchItem key={id} {...m} />
                    ))
                  ) : (
                    <div className="py-6 text-center text-gray-500">
                      Tidak ada pertandingan hari ini.
                    </div>
                  )}
                </div>
            </section>
                
            {/* finished matches */}
            <section className="w-full bg-white rounded-2xl shadow">
                <div className="bg-[#0A518C] text-white px-4 py-2 rounded-t-2xl">
                    <h3 className="text-sm font-semibold">Indonesia - Super League</h3>
                </div>
                <div className="flex flex-col divide-y">
                    {finishedMatches.length > 0 ? (finishedMatches.map((m, id) => (
                        <MatchItem key={id} {...m} />
                    ))
                    ) : (
                      <div className="py-6 text-center text-gray-500">
                        Tidak ada pertandingan yang sudah selesai.
                      </div>
                    )}
                </div>
            </section>
        </main>

        {/* Kolom kanan: Berita */}
        <aside className="w-80 bg-white rounded-2xl shadow">
            <div className="bg-[#0A518C] text-white px-4 py-2 rounded-t-2xl">
                <h3 className="text-sm font-semibold">Berita</h3>
            </div>
          {/* ...map list berita */}
            <div className="flex flex-col divide-y">
                {newsList.map((news, i) => (
                <NewsItem key={i} {...news} isBig={i === 0} />
                ))}
            </div>
        </aside>
      </div>
           
    </div>
  );
}