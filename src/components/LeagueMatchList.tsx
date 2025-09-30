interface LeagueMatchListProps {
  homeLogo: string;
  homeName: string;
  awayLogo: string;
  awayName: string;
  score: string;
}

export default function LeagueMatchList({ homeLogo, homeName, awayLogo, awayName, score }: LeagueMatchListProps) {
  return (
    <div className="flex items-center justify-between p-3">
      {/* Tim Home */}
      <div className="flex items-center gap-2 w-1/3">
        <span className="text-sm font-medium">{homeName}</span>
        <img src={homeLogo} alt={homeName} className="w-7" />
      </div>

      {/* Skor */}
      <div className="text-sm font-bold">{score}</div>

      {/* Tim Away */}
      <div className="flex items-center gap-2 w-1/3 justify-end">
        <img src={awayLogo} alt={awayName} className="w-7" />
        <span className="text-sm font-medium">{awayName}</span>
      </div>
    </div>
  );
}