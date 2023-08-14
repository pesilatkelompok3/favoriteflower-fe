"use client";
import { Hero } from "@/components/Hero";
import React, { useState, useEffect } from "react";
import ProductHead from "@/components/Home/productUs/ProductHead";
import ProductCard from "@/components/Card/ProductCard";
import { Button } from "flowbite-react";
import SidebarProduk from "@/components/SidebarProduk";
import { fetchData } from "@/utils/utils";
import Aos from "aos";
import dotenv from "dotenv";

dotenv.config();

const Product = (): React.ReactElement => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetchData(`http://localhost:5000/products`);
      console.log("res:", response);
      setProducts(response);
    };
    fetchProducts();
    Aos.init();
  }, []);
  console.log("prod:", products);
  return (
    <>
      <Hero title="Product Kami" bread1="Beranda" bread2="Produk" />
      <ProductHead />
      <div className="flex justify-around w-screen md:mt-24">
        <div className="px-5 mt-5  md:w-3/4 sm:full">
          <div className="flex flex-row">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product: any) => (
                <div key={product.id}>
                  <ProductCard
                    data-aos="zoom-in"
                    name={product.name}
                    price={product.price}
                  />
                </div>
              ))}
            </div>
          </div>
          <Button color="light" className="mt-24 mx-auto border-primary">
            Tampil Lebih Banyak
          </Button>
        </div>
        <div className="flex flex-col justify-center">
          <SidebarProduk />
        </div>
      </div>
    </>
  );
};

export default Product;
