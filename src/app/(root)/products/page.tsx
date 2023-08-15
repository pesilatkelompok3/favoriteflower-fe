"use client";
import { Hero } from "@/components/Hero";
import React, { useState, useEffect } from "react";
import ProductHead from "@/components/Home/productUs/ProductHead";
import ProductCard from "@/components/Card/ProductCard";
import { Button } from "flowbite-react";
import SidebarProduct from "@/components/SidebarProduct";
import { fetchData } from "@/lib/utils";

const Product = (): React.ReactElement => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetchData(`http://localhost:5000/products`);

      setProducts(response);
    };
    fetchProducts();
  }, []);

  type Product = {
    id: number;
    name: string;
    price: string;
  };

  return (
    <>
      <Hero title="Product Kami" bread1="Beranda" bread2="Produk" />
      <ProductHead />
      <div className="flex justify-around w-screen md:mt-24">
        <div className="px-5 mt-5  md:w-3/4 sm:full">
          <div className="flex flex-row">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product: Product) => (
                <div key={product.id}>
                  <ProductCard name={product.name} price={product.price} />
                </div>
              ))}
            </div>
          </div>
          <Button color="light" className="mt-24 mx-auto border-primary">
            Tampil Lebih Banyak
          </Button>
        </div>
        <div className="flex flex-col justify-center">
          <SidebarProduct />
        </div>
      </div>
    </>
  );
};

export default Product;
