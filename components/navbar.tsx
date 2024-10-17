import React from "react"
import { MENUITEMS } from "@/constants/menuItems";
import { Link } from "@nextui-org/link";
import {Navbar, NavbarBrand } from "@nextui-org/navbar";

export function Nav() {

  return (
    <div className="mb-6">
    <Navbar isBlurred >
      <NavbarBrand className="absolute left-5">
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
