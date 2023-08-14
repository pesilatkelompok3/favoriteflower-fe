"use client";

import React from "react";
import Image from "next/image";
import ImageCard from "~/assets/images/7a41c59ebeff0bc91f253a0c85d18e01.jpeg";

type Product = {
  name: string;
  price: string;
};
const ProductCard = ({ name, price }: Product) => {
  return (
    <div className="w-44  lg:w-full lg:h-1/2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image
          className="rounded-t-lg h-36 lg:h-full"
          src={ImageCard}
          alt="image"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-md lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
