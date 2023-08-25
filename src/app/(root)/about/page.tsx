import { Hero } from "@/components/Hero";
import { Metadata } from "next";
<<<<<<< HEAD
=======

>>>>>>> 90a00cd55a36f9576710ba11d235db3aa25e0e44
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
