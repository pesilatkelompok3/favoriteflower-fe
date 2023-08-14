import React from "react";
import PopularProductCard from "./Card/PopularProductCard";
const SidebarProduct = () => {
  return (
    <div className="w-1/4 hidden md:block lg:block  ">
      <div className="border-b-4 border-primary pb-2 w-56">
        <h2 className="md:text-xl lg:text-2xl text-end font-semibold">
          Kategori
        </h2>
      </div>
      <div className="w-56 flex flex-col text-end gap-4 text-lg lg:text-xl font-semibold mt-8">
        <h3 className="hover:text-primary">Bunga Kematian</h3>
        <h3 className="hover:text-primary">Bunga Kematian</h3>
        <h3 className="hover:text-primary">Bunga Kematian</h3>
      </div>
      <div>
        <div className="border-b-4 border-primary pb-2 w-56">
          <h2 className="md:text-xl mt-12 lg:text-2xl text-end font-semibold">
            Produk Terpopuler
          </h2>
        </div>
        <div className="mx-auto mt-8 w-56">
          <PopularProductCard />
          <PopularProductCard />
          <PopularProductCard />
          <PopularProductCard />
        </div>
      </div>
    </div>
  );
};

export default SidebarProduct;
