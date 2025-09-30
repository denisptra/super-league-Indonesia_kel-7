// src/components/NewsItem.tsx
interface NewsItemProps {
  image: string;
  title: string;
  source: string;
  time: string;
  isBig?: boolean; // kalau true → style lebih besar (news utama)
}

export function NewsItem({ image, title, source, time, isBig }: NewsItemProps) {
  return (
    <div className={`flex ${isBig ? "flex-col" : "items-center gap-3"} p-3`}>
      <img
        src={image}
        alt={title}
        className={`${isBig ? "w-full h-40 object-cover rounded-lg mb-3" : "w-12 h-12 rounded-md object-cover"}`}
      />
      <div className="flex flex-col">
        <h4 className={`font-medium text-neutral-800 ${isBig ? "text-base mb-1" : "text-sm"}`}>
          {title}
        </h4>
        <p className="text-xs text-neutral-500">
          {source} · {time}
        </p>
      </div>
    </div>
  );
}
