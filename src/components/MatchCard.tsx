import type { Team } from "../types/Match";

interface MatchCardProps {
  //id: number;
  homeTeam: Team;
  awayTeam: Team;
  formattedDate?: string;
  formattedTime?: string;
  /*
  home: string;
  away: string;
  homeName: string;
  awayName: string;
  time: string;
  date: string;
  */
}


export default function MatchCard({ homeTeam, awayTeam, formattedDate, formattedTime }: MatchCardProps) {

  return (
    <div className="w-56 h-[180px] bg-white rounded-xl shadow p-4 flex flex-col items-center justify-between flex-shrink-0">
      {/* Logo & VS */}
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-center">
          <img src={homeTeam.logo} alt={homeTeam.name} className="h-10" />
          <span className="text-xs mt-1 text-center">{homeTeam.name}</span>
        </div>
        <span className="text-sm font-medium">VS</span>
        <div className="flex flex-col items-center">
          <img src={awayTeam.logo} alt={awayTeam.name} className="h-10" />
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

