"use client";

import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsWhatsapp } from "react-icons/bs";
import ContactButton from "./Button";
import Button from "./Button";

import { useToggle } from "@/lib/utils";
import { useEffect, useState } from "react";

const Navbar = (): React.ReactElement => {
  const [toggle, setToggle] = useToggle();

  const [scrolling, setScrolling] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav>
        <div
          className={`${
            scrolling
              ? "w-full bg-gray-900 flex justify-between items-center bg-opacity-80 backdrop-blur-md text-white h-auto relative"
              : "w-full bg-white flex justify-between items-center bg-opacity-10 backdrop-blur-md text-white h-auto relative"
          }`}
        >
          <Link href="/" className="px-4 py-1">
            <span className="font-semibold text-2xl drop-shadow-2xl shadow-black">
              FavoriteFlower
            </span>
          </Link>
          <Button
            className="relative z-20"
            buttonType="button"
            clickHandler={setToggle}
          >
            <RxHamburgerMenu className="cursor-pointer h-[24px] w-[24px] mx-2 md:hidden" />
          </Button>
          <div
            className={`${
              toggle === false
                ? "w-full hidden md:block md:w-auto md:static"
                : "w-full md:block md:w-auto absolute md:static"
            }`}
          >
            <ul className="w-full flex flex-col bg-gray-900 bg-opacity-80 p-2 mt-[204px] rounded-b-lg pb-3 border-black border-t md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:items-center">
              <li className="mb-4 md:mb-0 hover:text-primary text-lg">
                <Link href="/">Beranda</Link>
              </li>
              <li className="mb-4 md:mb-0 hover:text-primary text-lg">
                <Link href="/about">Tentang Kami</Link>
              </li>
              <li className="mb-4 md:mb-0 hover:text-primary text-lg">
                <Link href="/products">Produk</Link>
              </li>
              <li>
                <ContactButton
                  buttonType="button"
                  className="bg-green-400 w-full px-2 h-[28px] rounded-md cursor-pointer flex justify-center items-center hover:bg-green-500 text-white"
                  clickHandler={() => {
                    location.href = "https://wa.me/6281234567890";
                  }}
                >
                  <BsWhatsapp className="mr-1" />
                  Hubungi Kami
                </ContactButton>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
