"use client";

import Button from "@/components/Button";
import { AiOutlineClose } from "react-icons/ai";
import { BsClipboardData, BsStar } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscAdd } from "react-icons/vsc";
import Link from "next/link";
import { useToggle } from "@/utils/utils";

const Sidebar = (): React.ReactElement => {
  const [toggle, setToggle] = useToggle(true);

  return (
    <>
      <Button
        buttonType="button"
        clickHandler={setToggle}
        className={toggle ? "hidden" : "md:hidden"}
      >
        <RxHamburgerMenu className="cursor-pointer h-[24px] w-[24px] mx-2" />
      </Button>
      {toggle && (
        <aside className="flex flex-col bg-gray-800 h-screen w-1/2 items-center md:w-1/5 md:items-start">
          <Button
            buttonType="button"
            clickHandler={setToggle}
            className={toggle ? "self-end mt-2 mr-2 md:hidden" : "hidden"}
          >
            <AiOutlineClose className="h-[18px] w-[18px] text-white" />
          </Button>

          <h1 className="text-xl font-semibold text-white drop-shadow-md md:mt-4 md:self-center">
            FavoriteFlower
          </h1>

          <ul className="mt-4 md:mx-4">
            <li className="mb-4 text-white text-lg">
              <Link href={"/"} className="hover:text-primary">
                <BsClipboardData className="inline mr-2" />
                List Produk
              </Link>
            </li>
            <li className="mb-4 text-white text-lg">
              <Link href={"/"} className="hover:text-primary">
                <VscAdd className="inline mr-2" />
                Tambah Produk
              </Link>
            </li>
            <li className="mb-4 text-white text-lg">
              <Link href={"/"} className="hover:text-primary">
                <BsStar className="inline mr-2" />
                Tambah Review
              </Link>
            </li>
          </ul>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
