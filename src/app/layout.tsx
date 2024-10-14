import type { Metadata } from "next";
import "./globals.css";
import { Jost } from "@next/font/google";
import Header from "./components/Header";

const jost = Jost({
  subsets: ["latin"],
  weight: [
    "100", // Thin
    "200", // Extra Light
    "300", // Light
    "400", // Regular
    "500", // Medium
    "600", // Semi Bold
    "700", // Bold
    "800", // Extra Bold
    "900", // Black
  ],
});

export const metadata: Metadata = {
  title: "Meu Site de Reviews de Filmes",
  description:
    "Avaliações de filmes feitas por usuários, cobrindo todos os gêneros cinematográficos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
