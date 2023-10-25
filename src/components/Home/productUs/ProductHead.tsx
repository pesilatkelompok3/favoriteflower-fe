"use client";
import React from "react";

import Search from "@/components/Search";
import Sort from "@/components/Sort";

type filter = {
  search: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sort: string;
  onSort: (e: string) => void;
};
const ProductHead = ({
  search,
  onSearch,
  sort,
  onSort,
}: filter): React.ReactElement => {
  return (
    <div className="mt-16 flex flex-col w-full px-5">
      <h2 className="text-xl lg:text-3xl text-center font-semibold mb-2">
        Produk
      </h2>
      <div className="flex flex-row justify-end items-center gap-2">
        <Sort sort={sort} onSort={onSort} />

        <Search search={search} onSearch={onSearch} />
      </div>
    </div>
  );
};

ProductHead.propTypes = {};

export default ProductHead;
