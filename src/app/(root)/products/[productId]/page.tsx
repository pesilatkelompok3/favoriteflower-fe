"use client";

import React, { useEffect, useState } from "react";
import { fetchData, formatPrice } from "@/lib/utils";
import axios from "axios";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Loading from "@/components/Loading";
import LoadingDetail from "@/components/LoadingDetail";
import { usePathname } from "next/navigation";

export async function generateMetaData({
  params: { productId },
}: ProductParams): Promise<Metadata> {
  const response = await axios.get(
    `${process.env.apiURL}/products/${productId}`
  );

  return {
    title: response.data.name,
    description: response.data.description,
  };
}

type ProductParams = {
  params: {
    productId: string;
  };
};

type ProductProps = {
  id: string;
  name: string;
  url: string;
  price: string;
  category: string;
  description: string;
  quantity: number;
  setQuantity: (value: number) => void;
  loading: boolean;
};

const ProductCard = dynamic(() => import("@/components/Card/ProductCard"), {
  loading: () => <Loading />,
});
const ProductDetailCard = dynamic(
  () => import("@/components/Card/ProductDetailCard"),
  {
    loading: () => <LoadingDetail />,
  }
);

const Product = ({
  params: { productId },
}: ProductParams): React.ReactElement => {
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await axios.get(
          `${process.env.apiURL}/products/${productId}`
        );

        console.log(response);

        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        return err;
      }
    };
    fetchProductById();

    const fetchProducts = async () => {
      const response = await fetchData(`${process.env.apiURL}/products`);

      setProducts(response);
      setLoading(false);
    };
    fetchProducts();
  }, [productId]);

  const maxDisplayedProducts = 8;

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const numericPrice = parseFloat(`${product?.price}`);
  const totalPrice = numericPrice * quantity;

  const baseWaUrl = `${process.env.waAPI}`;
  const phoneNumber = `${process.env.waNUMBER}`;
  const baseUrl = `${process.env.baseURL}`;
  
  const messageTemplate = `
  Halo FavoriteFlower! 👋 Saya ingin memesan barang ${product?.name}.
  
  Apakah barang ini masih tersedia?
  🌸 Jumlah yang diinginkan: ${quantity}
  💰 Harga: ${formatPrice(totalPrice.toString())}
  🔗 Link Produk: ${baseUrl}${usePathname()}
  
  Terima kasih banyak! 🚀
  `;

  const encodedMessage = encodeURIComponent(messageTemplate);

  const preFilledLink = `${baseWaUrl}send/?phone=${phoneNumber}&text=${encodedMessage}`;

  return (
    <>
      {!loading && product && (
        <>
          <ProductDetailCard
            key={product.id}
            imgUrl={product.url}
            name={product.name}
            price={formatPrice(totalPrice.toString())}
            category={product.category}
            description={product.description}
            quantity={quantity}
            setQuantity={handleQuantityChange}
            waApiLink={preFilledLink}
          />
          <div className="w-full h-auto flex justify-center items-center mb-8">
            <h1 className="mx-4 text-2xl font-bold">Produk Lainnya</h1>
          </div>
          <div className="container flex flex-row">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:gap-1 md:gap-4 w-full">
              {!loading && products
            
                .filter((p: ProductProps) => p.id !== product.id) // Exclude the product being viewed
                .slice(0, maxDisplayedProducts)
                
            .map((product: ProductProps) => (
                    <ProductCard
                key={product.id}
                name={product.name}
                price={formatPrice(product.price)}
                id={product.id}
                category={product.category}
                url={product.url}
              />
                  ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Product;
