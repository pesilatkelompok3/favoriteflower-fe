"use client";
import { Hero } from "@/components/Hero";
import React from "react";
import ProductHead from "@/components/Home/productUs/ProductHead";
import ProductCard from "@/components/Card/ProductCard";
import { Button } from "flowbite-react";
import Sidebar from "@/components/Sidebar";
const Product = (): React.ReactElement => {
  return (
    <>
      <Hero title="Product Kami" bread1="Beranda" bread2="Produk" />
      <ProductHead />
      <div className="flex justify-around w-screen md:mt-24">
        <div className="px-5 mt-5  md:w-3/4 sm:full">
          <div className="flex flex-row">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div>
                <ProductCard />
              </div>
              <div>
                <ProductCard />
              </div>
              <div>
                <ProductCard />
              </div>
              <div>
                <ProductCard />
              </div>
            </div>
          </div>
          <Button color="light" className="mt-24 mx-auto border-primary">
            Tampil Lebih Banyak
          </Button>
        </div>
        <div className="flex flex-col justify-center">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Product;
