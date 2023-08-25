import Image from "next/image";
import InputCounter from "../InputCounter";
import Button from "../Button";
import Link from "next/link";

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

const ProductDetailCard = ({ name, price, category, description, imgUrl, setQuantity, waApiLink }: Product) => {

  return (
    <div className="container my-8 lg:my-24">
      <div className="flex flex-col lg:flex-row lg:gap-8 justify-center">
        <div className="w-full h-80 lg:w-96 lg:h-96 relative inline-block justify-center rounded-sm overflow-hidden ml-2 first:ml-0 hover:scale-105 hover:shadow-2xl ease-in duration-300 cursor-pointer">
          <Image src={imgUrl} width={800} height={800} alt="Img" className="w-full h-full object-cover" priority />
        </div>
        <div className="flex flex-col lg:max-w-xl w-full justify-around">
          <div className="justify-start mb-4">
            <p className="lg:hidden text-gray-600 pt-4">{category}</p>
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="hidden lg:block text-gray-600">{category}</p>
          </div>
          <p className="hidden lg:block mb-20 text-gray-600 text-justify">{description}</p>
          <p className="lg:hidden text-lg mb-2 font-semibold text-green-500">{price}</p>
          <InputCounter onValueChange={(newQuantity) => { setQuantity(newQuantity); }} className="lg:hidden mb-2" />
          <div className="hidden lg:flex flex-row justify-between items-end">
            <InputCounter onValueChange={(newQuantity) => { setQuantity(newQuantity); }} />
            <div className="justify-between">
              <p className="text-end text-lg mb-2 font-semibold text-green-500">{price}</p>
              <Link target="_blank" href={waApiLink}><Button buttonType="button" className="bg-green-400 hover:bg-green-500 w-56 rounded-xl py-2 text-white">Pesan</Button></Link>
            </div>
          </div>
          <Link target="_blank" href={waApiLink}><Button buttonType="button" className="lg:hidden bg-green-400 w-full hover:bg-green-500 rounded-xl py-2.5 text-white">Pesan</Button></Link>
          <p className="lg:hidden text-gray-600 text-justify mt-4">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailCard