import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

export default function HomePage({ randomPiece, pieces }) {
  return (
    <div>
      {randomPiece && (
        <Spotlight
          image={randomPiece.imageSource}
          artist={randomPiece.artist}
        />
      )}

      <ArtPieces pieces={pieces} />
    </div>
  );
}
