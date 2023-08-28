"use client";

import ProductCard from "@/components/Home/productUs/ProductCard";
import { fetchData } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

type Product = {
  id: string;
  name: string;
  url: string;
};

export default function ProductUs() {
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft -= 336;
    }
  };

  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft += 336;
    }
  };
  const cardListStyle: React.CSSProperties = {
    scrollbarWidth: "none", // For Firefox
    msOverflowStyle: "none", // For Internet Explorer and Edge
    WebkitOverflowScrolling: "touch", // For iOS Safari
    scrollBehavior: "smooth",
  };
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      Aos.init({
        delay: 0,
        duration: 400,
      });

      const response = await fetchData(`${process.env.apiURL}/products`);

      setProducts(response);
    })();
    // fetchProducts();
  }, []);

  const maxDisplayedProducts = 8;

  return (
    <div className="w-full h-auto bg-white px-4 md:px-16 pt-3">
      <div className="w-full h-auto flex justify-center items-center">
        <div className="w-24 md:w-96 bg-black" style={{ height: "1px" }}></div>
        <h1 className="mx-4 text-lg font-bold underline">Product Kami</h1>
        <div className="w-24 md:w-96 bg-black" style={{ height: "1px" }}></div>
      </div>
      <div className="w-full h-52 md:h-72 relative md:px-28 flex items-center">
        <BsArrowLeftCircle
          onClick={scrollLeft}
          className="absolute left-10 text-4xl cursor-pointer hover:scale-110 hidden md:block"
        />
        <BsArrowRightCircle
          onClick={scrollRight}
          className="absolute right-10 text-4xl cursor-pointer hover:scale-110 hidden md:block"
        />
        <div
          ref={cardContainerRef}
          className="w-full h-auto md:p-4  whitespace-nowrap scroll-auto overflow-x-auto"
          style={cardListStyle}
        >
          {/* <ProductCard name /> */}
          <style>{`::-webkit-scrollbar { display: none; }`}</style>
          {products.slice(0, maxDisplayedProducts).map((product: Product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              data-aos="fade-down"
            >
              <ProductCard
                id={product.id}
                name={product.name}
                url={product.url}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
