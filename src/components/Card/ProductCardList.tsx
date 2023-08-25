import React from "react";
import { formatPrice } from "@/lib/utils";
import Loading from "@/components/Loading";
import dynamic from "next/dynamic";

const ProductCard = dynamic(() => import("@/components/Card/ProductCard"), {
  loading: () => <Loading />,
});

const ProductCardList = ({ filteredProduct }: any): React.ReactElement => {
  return (
    <>
      {filteredProduct.map(
        (product: {
          id: string;
          name: string;
          url: string;
          price: string;
          category: string;
        }) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            url={product.url}
            price={formatPrice(product.price)}
            category={product.category}
          />
        )
      )}
    </>
  );
};

export default ProductCardList;
