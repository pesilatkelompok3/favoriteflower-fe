import ProductCard from "@/components/Card/ProductCard";
import ProductDetailCard from "@/components/Card/ProductDetailCard";
import { Hero } from "@/components/Hero";

export default function ProductDetail() {
  return (
    <main>
      <div>
        <ProductDetailCard />
        <div className="w-full h-auto flex justify-center items-center mb-8">
          <h1 className="mx-4 text-2xl font-bold">Produk Lainnya</h1>
        </div>
        <div className="flex flex-row">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {/* <div>
              <ProductCard />
            </div>
            <div>
              <ProductCard />
            </div>
            <div>
              <ProductCard />
            </div>
            <div>
              <ProductCard />
            </div> */}
          </div>
        </div>
      </div>
    </main>
  )
}
