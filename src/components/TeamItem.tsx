interface TeamItemProps {
  image: string;
  name: string;
}

export default function TeamItem({ image, name }: TeamItemProps) {
  return (
    <div className="flex items-center gap-3 p-2 rounded hover:bg-neutral-50 cursor-pointer">
      <img src={image} alt={name} className="w-8" />
      <span className="text-sm">{name}</span>
    </div>
  );
}