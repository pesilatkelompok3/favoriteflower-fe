"use client";

import { useEffect, useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import BeniPicture from "../../../../public/assets/images/Beni_Setiawan.jpeg";
import Riga from "../../../../public/assets/images/Riga.jpeg";
import Unknown from "../../../../public/assets/images/Unknown.jpeg";

const Testimonial = () => {
  const cardContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft += 292;
    }
  }, []);

  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft -= 292;
    }
  };

  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft += 292;
    }
  };
  const cardListStyle: React.CSSProperties = {
    scrollbarWidth: "none", // For Firefox
    msOverflowStyle: "none", // For Internet Explorer and Edge
    WebkitOverflowScrolling: "touch", // For iOS Safari
    scrollBehavior: "smooth",
  };

  const datas = [
    {
      id: "1",
      name: "Riga",
      comment: "Product quality is good and price is affordable.",
      image: BeniPicture,
      occupation: "Staff Data Control di PT. Cakrawala Mega Indah"
    },
    {
      id: "2",
      name: "Beni Setiawan",
      comment: "Ga nyesel order karangan bunga ke favorit florist... Respon cepat, pengerjaan cepat, hasil bagus dan rapi. Pengiriman pun tepat waktu.. pokoknya mantap",
      image: Riga,
      occupation: "Sales Manager di Danone AQUA Yogyakarta"
    },
    {
      id: "3",
      name: "Staff Teknisi PT. Kosan Crishplan",
      comment: "I love this product. I hope I can buy more if there is stock!! #loveit",
      image: Unknown,
      occupation: "Staff Engineer di PT. Kosan Crishplan"
    },
  ];

  return (
    <div className="w-full h-auto bg-white px-4 md:px-16 pt-3">
      <div className="w-full h-auto flex justify-center items-center">
        <div className="w-24 md:w-96 bg-black" style={{ height: "1px" }}></div>
        <h1 className="mx-4 text-lg font-bold underline">Testimoni</h1>
        <div className="w-24 md:w-96 bg-black" style={{ height: "1px" }}></div>
      </div>
      <div className="w-full h-[372px] relative md:px-28 flex items-center mb-8">
        <div
          onClick={scrollLeft}
          className="absolute left-0 top-0 w-12 h-full z-30 md:hidden"
        ></div>
        <div
          onClick={scrollRight}
          className="absolute right-0 top-0 w-12 h-full z-30 md:hidden"
        ></div>
        <div
          ref={cardContainerRef}
          className="w-full h-auto md:p-4 md:flex md:justify-center whitespace-nowrap scroll-auto overflow-x-auto md:overflow-x-hidden"
          style={cardListStyle}
        >
          <style>{`::-webkit-scrollbar { display: none; }`}</style>
          {datas.map((data) => (
            <TestimonialCard key={data.id} dataComment={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
