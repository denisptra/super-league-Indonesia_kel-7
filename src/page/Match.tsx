import React, { useEffect, useState } from "react";

type Team = {
  code: string;
  name?: string;
  logo?: string | null;
};

type MatchItem = {
  id: number;
  homeCode: string;
  awayCode: string;
  kickoff: string; // ISO string or hh:mm
  homeLogo?: string | null;
  awayLogo?: string | null;
};

const fallbackLogo = (code?: string, size = 64) =>
  `https://placehold.co/${size}x${size}?text=${encodeURIComponent(code ?? "T")}`;

const MatchPage: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [teamsMap, setTeamsMap] = useState<Record<string, Team>>({});
  const [todayMatches, setTodayMatches] = useState<MatchItem[]>([]);
  const [tomorrowMatches, setTomorrowMatches] = useState<MatchItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const logoFor = (code?: string, explicit?: string | null, size = 64) =>
    explicit ?? teamsMap[code ?? ""]?.logo ?? fallbackLogo(code, size);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function loadAll() {
      setLoading(true);
      setError(null);
      try {
        // fetch teams
        const tr = await fetch("http://localhost:3000/api/teams", { signal });
        if (!tr.ok) throw new Error("Gagal mengambil daftar tim");
        const tjson: Team[] = await tr.json();
        setTeams(tjson || []);
        const map: Record<string, Team> = {};
        (tjson || []).forEach((t) => (map[t.code] = t));
        setTeamsMap(map);

        // fetch matches: try ?date=today else fallback
        const mr = await fetch("http://localhost:3000/api/matches?date=today", { signal });
        const mjson = mr.ok ? await mr.json() : await (await fetch("http://localhost:3000/api/matches", { signal })).json();
        const mArr: MatchItem[] = Array.isArray(mjson) ? mjson : mjson.matches ?? [];
        setTodayMatches(mArr);

        // fetch tomorrow
        const trr = await fetch("http://localhost:3000/api/matches?date=tomorrow", { signal });
        const tj = trr.ok ? await trr.json() : [];
        const tomArr: MatchItem[] = Array.isArray(tj) ? tj : tj.matches ?? [];
        setTomorrowMatches(tomArr);
      } catch (err: any) {
        if (err.name !== "AbortError") setError(err.message ?? "Terjadi kesalahan");
      } finally {
        setLoading(false);
      }
    }

    loadAll();
    return () => controller.abort();
  }, []);

  const formatTime = (s: string) => {
    const d = new Date(s);
    if (!isNaN(d.getTime())) return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    return s;
  };

  // Render states
  if (loading) return <div className="p-8 text-center text-gray-500">Memuat data...</div>;
  if (error) return (
    <div className="p-8 text-center text-red-600">
      Error: {error}
      <div className="mt-3">
        <button onClick={() => location.reload()} className="px-4 py-2 bg-blue-600 text-white rounded">Muat ulang</button>
      </div>
    </div>
  );

  const codes = teams.length ? teams.map(t => t.code) : ["PSJ","PSB","BOR","ARM","PSY","PBY","BLU","MLU","PJP","BFC","MDU","PSS","PSK","SPD","PSM","DWU","PSBS","PST"];

  return (
    <main className="min-h-screen bg-gray-50 py-6 px-4">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-6">

        {/* TOP MARQUEE */}
        <div className="w-full max-w-[95%] bg-white rounded-2xl shadow-2xl px-3 py-4 relative z-0">
          <div className="relative overflow-hidden isolate">
            <div className="marquee flex items-center gap-6 will-change-transform" aria-hidden="false">
              <div className="marquee-track flex gap-6">
                {codes.map(code => (
                  <div key={`a-${code}`} className="flex flex-col items-center justify-center w-20">
                    <img src={logoFor(code)} alt={`${code} logo`} className="w-12 h-12 rounded" loading="lazy" />
                    <div className="text-[11px] text-zinc-600 mt-1">{code}</div>
                  </div>
                ))}
                {codes.map(code => (
                  <div key={`b-${code}`} className="flex flex-col items-center justify-center w-20">
                    <img src={logoFor(code)} alt={`${code} logo`} className="w-12 h-12 rounded" loading="lazy" />
                    <div className="text-[11px] text-zinc-600 mt-1">{code}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white/100 to-white/0" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white/100 to-white/0" />
          </div>
        </div>

        {/* MATCH CARDS */}
        <div className="w-full max-w-5xl flex flex-col items-center gap-6">
          {/* Hari Ini */}
          <section className="w-full bg-white rounded-2xl shadow-md overflow-hidden">
            <header className="bg-[#0A518C] px-5 py-3 rounded-t-2xl">
              <h2 className="text-white font-medium text-base">Hari Ini</h2>
            </header>

            <ul className="px-4 py-4 flex flex-col w-full space-y-2">
              {todayMatches.length ? todayMatches.map(m => (
                <li key={m.id} className="w-full bg-white rounded-lg hover:bg-gray-50 transition-colors"
                    aria-label={`Pertandingan ${m.homeCode} vs ${m.awayCode} pada ${m.kickoff}`}>
                  <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 py-3 px-2 sm:px-4">
                    <div className="flex items-center justify-end gap-2 w-full sm:w-48">
                      <span className="text-sm text-zinc-600 text-right truncate">{m.homeCode}</span>
                      <img src={logoFor(m.homeCode, m.homeLogo)} alt={`${m.homeCode} logo`} className="w-8 h-8 rounded" loading="lazy" />
                    </div>

                    <div className="flex-none text-neutral-500 font-medium text-base">
                      <time>{formatTime(m.kickoff)}</time>
                    </div>

                    <div className="flex items-center justify-start gap-2 w-full sm:w-48">
                      <img src={logoFor(m.awayCode, m.awayLogo)} alt={`${m.awayCode} logo`} className="w-8 h-8 rounded" loading="lazy" />
                      <span className="text-sm text-zinc-600 truncate">{m.awayCode}</span>
                    </div>
                  </div>
                </li>
              )) : <li className="text-sm text-zinc-500">Tidak ada pertandingan hari ini.</li>}
            </ul>
          </section>

          {/* Besok */}
          <section className="w-full bg-white rounded-2xl shadow-md overflow-hidden">
            <header className="bg-[#0A518C] px-5 py-3 rounded-t-2xl">
              <h2 className="text-white font-medium text-base">Besok</h2>
            </header>

            <ul className="px-4 py-4 flex flex-col w-full space-y-2">
              {tomorrowMatches.length ? tomorrowMatches.map(m => (
                <li key={m.id} className="w-full bg-white rounded-lg hover:bg-gray-50 transition-colors"
                    aria-label={`Pertandingan ${m.homeCode} vs ${m.awayCode}`}>
                  <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 py-3 px-2 sm:px-4">
                    <div className="flex items-center justify-end gap-2 w-full sm:w-48">
                      <span className="text-sm text-zinc-600 text-right truncate">{m.homeCode}</span>
                      <img src={logoFor(m.homeCode, m.homeLogo)} alt={`${m.homeCode} logo`} className="w-8 h-8 rounded" loading="lazy" />
                    </div>

                    <div className="flex-none text-neutral-500 font-medium text-base">
                      <time>{formatTime(m.kickoff)}</time>
                    </div>

                    <div className="flex items-center justify-start gap-2 w-full sm:w-48">
                      <img src={logoFor(m.awayCode, m.awayLogo)} alt={`${m.awayCode} logo`} className="w-8 h-8 rounded" loading="lazy" />
                      <span className="text-sm text-zinc-600 truncate">{m.awayCode}</span>
                    </div>
                  </div>
                </li>
              )) : <li className="text-sm text-zinc-500">Tidak ada pertandingan besok.</li>}
            </ul>
          </section>
        </div>
      </div>

      // CSS for marquee
      <style>{`
        .marquee { --duration: 22s; }
        .marquee-track {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          animation: marqueeScroll var(--duration) linear infinite;
          position: relative;
          z-index: 0;
          backface-visibility: hidden;
          will-change: transform;
        }
        .marquee-track:hover,
        .marquee-track:focus-within { animation-play-state: paused; }
        @keyframes marqueeScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .marquee img { border: 0; display: block; }
      `}</style>
    </main>
  );
};

export default MatchPage;