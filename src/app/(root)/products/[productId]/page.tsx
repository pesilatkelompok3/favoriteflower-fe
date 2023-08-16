"use client"

import React, { useEffect, useState } from "react";
import { fetchData } from "@/lib/utils";
import ProductCard from "@/components/Card/ProductCard";
import ProductDetailCard from "@/components/Card/ProductDetailCard";

type ProductParams = {
  params: {
    productId: string
  };
};

type Product = {
  id: number;
  name: string;
  price: string;
  category: string;
  description: string;
}

const Product = ({ params: { productId } }: ProductParams): React.ReactElement => {
  const [product, setProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await fetchData(`http://localhost:5000/products/${productId}`);

        setProduct(response);
      } catch (error) {
        console.error("Error fetching product:", error);
        // You might want to handle errors here, like showing an error message to the user.
      }
    };
    fetchProductById();

    const fetchProducts = async () => {
      const response = await fetchData(`http://localhost:5000/products`);

      setProducts(response);
    };
    fetchProducts();
  }, [productId]);

  const formatPrice = (price: string) => {
    return parseFloat(price).toLocaleString("id-ID", { style: "currency", currency: "IDR" });
  };

  const maxDisplayedProducts = 4;

  return (
    <div>
      {product&& (
        <div key={product.id}>
          <ProductDetailCard
            name={product.name}
            price={formatPrice(product.price)}
            category={product.category}
            description={product.description}
          />
        </div>
      )}
      <div className="w-full h-auto flex justify-center items-center mb-8">
        <h1 className="mx-4 text-2xl font-bold">Produk Lainnya</h1>
      </div>
      <div className="container flex flex-row">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {products.slice(0, maxDisplayedProducts).map((product: Product) => (
            <div key={product.id}>
              <ProductCard name={product.name} price={product.price} id={product.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Product