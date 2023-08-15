"use client";
import React, { useState, useEffect } from "react";
import { fetchData } from "@/lib/utils";
import ProductCard from "@/components/Home/productUs/ProductCard";

const SidebarProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetchData(`http://localhost:5000/products`);
      setProducts(response);
    };
    fetchProducts();
  }, []);

  const recentProduct: Product[] = products.sort((a: number, b: number) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  type Product = {
    id: number;
    name: string;
    price: string;
  };
  return (
    <div className="w-1/4 hidden md:block lg:block  ">
      <div className="border-b-4 border-primary pb-2 w-56">
        <h2 className="md:text-xl lg:text-2xl text-end font-semibold">
          Kategori
        </h2>
      </div>
      <div className="w-56 flex flex-col text-end gap-4 text-lg lg:text-xl font-semibold mt-8">
        <h3 className="hover:text-primary">Bunga Kematian</h3>
        <h3 className="hover:text-primary">Bunga Kematian</h3>
        <h3 className="hover:text-primary">Bunga Kematian</h3>
      </div>
      <div>
        <div className="border-b-4 border-primary pb-2 w-56">
          <h2 className="md:text-xl mt-12 lg:text-2xl text-end font-semibold">
            Produk Terpopuler
          </h2>
        </div>
        <div className="mx-auto mt-8 w-56">
          {recentProduct.map((product: Product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarProduct;
