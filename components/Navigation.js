import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  const StyledNav = styled.div`
    margin: 10px;
  `;

  const StyledLink = styled(Link)`
    &:hover {
      color: hotpink;
    }
  `;

  return (
    <StyledNav>
      <p>
        <StyledLink href="/spotlight">Spotlight</StyledLink>
      </p>
      <p>
        <StyledLink href="/art-pieces">Pieces</StyledLink>
      </p>
      <p>
        <StyledLink href="/favorites">Favorites</StyledLink>
      </p>
    </StyledNav>
  );
}
