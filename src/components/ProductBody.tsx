"use client";
import React, { useState, useEffect } from "react";
import { fetchData } from "@/lib/utils";
import ProductHead from "@/components/Home/productUs/ProductHead";
import { useSearchParams } from "next/navigation";
import SidebarProduct from "@/components/SidebarProduct";
import ProductCardList from "./Card/ProductCardList";

const ProductBody = (): React.ReactElement => {
  const searchParams = useSearchParams();

  const [products, setProducts] = useState([]);
  const [search, onSearch] = useState("");
  const [sort, onSort] = useState<string>("");

  const category = searchParams.get("category");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetchData(`${process.env.apiURL}/products`);

      setProducts(response);
    };
    fetchProducts();
  }, []);

  const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  const onSortHandler = (option: string) => {
    onSort(option);
  };

  type Product = {
    id: string;
    name: string;
    price: string;
    description: string;
    category: string;
    url: string;
  };

  const filterByCategory = products.filter((product: Product) => {
    if (category) return product.category === category;

    return products;
  });

  const filterSortProduct = filterByCategory.sort((a: any, b: any) => {
    if (sort === "A-Z") {
      return a.name.localeCompare(b.name);
    } else if (sort === "Z-A") {
      return b.name.localeCompare(a.name);
    } else if (sort === "Harga Tertinggi") {
      return b.price - a.price;
    } else if (sort === "Harga Terendah") {
      return a.price - b.price;
    } else {
      return products;
    }
  });

  const filterSearchProduct = filterSortProduct.filter((product: any) => {
    if (search) {
      return product.name.toLowerCase().includes(search.toLowerCase());
    } else {
      return products;
    }
  });

  return (
    <>
      <ProductHead
        search={search}
        onSearch={onSearchHandler}
        sort={sort}
        onSort={onSortHandler}
      />
      <div className="flex justify-around w-screen md:mt-24">
        <div className="px-5 md:w-3/4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-2">
            <ProductCardList filteredProduct={filterSearchProduct} />
          </div>
        </div>
        <div className="flex flex-col ">
          <SidebarProduct category={category} />
        </div>
      </div>
    </>
  );
};

export default ProductBody;
