import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
  }
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
    <div>
      <h2>{title}</h2>
      <p>{artist}</p>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
      <StyledLink href={`/art-pieces/${slug}`}>
        <Image
          src={image}
          alt={`Picture: ${title} from artist ${artist}`}
          height={144}
          width={144}
        />
      </StyledLink>
    </div>
  );
}
