import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <div>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecePreview
              slug={piece.slug}
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              onToggleFavorite={() => onToggleFavorite(piece.slug)}
              artPiecesInfo={artPiecesInfo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
