import Image from "next/image";
import InputCounter from "../InputCounter";
import { formatPrice } from "@/lib/utils";

type Product = {
  name: string;
  imgUrl: string;
  category: string;
  description: string;
  price: string;
  quantity: number;
  setQuantity: (value: number) => void;
};

const ProductDetailCard = ({ name, price, category, description, imgUrl, quantity, setQuantity }: Product) => {
  const numericPrice = parseFloat(price);
  const totalPrice = numericPrice * quantity;

  return (
    <div className="container my-8 lg:my-24">
      <div className="flex flex-col lg:flex-row lg:gap-8 justify-center">
        <div className="w-80 h-80 md:w-96 md:h-96 relative inline-block justify-center rounded-sm overflow-hidden ml-2 first:ml-0 pb-4">
          <Image src={imgUrl} width={800} height={800} alt="Img" className="w-full h-full object-cover" priority />
        </div>
        <div className="flex flex-col max-w-xl w-full justify-around">
          <div className="justify-start mb-4">
            <p className="md:hidden text-gray-600">{category}</p>
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="hidden md:block text-gray-600">{category}</p>
          </div>
          <p className="hidden md:block mb-20 text-gray-600 text-justify">{description}</p>
          <p className="md:hidden text-lg mb-2 font-semibold text-green-500">{formatPrice(totalPrice.toString())}</p>
          <InputCounter onValueChange={(newQuantity) => { setQuantity(newQuantity); }} className="md:hidden mb-2" />
          <div className="hidden md:flex flex-row justify-between items-end">
            <InputCounter onValueChange={(newQuantity) => { setQuantity(newQuantity); }} />
            <div className="justify-between">
              <p className="text-end text-lg mb-2 font-semibold text-green-500">{formatPrice(totalPrice.toString())}</p>
              <button onClick={() => {}} type="button" className="bg-primary w-48 rounded-xl py-2.5 text-white">Pesan</button>
            </div>
          </div>
          <button type="button" className="md:hidden bg-primary rounded-xl py-2.5 text-white">Pesan</button>
          <p className="md:hidden text-gray-600 text-justify mt-4">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailCard