import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{artist}</p>
      <Image
        src={image}
        alt={`Picture: ${title} from artist ${artist}`}
        height={144}
        width={144}
      />
      <p>{year}</p>
      <p>{genre}</p>
      <Link href="/art-pieces">Back to List</Link>
    </div>
  );
}
