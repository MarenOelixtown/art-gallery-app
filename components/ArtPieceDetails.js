import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  isFavorite,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{artist}</p>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
      <Image
        src={image}
        alt={`Picture: ${title} from artist ${artist}`}
        height={144}
        width={144}
      />
      <p>{year}</p>
      <p>{genre}</p>
      <Link href="/art-pieces">Back to List</Link>
    </div>
  );
}
