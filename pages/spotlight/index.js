import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({
  randomPiece,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <div>
      {randomPiece && (
        <Spotlight
          onToggleFavorite={() => onToggleFavorite(randomPiece.slug)}
          artPiecesInfo={artPiecesInfo}
          image={randomPiece.imageSource}
          artist={randomPiece.artist}
          slug={randomPiece.slug}
        />
      )}
    </div>
  );
}
