import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

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
