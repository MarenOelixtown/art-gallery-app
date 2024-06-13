import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";
import { useEffect, useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  const [randomPiece, setRandomPiece] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setRandomPiece(getRandomElement(data));
    }
  }, [data]);

  console.log(randomPiece);

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  console.log(data);
  console.log(data.name);
  return (
    <div>
      <ArtPieces pieces={data} />
    </div>
  );
}
