import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <div>
      <p>{artist}</p>
      <Image
        src={image}
        alt={`Picture from artist: ${artist}`}
        height={144}
        width={144}
      />
    </div>
  );
}
