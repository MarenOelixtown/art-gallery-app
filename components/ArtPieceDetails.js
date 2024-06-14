import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: black;
  &:hover {
    color: hotpink;
  }
`;

const StyledBody = styled.div`
  margin: 20px;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  align-content: space-between
  margin-bottom: 5px;
`;

const StyledP = styled.p`
  margin-right: 5px;
`;

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  slug,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const isFavorite = artPiecesInfo.find((artPiece) => {
    return artPiece.slug === slug;
  })?.isFavorite;

  return (
    <StyledBody>
      <h2>{title}</h2>
      <StyledDiv>
        <StyledP>{artist}</StyledP>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      </StyledDiv>
      <Image
        src={image}
        alt={`Picture: ${title} from artist ${artist}`}
        height={144}
        width={144}
      />
      <p>{year}</p>
      <p>{genre}</p>
      <StyledLink href="/art-pieces">Back to List</StyledLink>
    </StyledBody>
  );
}
