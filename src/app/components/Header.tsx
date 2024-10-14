// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 pb-12">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold">
          moviedex
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/filmes" className="hover:underline">
              Filmes
            </Link>
          </li>
          <li>
            <Link href="/avaliacoes" className="hover:underline">
              Avaliações
            </Link>
          </li>
        </ul>
        <div></div>
        <div className="flex">Entre ou Registre-se</div>
      </nav>
    </header>
  );
}
