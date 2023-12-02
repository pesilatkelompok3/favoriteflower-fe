"use client";

import { ReactElement } from "react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { Footer } from "flowbite-react";

export default function TheFooter(): ReactElement {
  return (
    <Footer container className="text-white bg-black mt-20">
      <div className="w-full text-center lg:mx-48 lg:pt-4 2xl:mx-64">
        <div className="w-full justify-between sm:flex sm:items-start sm:justify-between gap-4">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">
              Favorite<span className="text-primary">Flower</span>
            </h1>
            <p className="text-sm mb-8 text-justify max-w-xs">
              Florist karangan bunga yang terpercaya di kota Bandung dan kota
              Cimahi. Kami menyediakan berbagai macam karangan bunga dan juga
              bouquet terbaik. Kami juga melayani pemesanan karangan bunga yang
              dijual di kota Bandung dan kota Cimahi.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4 max-w-xs">Alamat</h1>
            <p className="text-sm mb-8">
              Jl. Cihideung, Kab. Bandung, Lembang, Jawa Barat
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Social Media</h1>
            <div className="gap-2 flex mb-8">
              <BsFacebook className="cursor-pointer hover:scale-110 text-gray-300 hover:text-white h-8 w-8" />
              <BsInstagram className="cursor-pointer hover:scale-110 text-gray-300 hover:text-white h-8 w-8" />
              <BsWhatsapp className="cursor-pointer hover:scale-110 text-gray-300 hover:text-white h-8 w-8" />
            </div>
          </div>
        </div>
        <Footer.Copyright
          by="❤ WeebzDev XD"
          href="#"
          year={new Date().getFullYear()}
        />
      </div>
    </Footer>
  );
}
