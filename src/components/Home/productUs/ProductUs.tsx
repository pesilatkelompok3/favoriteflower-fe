"use client";
import ProductCard from "@/components/Home/productUs/ProductCard";
import React, { useRef, useEffect } from "react";
export default function ProductUs() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  let isDragStart = false;
  let prevPageX: number | undefined;
  let prevScrollLeft: number | undefined;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dragStart = (e: MouseEvent) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carouselRef.current?.scrollLeft;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dragging = (e: MouseEvent) => {
    if (!isDragStart) return;
    e.preventDefault();
    if (prevPageX !== undefined && prevScrollLeft !== undefined) {
      const positionDiff = e.pageX - prevPageX;
      carouselRef.current!.scrollLeft = prevScrollLeft - positionDiff;
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dragStop = () => {
    isDragStart = false;
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.addEventListener("mousedown", dragStart);
      carouselRef.current.addEventListener("mousemove", dragging);
      carouselRef.current.addEventListener("mouseup", dragStop);
    }
    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("mousedown", dragStart);
        carouselRef.current.removeEventListener("mousemove", dragging);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        carouselRef.current.removeEventListener("mouseup", dragStop);
      }
    };
  }, [dragStart, dragStop, dragging]);
  return (
    <main className="w-full h-auto bg-white px-4 pt-3">
      <div className="w-full h-auto flex justify-center items-center">
        <div className="w-24 bg-black" style={{ height: "1px" }}></div>
        <h1 className="mx-4 text-lg font-bold underline">Product Kami</h1>
        <div className="w-24 bg-black" style={{ height: "1px" }}></div>
      </div>
      <div className="w-full h-52 flex items-center">
        <div ref={carouselRef} className="w-full h-auto whitespace-nowrap scroll-auto overflow-hidden">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </main>
  );
}
