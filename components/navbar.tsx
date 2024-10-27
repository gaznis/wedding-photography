import React from "react"
import { MENUITEMS } from "@/constants/menuItems";
import { Link } from "@nextui-org/link";
import {Navbar, NavbarBrand } from "@nextui-org/navbar";

export function Nav() {

  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-sm h-14 flex flex-col justify-center">
      <Navbar isBlurred >
      <NavbarBrand className="absolute left-6 top-3">
        <p className="font-bold text-inherit">ZENARIO</p>
      </NavbarBrand>
      </Navbar>
      <div className="hidden md:flex justify-center gap-6">
        {MENUITEMS.map((item) => (
          <Link href={item.href} key={item.id}>
          {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
