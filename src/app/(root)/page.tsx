import About from "@/components/About";
import ProductUs from "@/components/Home/productUs/ProductUs";
import Testimonial from "@/components/Home/testimonial/Testimonial";
import { Hero } from "@/components/Hero";

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
