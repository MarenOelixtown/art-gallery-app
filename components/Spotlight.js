import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  align-content: space-between
  margin-bottom: 5px;
`;

const StyledP = styled.p`
  margin-right: 5px;
`;

const StyledBody = styled.div`
  margin: 20px;
`;

export default function Spotlight({
  image,
  artist,
  slug,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const isFavorite = artPiecesInfo.find((artPiece) => {
    return artPiece.slug === slug;
  })?.isFavorite;

  return (
    <StyledBody>
      <StyledDiv>
        <StyledP>{artist}</StyledP>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      </StyledDiv>
      <Image
        src={image}
        alt={`Picture from artist: ${artist}`}
        height={144}
        width={144}
      />
    </StyledBody>
  );
}
