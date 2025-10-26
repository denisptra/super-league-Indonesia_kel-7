import { useEffect, useState } from "react";
import type { Match } from "../types/Match";
import type { Team } from "../types/Match";

import  MatchCard  from "../components/MatchCard";
import  TeamItem  from "../components/TeamItem";
import  TodayMatchItem  from "../components/TodayMatchItem";
import  LeagueMatchList  from "../components/LeagueMatchList";
import  NewsItem  from "../components/NewsItem";

/*
const matches = [
    { home: "/images/Lambang_Persija_Jakarta.svg.png", away: "/images/Logo_Persib_Bandung.png", 
    homeName: "Persija Jakarta", awayName: "Persib Bandung", 
    time: "20:00", date: "29 Sep 2025" },

    { home: "/images/Lambang_Persija_Jakarta.svg.png", away: "/images/Logo_Persib_Bandung.png", 
    homeName: "Persija Jakarta", awayName: "Persib Bandung", 
    time: "20:00", date: "29 Sep 2025" },

    { home: "/images/Lambang_Persija_Jakarta.svg.png", away: "/images/Logo_Persib_Bandung.png", 
    homeName: "Persija Jakarta", awayName: "Persib Bandung", 
    time: "20:00", date: "29 Sep 2025" },

    { home: "/images/Lambang_Persija_Jakarta.svg.png", away: "/images/Logo_Persib_Bandung.png", 
    homeName: "Persija Jakarta", awayName: "Persib Bandung", 
    time: "20:00", date: "29 Sep 2025" },

    { home: "/images/Lambang_Persija_Jakarta.svg.png", away: "/images/Logo_Persib_Bandung.png", 
    homeName: "Persija Jakarta", awayName: "Persib Bandung", 
    time: "20:00", date: "29 Sep 2025" },

    { home: "/images/Lambang_Persija_Jakarta.svg.png", away: "/images/Logo_Persib_Bandung.png", 
    homeName: "Persija Jakarta", awayName: "Persib Bandung", 
    time: "20:00", date: "29 Sep 2025" },
];
*/

const topTeams = [
  { logo: "/images/Lambang_Persija_Jakarta.svg.png", name: "Persija Jakarta" },
  { logo: "/images/Logo_Persib_Bandung.png", name: "Persib Bandung" },
];

/*
const todayMatches = [
  {
    homeLogo: "/images/Lambang_Persija_Jakarta.svg.png",
    homeName: "Persija Jakarta",
    awayLogo: "/images/Logo_Persib_Bandung.png",
    awayName: "Persib Bandung",
    score: "2 - 1",
  },
  {
    homeLogo: "/images/Lambang_Persija_Jakarta.svg.png",
    homeName: "Persija Jakarta",
    awayLogo: "/images/Logo_Persib_Bandung.png",
    awayName: "Persib Bandung",
    score: "2 - 1",
  },
];
*/

const superLeagueMatches = [
  {
    homeLogo: "/images/Lambang_Persija_Jakarta.svg.png",
    homeName: "Persija Jakarta",
    awayLogo: "/images/Logo_Persib_Bandung.png",
    awayName: "Persib Bandung",
    score: "2 - 1",
  },
  {
    homeLogo: "/images/Lambang_Persija_Jakarta.svg.png",
    homeName: "Persija Jakarta",
    awayLogo: "/images/Logo_Persib_Bandung.png",
    awayName: "Persib Bandung",
    score: "2 - 1",
  },
];

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
  const [matches, setMatches] = useState<Match[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:3000/api/matches").then((res) => res.json()),
      fetch("http://localhost:3000/api/teams").then((res) => res.json())
    ])
      .then(([matchResult, teamResult]) => {
        const matches = matchResult.data;
        const allTeams = teamResult.data;

        // Gabungkan icon/logo dari teams ke masing-masing match
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
            homeTeam: { ...m.homeTeam, logo: home?.image || "/images/default-logo.png" },
            awayTeam: { ...m.awayTeam, logo: away?.image || "/images/default-logo.png" },
            formattedDate,
            formattedTime
          };
        });

        setMatches(enrichedMatches);
      })
      .catch((err) => console.error("Error:", err));
  }, []);
  
  return (
    <div className="max-w-[1440px] mx-auto px-12 pt-7 pb-7 flex flex-col gap-7">
      
      {/* Pertandingan */}
      <section className="bg-white rounded-2xl shadow p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Pertandingan</h2>
          <span className="text-sm text-neutral-500">Semua Pertandingan</span>
        </div>
        <div className="flex gap-4 overflow-x-auto">
          {matches.map((m, id) => (
            <MatchCard key={id} {...m} />
          ))}
        </div>
      </section>

      {/* Layout 3 kolom */}
      <div className="flex gap-6 items-start">
        {/* Kolom kiri: Liga */}
        <aside className="w-80 bg-white rounded-2xl shadow">
            <div className="bg-[#0A518C] text-white px-4 py-2 rounded-t-2xl">
                <h3 className="text-sm font-semibold">Liga Teratas</h3>
            </div>
            <div className="p-4 flex flex-col gap-2">
                {topTeams.map((team, i) => (
                <TeamItem key={i} {...team} />
                ))}
            </div>
        </aside>

        {/* Tengah */}
        <main className="flex-1 flex flex-col gap-6">
            <section className="w-full bg-white rounded-2xl shadow">
                <div className="bg-[#0A518C] text-white px-4 py-2 rounded-t-2xl flex justify-between items-center">
                    <button className="px-2">←</button>
                    <h3 className="text-sm font-semibold">Hari Ini</h3>
                    <button className="px-2">→</button>
                </div>
                <div className="flex flex-col divide-y">


                    {/*
                    {todayMatches.map((match, i) => (
                    <TodayMatchItem key={i} {...match} />
                    ))}
                    */}
                </div>
            </section>
                
            <section className="w-full bg-white rounded-2xl shadow">
                <div className="bg-[#0A518C] text-white px-4 py-2 rounded-t-2xl">
                    <h3 className="text-sm font-semibold">Indonesia - Super League</h3>
                </div>
                <div className="flex flex-col divide-y">
                    {superLeagueMatches.map((match, i) => (
                        <LeagueMatchList key={i} {...match} />
                    ))}
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