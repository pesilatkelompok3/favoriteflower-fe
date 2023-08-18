import Image from "next/image";
import Image1 from "~/assets/images/7a41c59ebeff0bc91f253a0c85d18e01.jpeg";
import InputCounter from "../InputCounter";

type Product = {
  name: string;
  category: string;
  description: string;
  price: string;
};

const ProductDetailCard = ({ name, price, category, description }: Product) => {
  return (
    <div className="container my-8 lg:my-24">
      <div className="flex flex-col lg:flex-row lg:gap-8 justify-center">
        <div className="w-80 h-80 md:w-96 md:h-96 relative inline-block justify-center rounded-sm overflow-hidden ml-2 first:ml-0 pb-4">
          <Image src={Image1} alt="Img" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col max-w-xl justify-around">
          <div className="justify-start mb-4">
            <p className="md:hidden text-gray-600">{category}</p>
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="hidden md:block text-gray-600">{category}</p>
          </div>
          <p className="hidden md:block mb-20 text-gray-600 text-justify">{description}</p>
          <p className="md:hidden text-lg mb-2 font-semibold text-green-500">{price}</p>
          <InputCounter className="md:hidden" />
          <div className="hidden md:flex flex-row justify-between items-end">
            <InputCounter />
            <div className="">
              <p className="text-end text-lg mb-2 font-semibold text-green-500">{price}</p>
              <button type="button" className="bg-primary w-48 rounded-xl py-2.5 text-white">Pesan</button>
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