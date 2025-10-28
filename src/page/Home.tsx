import { useEffect, useState } from "react";
import TeamItem from "../components/TeamItem";
import NewsItem from "../components/NewsItem";

interface Team {
  id: number;
  name: string;
  image: string;
  rank?: number;
}

interface Match {
  id: number;
  homeTeam: Team;
  awayTeam: Team;
  date: string;
  formattedDate?: string;
  formattedTime?: string;
  score_a: number;
  score_b: number;
  status: "Incoming" | "Finished";
}

interface News {
  id: number;
  title: string;
  authorName?: string;
  image: string;
  createdAt: string;
  hoursAgo?: number;
}

// ==== MATCH CARD COMPONENT ====
function MatchCard({
  homeTeam,
  awayTeam,
  formattedDate,
  formattedTime,
}: {
  homeTeam: Team;
  awayTeam: Team;
  formattedDate?: string;
  formattedTime?: string;
}) {
  return (
    <div className="w-56 h-[180px] bg-white rounded-xl shadow p-4 flex flex-col items-center justify-between flex-shrink-0">
      {/* Logo & VS */}
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-center">
          <img
            src={homeTeam.image || "/images/image-not-found.png"}
            alt={homeTeam.name}
            className="h-10"
          />
          <span className="text-xs mt-1 text-center">{homeTeam.name}</span>
        </div>
        <span className="text-sm font-medium">VS</span>
        <div className="flex flex-col items-center">
          <img
            src={awayTeam.image || "/images/image-not-found.png"}
            alt={awayTeam.name}
            className="h-10"
          />
          <span className="text-xs mt-1 text-center">{awayTeam.name}</span>
        </div>
      </div>

      {/* Waktu & Tanggal */}
      <div className="text-center mt-2">
        <p className="text-neutral-600">{formattedTime}</p>
        <p className="text-xs text-neutral-400">{formattedDate}</p>
      </div>
    </div>
  );
}

// ==== MATCH ITEM COMPONENT ====
function MatchItem({
  homeTeam,
  awayTeam,
  score_a,
  score_b,
}: {
  homeTeam: Team;
  awayTeam: Team;
  score_a: number;
  score_b: number;
}) {
  return (
    <div className="flex items-center justify-between p-3">
      {/* Tim Home */}
      <div className="flex items-center gap-2 w-1/3">
        <span className="text-sm font-medium">{homeTeam.name}</span>
        <img
          src={homeTeam.image || "/images/image-not-found.png"}
          alt={homeTeam.name}
          className="w-7"
        />
      </div>

      {/* Skor */}
      <div className="flex text-sm font-bold">
        <span>{score_a}</span>&nbsp;<span>-</span>&nbsp;<span>{score_b}</span>
      </div>

      {/* Tim Away */}
      <div className="flex items-center gap-2 w-1/3 justify-end">
        <img
          src={awayTeam.image || "/images/image-not-found.png"}
          alt={awayTeam.name}
          className="w-7"
        />
        <span className="text-sm font-medium">{awayTeam.name}</span>
      </div>
    </div>
  );
}

// ==== HALAMAN HOME ====
export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [topTeams, setTopTeams] = useState<Team[]>([]);
  const [incomingMatches, setIncomingMatches] = useState<Match[]>([]);
  const [finishedMatches, setFinishedMatches] = useState<Match[]>([]);
  const [recentNews, setRecentNews] = useState<News[]>([]);

  useEffect(() => {
    setIsLoading(true);

    Promise.all([
      fetch("http://localhost:3000/api/matches").then((res) => res.json()),
      fetch("http://localhost:3000/api/teams").then((res) => res.json()),
      fetch("http://localhost:3000/api/standings").then((res) => res.json()),
      fetch("http://localhost:3000/api/news").then((res) => res.json())
    ])
      .then(([matchResult, teamResult, standingResult, newsResult]) => {
        const matches: Match[] = matchResult.data;
        const allTeams: Team[] = teamResult.data;
        const standings = standingResult.data;
        const news: News[] = newsResult.data;

        const enrichedMatches = matches.map((m) => {
          const home = allTeams.find((t) => t.id === m.homeTeam.id);
          const away = allTeams.find((t) => t.id === m.awayTeam.id);

          const dateObj = new Date(m.date);
          const formattedDate = dateObj.toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          });
          const formattedTime = dateObj.toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          });

          return {
            ...m,
            homeTeam: { ...m.homeTeam, image: home?.image || "/images/image-not-found.png" },
            awayTeam: { ...m.awayTeam, image: away?.image || "/images/image-not-found.png" },
            formattedDate,
            formattedTime,
          };
        });

        setIncomingMatches(enrichedMatches.filter((m) => m.status === "Incoming"));
        setFinishedMatches(enrichedMatches.filter((m) => m.status === "Finished"));

        const enrichedTeams = allTeams
          .map((t) => {
            const standing = standings.find((s: { id: number; rank: number }) => s.id === t.id);
            return { ...t, rank: standing?.rank || 0 };
          })
          .filter((t) => t.rank !== 0)
          .sort((a, b) => (a.rank ?? 0) - (b.rank ?? 0));

        setTopTeams(enrichedTeams.slice(0, 5));

        const enrichedRecent = news
          .map((n) => {
            const createdAt = new Date(n.createdAt);
            const now = new Date();
            const diffHours = Math.floor(
              (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60)
            );
            return { ...n, hoursAgo: diffHours };
          })
          .filter((n) => (n.hoursAgo ?? 0) < 24);

        setRecentNews(enrichedRecent);
      })
      .catch((err) => console.error("Error:", err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto px-12 pt-7 pb-7 flex flex-col gap-7">
      {/* Pertandingan Mendatang */}
      <section className="bg-white rounded-2xl shadow p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Pertandingan Mendatang</h2>
        </div>
        <div className="overflow-x-auto">
          <div
            className={`flex gap-4 ${
              incomingMatches.length <= 2 ? "justify-center" : "justify-start"
            } min-w-max`}
          >
            {isLoading ? (
              <div className="py-6 text-center text-gray-500">Loading data...</div>
            ) : incomingMatches.length > 0 ? (
              incomingMatches.map((m) => <MatchCard key={m.id} {...m} />)
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
        {/* Kolom kiri: Top Teams */}
        <aside className="w-full bg-white rounded-2xl shadow shrink-3">
          <div className="bg-[#0A518C] text-white px-4 py-2 rounded-t-2xl">
            <h3 className="text-sm font-semibold">Liga Teratas</h3>
          </div>
          <div className="p-4 flex flex-col gap-2">
            {isLoading ? (
              <div className="py-6 text-center text-gray-500">Loading data...</div>
            ) : topTeams.length > 0 ? (
              topTeams.map((t, id) => <TeamItem key={id} {...t} rank={id + 1} />)
            ) : (
              <div className="py-6 text-center text-gray-500">Tidak ada ranking liga.</div>
            )}
          </div>
        </aside>

        {/* Kolom tengah: Finished Matches */}
        <aside className="w-full bg-white rounded-2xl shadow shrink-2">
          <div className="bg-[#0A518C] text-white px-4 py-2 rounded-t-2xl">
            <h3 className="text-sm font-semibold">Indonesia - Super League</h3>
          </div>
          <div className="flex flex-col divide-y">
            {isLoading ? (
              <div className="py-6 text-center text-gray-500">Loading data...</div>
            ) : finishedMatches.length > 0 ? (
              finishedMatches.map((m) => <MatchItem key={m.id} {...m} />)
            ) : (
              <div className="py-6 text-center text-gray-500">
                Tidak ada pertandingan yang sudah selesai.
              </div>
            )}
          </div>
        </aside>

        {/* Kolom kanan: Berita */}
        <aside className="w-full bg-white rounded-2xl shadow shrink-3">
          <div className="bg-[#0A518C] text-white px-4 py-2 rounded-t-2xl">
            <h3 className="text-sm font-semibold">Berita</h3>
          </div>
          <div className="flex flex-col divide-y">
            {isLoading ? (
              <div className="py-6 text-center text-gray-500">Loading data...</div>
            ) : recentNews.length > 0 ? (
              recentNews.map((n, id) => <NewsItem key={id} {...n} isBig={id === 0} />)
            ) : (
              <div className="py-6 text-center text-gray-500">Tidak ada berita terkini.</div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
