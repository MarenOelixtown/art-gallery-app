import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

export default function Spotlight({
  image,
  artist,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div>
      <p>{artist}</p>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <Image
        src={image}
        alt={`Picture from artist: ${artist}`}
        height={144}
        width={144}
      />
    </div>
  );
}
