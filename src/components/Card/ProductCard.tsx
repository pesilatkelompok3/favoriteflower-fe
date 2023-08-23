"use client";

import React from "react";
import Image from "next/image";
import ImageCard from "~/assets/images/7a41c59ebeff0bc91f253a0c85d18e01.jpeg";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
};

const ProductCard = ({ id, name, price, category, image }: Product) => {
  return (
    <>
      <div className="relative h-full w-full bg-base border border-gray-200 rounded-lg shadow-gray-700 overflow-hidden ">
        <div className="block hover:scale-125 transition ease-in-out duration-500">
          <Image
            className="rounded-lg h-36 lg:h-full m-auto "
            src={image || ImageCard}
            alt="image"
          />
        </div>

        <div className="p-2 lg:p-5 absolute bottom-0 left-0 right-0 bg-base">
          <div className="block">
            <h5 className="mb-2  md:text-lg  font-bold tracking-tight text-gray-900 hover:text-primary truncate">
              {name}
            </h5>
          </div>
          <p className="lg:mb-3 truncate">{category}</p>
          <div className="flex justify-between items-center lg:gap-1">
            <p className="font-medium ">{price}</p>
            <Link
              href={`/products/${id}`}
              className="md:text-md bg-primary w-1/4 md:w-1/2 md:h-full text-center rounded-xl text-white p-1 lg:p-2  hover:text-black"
            >
              Pesan
            </Link>
          </div>
        </div>
        <div className="lg:hidden">
          <h5 className="font-semibold text-sm pt-2 pb-2">{name}</h5>
          <p className="font-medium">{price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
