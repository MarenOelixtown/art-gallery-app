import ArtPieces from "@/components/ArtPieces";

export default function FavoritesPage({
  artPiecesInfo,
  onToggleFavorite,
  isFavorite,
}) {
  const favoritePieces = artPiecesInfo.filter((piece) => piece.isFavorite);
  return (
    <div>
      <ArtPieces
        pieces={favoritePieces}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        isFavorite={isFavorite}
      />
    </div>
  );
}
