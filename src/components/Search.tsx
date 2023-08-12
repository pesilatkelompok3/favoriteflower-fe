"use client";
import React from "react";

const Search = (): React.ReactElement => {
  return (
    <>
      <input
        type="text"
        className="w-3/4 h-11/12 bg-gray-50 text-gray-900 text-sm rounded-full md:rounded md:w-1/4 focus:ring-blue-500 focus:border-blue-500 "
        placeholder="Cari Produk..."
      />
    </>
  );
};

export default Search;
