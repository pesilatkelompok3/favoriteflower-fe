import About from "@/components/About";
import ProductUs from "@/components/Home/productUs/ProductUs";
import Testimonial from "@/components/Home/testimonial/Testimonial";
import ContactUs from "@/components/Home/contactUs/ContactUs";
import { Hero } from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beranda",
  description: "Ini Halaman Beranda FavoriteFlowers",
}


export default function Home() {
  return (
    <>
      <Hero title={""} bread1={""} bread2={""} />
      <About />
      <ProductUs />
      <Testimonial />
      <ContactUs />
    </>
  );
}
