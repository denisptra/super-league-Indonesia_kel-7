import { MatchCard } from "../components/MatchCard";
import { TeamItem } from "../components/TeamItem";
import { TodayMatchItem } from "../components/TodayMatchItem";

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

const topTeams = [
  { logo: "/images/Lambang_Persija_Jakarta.svg.png", name: "Persija Jakarta" },
  { logo: "/images/Logo_Persib_Bandung.png", name: "Persib Bandung" },
];

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

export default function HomePage() {
  return (
    <div className="max-w-[1440px] mx-auto px-12 flex flex-col gap-7">
      
      {/* Pertandingan */}
      <section className="bg-white rounded-2xl shadow p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Pertandingan</h2>
          <span className="text-sm text-neutral-500">Semua Pertandingan</span>
        </div>
        <div className="flex gap-4 overflow-x-auto">
          {matches.map((m, i) => (
            <MatchCard key={i} {...m} />
          ))}
        </div>
      </section>

      {/* Layout 3 kolom */}
      <div className="flex gap-6">
        {/* Kolom kiri: Liga */}
        <aside className="w-80 bg-white rounded-2xl shadow p-4">
          <h3 className="text-lg font-semibold mb-4">Liga Teratas</h3>
            <div className="flex flex-col gap-2">
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
                    {todayMatches.map((match, i) => (
                    <TodayMatchItem key={i} {...match} />
                    ))}
                </div>
            </section>
                
          <section className="bg-white rounded-2xl shadow p-4">
            <h3 className="text-lg font-semibold mb-4">Indonesia Super League</h3>
          </section>
        </main>

        {/* Kolom kanan: Berita */}
        <aside className="w-80 bg-white rounded-2xl shadow p-4">
          <h3 className="text-lg font-semibold mb-4">Berita</h3>
          {/* ...map list berita */}
        </aside>
      </div>
    </div>
  );
}