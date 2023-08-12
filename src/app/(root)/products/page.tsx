import { Hero } from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produk",
  description: "Ini Halaman Produk FavoriteFlowers",
}

export default function Product() {
  return <Hero title="Product Kami" bread1="Beranda" bread2="Produk" />;
}
