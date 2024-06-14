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
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  /*  const [isFavorite, setIsFavorite] = useState(false); */

  // const toggleFavourite = (slug) => {
  //   setArtPiecesInfo((prevInfo) => ({
  //     ...prevInfo,
  //     [slug]: {
  //       ...prevInfo[slug],
  //       isFavorite: !prevInfo[slug]?.isFavorite,
  //   }));
  // };
  useEffect(() => {
    if (data) {
      const initialArtPiecesInfo = data.map((piece) => ({
        ...piece,
        isFavorite: false,
      }));
      setArtPiecesInfo(initialArtPiecesInfo);
    }
  }, [data]);

  const toggleFavourite = (slug) => {
    console.log("button clicked");
    setArtPiecesInfo((prevData) =>
      prevData.map((piece) =>
        piece.slug === slug
          ? { ...piece, isFavorite: !piece.isFavorite }
          : piece
      )
    );
  };
  console.log(artPiecesInfo);

  /*  function onToggleFavorite() {
    
  } */

  useEffect(() => {
    if (data && data.length > 0) {
      setRandomPiece(getRandomElement(data));
    }
  }, [data]);

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component
          randomPiece={randomPiece}
          pieces={data}
          onToggleFavorite={toggleFavourite}
          artPiecesInfo={artPiecesInfo}
          {...pageProps}
        />
      </Layout>
    </>
  );
}
