import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ randomPiece }) {
  return (
    <div>
      {randomPiece && (
        <Spotlight
          image={randomPiece.imageSource}
          artist={randomPiece.artist}
        />
      )}
    </div>
  );
}
