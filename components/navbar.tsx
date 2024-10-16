import React from "react"
import { MENUITEMS } from "@/constants/menuItems";
import { Link } from "@nextui-org/link";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";

export function Nav() {

  return (
    <Navbar isBlurred 
      className="mb-6">
      <NavbarBrand className="absolute left-5">
        <p className="font-bold text-inherit">ZENARIO</p>
      </NavbarBrand>
      <NavbarContent className="md:flex hidden">
        {MENUITEMS.map((item) => (
          <NavbarItem key={item.id} className="justify-center">
          <Link href={item.href}>
          {item.title}
          </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  )
}
