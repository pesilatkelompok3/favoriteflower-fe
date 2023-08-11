"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

export const Hero = () => {
  return (
    <section className="bg-center bg-no-repeat bg-[url('/assets/images/hero.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          FlowerFavorite Juara
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          <Typewriter
            words={[
              "Layanan Kustomisasi Karangan Bunga",
              "Reliable dan Terpercaya",
              "Produk Kualitas Terbaik",
            ]}
            loop={true}
            typeSpeed={70}
            deleteSpeed={70}
          />
        </p>
      </div>
    </section>
  );
};
