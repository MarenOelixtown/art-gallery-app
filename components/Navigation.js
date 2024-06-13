import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <p>
        <Link href="/spotlight">Spotlight</Link>
      </p>
      <p>
        <Link href="/art-pieces">Pieces</Link>
      </p>
    </nav>
  );
}
