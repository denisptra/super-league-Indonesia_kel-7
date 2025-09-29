import { TodayMatchItem } from "./TodayMatchItem";

interface Match {
  homeLogo: string;
  homeName: string;
  awayLogo: string;
  awayName: string;
  score: string;
}

interface LeagueMatchListProps {
  title: string;
  matches: Match[];
}

export function LeagueMatchList({ title, matches }: LeagueMatchListProps) {
  return (
    <aside className="w-full bg-white rounded-2xl shadow">
      <div className="bg-[#0A518C] text-white px-4 py-2 rounded-t-2xl">
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
      <div className="flex flex-col divide-y">
        {matches.map((match, i) => (
          <TodayMatchItem key={i} {...match} />
        ))}
      </div>
    </aside>
  );
}
