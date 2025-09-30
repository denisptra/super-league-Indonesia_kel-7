interface MatchCardProps {
  home: string;
  away: string;
  homeName: string;
  awayName: string;
  time: string;
  date: string;
}


export default function MatchCard({ home, away, homeName, awayName, time, date }: MatchCardProps) {

  return (
    <div className="w-56 h-[180px] bg-white rounded-xl shadow p-4 flex flex-col items-center justify-between flex-shrink-0">
      {/* Logo & VS */}
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-center">
          <img src={home} alt={homeName} className="h-10" />
          <span className="text-xs mt-1">{homeName}</span>
        </div>
        <span className="text-sm font-medium">VS</span>
        <div className="flex flex-col items-center">
          <img src={away} alt={awayName} className="h-10" />
          <span className="text-xs mt-1">{awayName}</span>
        </div>
      </div>

      {/* Waktu & Tanggal */}
      <div className="text-center mt-2">
        <p className="text-neutral-600">{time}</p>
        <p className="text-xs text-neutral-400">{date}</p>
      </div>
    </div>
  );

}

