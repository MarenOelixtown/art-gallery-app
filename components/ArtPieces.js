import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <div>
      {pieces.map((pieces) => (
        <ArtPiecePreview
          key={pieces.slug}
          image={pieces.imageSource}
          title={pieces.name}
          artist={pieces.artist}
        />
      ))}
    </div>
  );
}
