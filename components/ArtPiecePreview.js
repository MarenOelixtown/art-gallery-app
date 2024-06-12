import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{artist}</p>
      <Image src={image} alt={title} height={144} width={144} />
    </div>
  );
}
