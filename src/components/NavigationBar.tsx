"use client";

import { Navbar, Button } from "flowbite-react";
import Link from "next/link";

const NavigationBar = (): React.ReactElement => {
  return (
    <Navbar fluid>
      <Navbar.Brand href="/">
        <span className="text-xl font-semibold drop-shadow dark:text-white  md:-ml-2">
          FavoriteFlower
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 items-center">
        <Button className="font-medium h-8 bg-primary">
          <Link href="#"> Hubungi Kami</Link>
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" className="font-medium">
          Beranda
        </Navbar.Link>
        <Navbar.Link href="/about" className="font-medium">
          Tentang Kami
        </Navbar.Link>
        <Navbar.Link href="/products" className="font-medium">
          Produk
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
