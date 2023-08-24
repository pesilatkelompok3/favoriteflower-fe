import Image from "next/image";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  url: string;
};
export default function ProductCard({ id, name, url }: Product) {
  const gradient =
    "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)";

  return (
    <Link
      href={`/products/${id}`}
      className="w-40 h-40 md:w-52 md:h-44 lg:36 lg:w-52 relative inline-block justify-center rounded-3xl overflow-hidden mr-2 md:mr-4 drop-shadow-lg shadow-black/50 "
    >
      <Image
        className="w-full h-full object-cover"
        src={url}
        width={800}
        height={800}
        alt="Picture of the author"
      />
      <div
        className="w-full h-16 absolute bottom-0 pb-1 px-5 flex items-end"
        style={{ background: gradient }}
      >
        <h5 className="text-base text-black font-semibold mb-4 truncate hover:text-primary">
          {name}
        </h5>
      </div>
    </Link>
  );
}
