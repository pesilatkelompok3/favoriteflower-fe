import About from "@/components/About";
import ProductUs from "@/components/Home/productUs/ProductUs";
import Testimonial from "@/components/Home/testimonial/Testimonial";
import { Hero } from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beranda",
  description: "Ini Halaman Beranda FavoriteFlowers",
}


export default function Home() {
  return (
    <main>
      <Hero title={""} bread1={""} bread2={""} />
      <About />
      <ProductUs />
      <Testimonial />
    </main>
  );
}
