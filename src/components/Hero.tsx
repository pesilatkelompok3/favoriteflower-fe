"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Link from "next/link";
type Props = {
  title: string;
  bread1: string;
  bread2: string;
};

export const Hero = ({ title, bread1, bread2 }: Props) => {
  const [text] = useTypewriter({
    words: [
      "Toko bunga terpercaya di Kota Bandung dan Cimahi.",
      "Gratis ongkir",
      "Menyelesaikan dengan tepat waktu",
      "Jaminan uang kembali",
      "Pelayanan 24/7",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <section className="bg-center bg-no-repeat bg-[url('/assets/images/hero.jpg')] bg-gray-700 bg-blend-multiply -mt-12">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        {title ? (
          <div>
            <h1 className="mb-4 text-4xl font-semibold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 ">
              <Link href="/" className="hover:text-primary">
                {bread1}
              </Link>
              / {bread2}
            </p>
          </div>
        ) : (
          <div>
            <h1 className="mb-4 text-4xl font-semibold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              FlowerFavorite Juara
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              {text}{" "}
              <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" />
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
