interface MatchCardProps {
  home: string;
  away: string;
  time: string;
  date: string;
}

export function MatchCard({ home, away, time, date }: MatchCardProps) {
  return (
    <div className="w-56 h-[140px] bg-white rounded-xl shadow p-4 flex flex-col items-center justify-center flex-shrink-0">
      <div className="flex items-center justify-between w-full">
        <img src={home} className="w-10 h-10" />
        <span className="text-sm font-medium">VS</span>
        <img src={away} className="w-10 h-10" />
      </div>
      <p className="text-neutral-600 mt-2">{time}</p>
      <p className="text-xs text-neutral-400">{date}</p>
    </div>
  );
}