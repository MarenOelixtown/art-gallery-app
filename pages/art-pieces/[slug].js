import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
  isFavorite,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const piecesIndex = pieces.findIndex((piece) => piece.slug === slug);

  const piece = pieces[piecesIndex];

  return (
    <ArtPieceDetails
      image={piece.imageSource}
      title={piece.name}
      artist={piece.artist}
      year={piece.year}
      genre={piece.genre}
      slug={piece.slug}
      onToggleFavorite={() => onToggleFavorite(piece.slug)}
      artPiecesInfo={artPiecesInfo}
      isFavorite={isFavorite}
    />
  );
}
