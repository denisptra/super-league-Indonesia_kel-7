interface TeamItemProps {
  image: string;
  name: string;
  rank?: number;
}

export default function TeamItem({ image, name, rank }: TeamItemProps) {
  return (
    <div className="flex items-center gap-3 p-2 rounded hover:bg-neutral-50 cursor-pointer">
      <span className="text-sm font-bold">{rank}</span>
      <img src={image} alt={name} className="w-8" />
      <span className="text-sm">{name}</span>
    </div>
  );
}