"use client"

import { Dropdown, Navbar } from "flowbite-react"

export default function NavbarWithDropdown() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
    </Navbar>
  )
}
