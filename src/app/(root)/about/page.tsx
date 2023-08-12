import { Hero } from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Ini Halaman Tentang FavoriteFlowers",
}

const About = () => {
  return (
    <div>
      <Hero title="Tentang Kami" bread1="Beranda" bread2="Tentang"/>
    </div>
  );
};

export default About;
