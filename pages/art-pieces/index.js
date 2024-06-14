import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <div>
      <ArtPieces
        pieces={pieces}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        isFavorite={isFavorite}
      />
    </div>
  );
}
