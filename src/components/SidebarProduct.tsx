'use client';
import React, { useState, useEffect } from 'react';
import { fetchData } from '@/lib/utils';
import ProductCard from '@/components/Home/productUs/ProductCard';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SidebarProduct = ({ category }: any) => {
 const [products, setProducts] = useState([]);
 const router = useRouter();

 useEffect(() => {
  const fetchProducts = async () => {
   const response = await fetchData(`${process.env.apiURL}/api/products`);
   console.log('response', response);
   setProducts(response);
  };
  fetchProducts();
 }, []);

 const uniqueCategories = new Set(products.map((product: Product) => product.category));

 const filteredProducts: Product[] = Array.from(uniqueCategories).reduce((result: Product[], category: string) => {
  const productInCategory = products.find((product: Product) => product.category === category);
  if (productInCategory) {
   result.push(productInCategory);
  }
  return result;
 }, []);
 const recentProduct: Product[] = products.sort((a: any, b: any) => {
  const aDate: any = new Date(a.createdAt);
  const bDate: any = new Date(b.createdAt);
  return bDate - aDate;
 });

 type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
 };

 return (
  <div className='hidden md:block lg:block'>
   <div className='border-b-4 border-primary pb-2 w-56'>
    <h2 className='md:text-xl lg:text-2xl text-end font-semibold'>Kategori</h2>
   </div>
   <div className='w-56 flex flex-col text-end gap-4 text-lg lg:text-xl font-semibold mt-8'>
    {filteredProducts.map((product: Product) => (
     <Link href={`/products?category=${product.category}`} key={product.id} className='hover:text-primary'>
      {product.category}
     </Link>
    ))}
   </div>
   <div>
    <div className='border-b-4 border-primary pb-2 w-56'>
     <h2 className='md:text-xl mt-12 lg:text-2xl text-end font-semibold'>Produk Terbaru</h2>
    </div>
    <div className='mx-auto mt-8 w-56'>
     {recentProduct.slice(0, 6).map((product: Product) => (
      <span key={product.id} onClick={() => router.push(`/products/${product.id}`)}>
       <ProductCard id={product.id} name={product.name} url={product.image} />
      </span>
     ))}
    </div>
   </div>
  </div>
 );
};

export default SidebarProduct;
