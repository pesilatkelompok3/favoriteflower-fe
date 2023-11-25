import { Hero } from "@/components/Hero";
import ProductBody from "@/components/ProductBody";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FavoriteFlower | Semua Produk",
  description: "Ini Halaman Produk FavoriteFlowers",
};

const Product = (): React.ReactElement => {
  return (
    <>
      <Hero title="Product Kami" bread1="Beranda" bread2="Produk" />
      <ProductBody />
    </>
  );
};

export default Product;
