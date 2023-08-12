"use client";

import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsWhatsapp } from "react-icons/bs";
import ContactButton from "./Button";
import Button from "./Button";

import useToggle from "@/utils/ToggleHook";

const Navbar = (): React.ReactElement => {
  const [toggle, setToggle] = useToggle();
  return (
    <>
      <nav>
        <div className="flex justify-between items-center bg-white bg-opacity-10 text-white h-[38px] relative">
          <Link href="#" className="mx-2">
            <span className="font-semibold text-2xl">FavoriteFlower</span>
          </Link>
          <Button buttonType="button" clickHandler={setToggle}>
            <RxHamburgerMenu className="cursor-pointer h-[24px] w-[24px] mx-2 md:hidden" />
          </Button>
          <div
            className={`${
              toggle ? "hidden" : "w-full md:block md:w-auto absolute md:static"
            }`}
          >
            <ul className="flex flex-col p-2 mt-[155px] border border-accent md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:items-center">
              <li>
                <Link href="/">Beranda</Link>
              </li>
              <li>
                <Link href="/about">Tentang Kami</Link>
              </li>
              <li>
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
