"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

type ProductProps = {
  id: string;
  name: string;
  price: string;
  category: string;
  url: string;
};

const ProductCard = ({
  id,
  name,
  price,
  category,
  url,
}: ProductProps): React.ReactElement => {
  return (
    <>
      <div className="relative h-full w-full bg-base border border-gray-200 rounded-lg shadow-gray-700 overflow-hidden ">
        <div className="block hover:scale-125 transition ease-in-out duration-500">
          <Image
            className="rounded-lg h-36 lg:h-72 m-auto w-full object-cover"
            src={url}
            width={800}
            height={800}
            alt="image"
            priority
          />
        </div>

        <div className="p-2 lg:p-4 absolute bottom-0 left-0 right-0 bg-base ">
          <div className="block">
            <h5 className="mb-2  md:text-lg  font-bold tracking-tight text-gray-900 hover:text-primary truncate">
              {name}
            </h5>
          </div>
          <p className="lg:mb-2 truncate">{category}</p>
          <div className=" flex justify-between items-center lg:gap-1">
            <p className="font-medium ">{price}</p>
            <Link
              href={`/products/${id}`}
              className="md:text-md bg-primary w-1/4 md:w-1/2  md:h-full text-center rounded-xl text-white p-1  hover:text-black"
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
