import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    color: hotpink;
  }
`;

const StyledBody = styled.div`
  margin: 10px;
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

export default function ArtPiecePreview({
  image,
  title,
  artist,
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
        <StyledLink href={`/art-pieces/${slug}`}>
          <StyledP>{artist}</StyledP>
        </StyledLink>
        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite}
        />
      </StyledDiv>
      <StyledLink href={`/art-pieces/${slug}`}>
        <Image
          src={image}
          alt={`Picture: ${title} from artist ${artist}`}
          height={144}
          width={144}
        />
      </StyledLink>
    </StyledBody>
  );
}
