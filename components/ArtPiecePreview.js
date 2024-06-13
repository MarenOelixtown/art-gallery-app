import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{artist}</p>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <Image
        src={image}
        alt={`Picture: ${title} from artist ${artist}`}
        height={144}
        width={144}
      />
    </div>
  );
}
