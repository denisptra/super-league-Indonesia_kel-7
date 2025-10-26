import type { Team } from "../types/Match";

// butuh logo dan score dari team 1 dan 2
interface TodayMatchItemProps {
  homeTeam: Team;
  awayTeam: Team;
  score_a: number;
  score_b: number;
}

export default function TodayMatchItem({ homeTeam, awayTeam, score_a, score_b }: TodayMatchItemProps) {
  return (
    <div className="flex items-center justify-between p-3">
      {/* Tim Home */}
      <div className="flex items-center gap-2 w-1/3">
        <span className="text-sm font-medium">{homeTeam.name}</span>
        <img src={homeTeam.logo} alt={homeTeam.name} className="w-7" />
      </div>

      {/* Skor */}
      <div className="flex text-sm font-bold">
        {score_a}
        <p> - </p>
        {score_b}
      </div>

      {/* Tim Away */}
      <div className="flex items-center gap-2 w-1/3 justify-end">
        <img src={awayTeam.logo} alt={awayTeam.name} className="w-7" />
        <span className="text-sm font-medium">{awayTeam.name}</span>
      </div>
    </div>
  );
}