"use client";

import { useEffect, useRef } from "react";
import TestimonialCard from "./TestimonialCard";

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
      name: "Jane Marry",
      comment:
        "Product quality is good and price is affordable.",
    },
    {
      id: "2",
      name: "Sarah Voila",
      comment:
        "Nice product. I recommend it.",
    },
    {
      id: "3",
      name: "Deborah Amanda",
      comment:
        "I love this product. I hope I can buy more if there is stock!! #loveit",
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
        <div onClick={scrollLeft} className="absolute left-0 top-0 w-12 h-full z-30 md:hidden"></div>
        <div onClick={scrollRight} className="absolute right-0 top-0 w-12 h-full z-30 md:hidden"></div>
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
