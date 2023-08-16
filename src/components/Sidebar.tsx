"use client";

import { BsClipboardData, BsStar } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscAdd } from "react-icons/vsc";
import Link from "next/link";
import { useToggle } from "@/lib/utils";

const Sidebar = (): React.ReactElement => {
  const [toggle, setToggle] = useToggle();

  return (
    <>
      <div className="text-center">
        <button
          type="button"
          className={toggle ? "block my-4 mx-2 md:hidden" : "hidden"}
          data-drawer-target="drawer-backdrop"
          data-drawer-show="drawer-backdrop"
          // data-drawer-backdrop={setToggle()}
          onClick={setToggle}
        >
          <RxHamburgerMenu className="h-6 w-6" />
        </button>
      </div>

      <div
        id="drawer-backdrop"
        className={
          toggle
            ? "fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64 dark:bg-gray-800"
            : "fixed z-40 h-screen p-4 overflow-y-auto transition-transform w-64 bg-gray-800 dark:bg-gray-800"
        }
        tabIndex={-1}
        aria-labelledby="drawer-backdrop-label"
      >
        <div className="flex justify-between items-center">
          <h5
            id="drawer-backdrop-label"
            className="text-white font-semibold uppercase dark:text-gray-400"
          >
            Menu
          </h5>
          <button
            type="button"
            onClick={setToggle}
            className={
              !toggle
                ? "text-gray-400 bg-transparent hover:text-gray-900 text-sm w-8 h-8 dark:hover:bg-gray-600 dark:hover:text-white md:hidden"
                : "hidden"
            }
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/admin"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:text-primary dark:hover:bg-gray-700 group"
              >
                <BsClipboardData />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/add-product"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:text-primary dark:hover:bg-gray-700 group"
              >
                <VscAdd />
                <span className="ml-3">Tambah Produk</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
