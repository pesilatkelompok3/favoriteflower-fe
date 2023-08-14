"use client";
import React from "react";
import Dropdowns from "@/components/Dropdown";
import Search from "@/components/Search";
import Sort from "@/components/Sort";
const ProductHead = (): React.ReactElement => {
  return (
    <div className="mt-16 flex flex-col w-full px-5">
      <h2 className="text-xl text-center font-semibold mb-2">Produk</h2>
      <div className="flex flex-row justify-end items-center gap-2">
        <Sort />
        <Dropdowns />
        <Search />
      </div>
    </div>
  );
};

ProductHead.propTypes = {};

export default ProductHead;
