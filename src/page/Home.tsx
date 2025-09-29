import { MatchCard } from "../components/MatchCard";

// Data dummy pertandingan
const matches = [
  { home: "https://placehold.co/40", away: "https://placehold.co/40", time: "12:00", date: "29 Sep 2025" },
  { home: "https://placehold.co/40", away: "https://placehold.co/40", time: "20:00", date: "29 Sep 2025" },
  { home: "https://placehold.co/40", away: "https://placehold.co/40", time: "20:00", date: "29 Sep 2025" },
  { home: "https://placehold.co/40", away: "https://placehold.co/40", time: "20:00", date: "29 Sep 2025" },
  { home: "https://placehold.co/40", away: "https://placehold.co/40", time: "20:00", date: "29 Sep 2025" },
  { home: "https://placehold.co/40", away: "https://placehold.co/40", time: "20:00", date: "29 Sep 2025" },
  { home: "https://placehold.co/40", away: "https://placehold.co/40", time: "20:00", date: "29 Sep 2025" },
  { home: "https://placehold.co/40", away: "https://placehold.co/40", time: "20:00", date: "29 Sep 2025" },
  { home: "https://placehold.co/40", away: "https://placehold.co/40", time: "20:00", date: "29 Sep 2025" },
  { home: "https://placehold.co/40", away: "https://placehold.co/40", time: "20:00", date: "29 Sep 2025" },
  { home: "https://placehold.co/40", away: "https://placehold.co/40", time: "20:00", date: "29 Sep 2025" },
  { home: "https://placehold.co/40", away: "https://placehold.co/40", time: "20:00", date: "29 Sep 2025" },
  { home: "https://placehold.co/40", away: "https://placehold.co/40", time: "20:00", date: "29 Sep 2025" },
  { home: "https://placehold.co/40", away: "https://placehold.co/40", time: "20:00", date: "29 Sep 2025" },
  { home: "https://placehold.co/40", away: "https://placehold.co/40", time: "20:00", date: "29 Sep 2025" },
  { home: "https://placehold.co/40", away: "https://placehold.co/40", time: "20:00", date: "29 Sep 2025" },
  { home: "https://placehold.co/40", away: "https://placehold.co/40", time: "20:00", date: "29 Sep 2025" },
  { home: "https://placehold.co/40", away: "https://placehold.co/40", time: "20:00", date: "29 Sep 2025" },
  { home: "https://placehold.co/40", away: "https://placehold.co/40", time: "20:00", date: "29 Sep 2025" },
  { home: "https://placehold.co/40", away: "https://placehold.co/40", time: "20:00", date: "29 Sep 2025" },
  { home: "https://placehold.co/40", away: "https://placehold.co/40", time: "20:00", date: "29 Sep 2025" },
  { home: "https://placehold.co/40", away: "https://placehold.co/40", time: "20:00", date: "29 Sep 2025" },
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
          {/* ...map list tim */}
        </aside>

        {/* Tengah */}
        <main className="flex-1 flex flex-col gap-6">
          <section className="bg-white rounded-2xl shadow p-4">Hari Ini</section>
          <section className="bg-white rounded-2xl shadow p-4">Indonesia Super League</section>
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