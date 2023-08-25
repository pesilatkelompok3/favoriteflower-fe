import { Hero } from "@/components/Hero";
import { Metadata } from "next";
import AboutComponent from "@/components/About";

export const metadata: Metadata = {
  title: "FlowerFavorite | Tentang Kami",
  description: "Ini Halaman Tentang FavoriteFlowers",
};

const About = () => {
  return (
    <>
      <Hero title="Tentang Kami" bread1="Beranda" bread2="Tentang" />
      <AboutComponent />
    </>
  );
};

export default About;
