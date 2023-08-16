"use client";

import React from "react";
import Image from "next/image";
import ImageCard from "~/assets/images/7a41c59ebeff0bc91f253a0c85d18e01.jpeg";

type Product = {
  name: string;
  price: string;
  description: string;
};

const ProductCard = ({ name, price, description }: Product) => {
  return (
    <>
      <div className="relative w-44 lg:w-full lg:h-3/4 bg-base border border-gray-200 rounded-lg shadow-gray-700 overflow-hidden">
        <a
          href="#"
          className="block transition-transform duration-300 hover:scale-95"
        >
          <Image
            className="rounded-lg h-36 lg:h-full m-auto"
            src={ImageCard}
            alt="image"
          />
        </a>
        <div className="p-5 absolute bottom-0 left-0 right-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-white">
          <a href="#" className="block">
            <h5 className="mb-2 text-md md:text-lg lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
          <p className="mb-3 truncate">{description}</p>
          <div className="flex justify-between  items-center">
            <p className="font-medium ">{price}</p>
            <button className="md:text-md bg-primary rounded-xl text-white p-2 lg:px-3">
              Pesan
            </button>
          </div>
        </div>
        <div>
          <h5 className="font-semibold text-sm pt-2 pb-2">{name}</h5>
          <p className="font-medium">{price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
