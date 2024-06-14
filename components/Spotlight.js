import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

export default function Spotlight({
  image,
  artist,
  slug,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const isFavorite = artPiecesInfo.find((artPiece) => {
    return artPiece.slug === slug;
  })?.isFavorite;

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
