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
};

const ProductCard = ({ id, name, price, category }: Product) => {
  return (
    <>
      <div className="relative w-44 h-full lg:w-full bg-base border border-gray-200 rounded-lg shadow-gray-700 overflow-hidden ">
        <div className="block hover:scale-125 transition ease-in-out duration-500">
          <Image
            className="rounded-lg h-36 lg:h-full m-auto "
            src={ImageCard}
            alt="image"
          />
        </div>
        {/* <div className="absolute bottom-5 left-3 right-0">
          <h5 className="lg:w-3/4 hidden lg:block font-semibold  lg:text-xl">
            {name}
          </h5>
        </div> */}

        <div className="p-2 lg:p-5 absolute bottom-0 left-0 right-0 bg-base ">
          <div className="block ">
            <h5 className="mb-2  md:text-lg  font-bold tracking-tight text-gray-900 hover:text-primary truncate">
              {name}
            </h5>
          </div>
          <p className="mb-3 truncate">{category}</p>
          <div className="flex justify-between  items-center">
            <p className="font-medium ">{price}</p>
            <Link
              href={`/products/${id}`}
              className="md:text-md bg-primary rounded-xl text-white p-2 lg:px-3 hover:text-black"
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
