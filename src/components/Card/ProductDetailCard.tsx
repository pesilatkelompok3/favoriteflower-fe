import Image from "next/image";
import InputCounter from "../InputCounter";
import { formatPrice } from "@/lib/utils";
import Button from "../Button";

type Product = {
  name: string;
  imgUrl: string;
  category: string;
  description: string;
  price: string;
  quantity: number;
  setQuantity: (value: number) => void;
  waApiLink: string;
};

const ProductDetailCard = ({ name, price, category, description, imgUrl, quantity, setQuantity, waApiLink }: Product) => {

  return (
    <div className="container my-8 lg:my-24">
      <div className="flex flex-col lg:flex-row lg:gap-8 justify-center">
        <div className="w-full h-80 md:w-96 md:h-96 relative inline-block justify-center rounded-sm overflow-hidden ml-2 first:ml-0 hover:scale-105 hover:shadow-2xl ease-in duration-300 cursor-pointer">
          <Image src={imgUrl} width={800} height={800} alt="Img" className="w-full h-full object-cover" priority />
        </div>
        <div className="flex flex-col max-w-xl w-full justify-around">
          <div className="justify-start mb-4">
            <p className="md:hidden text-gray-600 pt-4">{category}</p>
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="hidden md:block text-gray-600">{category}</p>
          </div>
          <p className="hidden md:block mb-20 text-gray-600 text-justify">{description}</p>
          <p className="md:hidden text-lg mb-2 font-semibold text-green-500">{price}</p>
          <InputCounter onValueChange={(newQuantity) => { setQuantity(newQuantity); }} className="md:hidden mb-2" />
          <div className="hidden md:flex flex-row justify-between items-end">
            <InputCounter onValueChange={(newQuantity) => { setQuantity(newQuantity); }} />
            <div className="justify-between">
              <p className="text-end text-lg mb-2 font-semibold text-green-500">{price}</p>
              <Button buttonType="button" clickHandler={() => { location.href = `${waApiLink}` }} className="bg-green-400 hover:bg-green-500 w-48 rounded-xl py-2.5 text-white">Pesan</Button>
            </div>
          </div>
          <Button buttonType="button" clickHandler={() => { location.href = `${waApiLink}` }} className="md:hidden bg-green-400 hover:bg-green-500 rounded-xl py-2.5 text-white">Pesan</Button>
          <p className="md:hidden text-gray-600 text-justify mt-4">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailCard