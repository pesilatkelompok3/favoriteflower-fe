"use client";

import React, { Suspense, useEffect, useState } from "react";
import { fetchData, formatPrice } from "@/lib/utils";
import ProductCard from "@/components/Card/ProductCard";
import ProductDetailCard from "@/components/Card/ProductDetailCard";
import axios from "axios";
import { Metadata } from "next";

type ProductParams = {
  params: {
    productId: string
  };
};

type Product = {
  id: string;
  name: string;
  url: string;
  price: string;
  category: string;
  description: string;
  quantity: number;
  setQuantity: (value: number) => void;
}

export async function generateMetaData({ params: { productId } }: ProductParams): Promise<Metadata> {
  const response = await axios.get(`http://localhost:5000/products/${productId}`);

  return {
    title: response.data.name,
    description: response.data.description
  }
}

const Product = ({ params: { productId } }: ProductParams): React.ReactElement => {
  const [product, setProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${productId}`);

        console.log(response);

        setProduct(response.data);
      } catch (err) {
        console.log(err);
        return err;
      }
    };
    fetchProductById();

    const fetchProducts = async () => {
      const response = await fetchData(`http://localhost:5000/products`);

      setProducts(response);
    };
    fetchProducts();
  }, [productId]);

  const maxDisplayedProducts = 8;

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  return (
    <>
      <div className="bg-black w-full h-12 absolute top-0"></div>
      <div className="bg-black w-full h-12 sticky top-0"></div>
      {product && (
        <Suspense fallback={<h2>Loading...</h2>} key={product.id}>
          <ProductDetailCard
            imgUrl={product.url || "https://source.unsplash.com/random"}
            name={product.name}
            price={product.price}
            category={product.category}
            description={product.description}
            quantity={quantity}
            setQuantity={handleQuantityChange}
          />
        </Suspense>
      )}
      <div className="w-full h-auto flex justify-center items-center mb-8">
        <h1 className="mx-4 text-2xl font-bold">Produk Lainnya</h1>
      </div>
      <div className="container flex flex-row">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.slice(0, maxDisplayedProducts).map((product: Product) => (
            <div key={product.id}>
              <ProductCard name={product.name} price={formatPrice(product.price)} id={product.id} category={product.category} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
};

export default Product