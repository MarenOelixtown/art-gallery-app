import GlobalStyle from "../styles";
import useSWR from "swr";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  const [randomPiece, setRandomPiece] = useState(null);
  const [artPiecesInfo, setArtPiecesInfo] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);

  // const toggleFavourite = (slug) => {
  //   setArtPiecesInfo((prevInfo) => ({
  //     ...prevInfo,
  //     [slug]: {
  //       ...prevInfo[slug],
  //       isFavorite: !prevInfo[slug]?.isFavorite,
  //     },
  //   }));
  // };

  const toggleFavourite = (slug) => {
    setArtPiecesInfo((prevArtPiecesInfo) =>
      prevArtPiecesInfo.map((data) =>
        data.slug === slug ? { ...data, isFavorite: !data.isFavorite } : data
      )
    );
  };

  function onToggleFavorite() {
    console.log("button clicked");
  }

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
    <>
      <Layout>
        <GlobalStyle />
        <Component
          randomPiece={randomPiece}
          pieces={data}
          onToggleFavorite={onToggleFavorite}
          artPiecesInfo={artPiecesInfo}
          isFavorite={isFavorite}
          {...pageProps}
        />
      </Layout>
    </>
  );
}
