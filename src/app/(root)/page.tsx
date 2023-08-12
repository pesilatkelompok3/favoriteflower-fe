import Link from "next/link";
import styles from "./page.module.css";
import About from "@/components/About";
import ProductUs from "@/components/Home/product/ProductUs";
import Testimonial from "@/components/Home/testimonial/Testimonial";

export default function Home() {
  return (
    <main>
      <div>
        <About />
        <ProductUs />
        <Testimonial />
        <h1>This is main</h1>
        <div className={styles.grid}>
          <Link href={"/product"}>Product</Link>
          <Link href={"/about"}>About Us</Link>
          <Link href={"/contact-us"}>Contact Us</Link>
        </div>
        <div className={styles.card}>
          <ul>
            <li>
              <Link href={"/admin/login"}>Admin Login</Link>
            </li>
            <li>
              <Link href={"/admin"}>Dashboard Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
