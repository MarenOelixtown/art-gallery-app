import ArtPiecePreview from "./ArtPiecePreview";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: hotpink;
  }
`;

export default function ArtPieces({ pieces }) {
  return (
    <div>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <StyledLink href={`/art-pieces/${piece.slug}`}>
              <ArtPiecePreview
                image={piece.imageSource}
                title={piece.name}
                artist={piece.artist}
              />
            </StyledLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
