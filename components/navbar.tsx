"use client";
import React from "react"
import { MENUITEMS } from "@/constants/menuItems";
import { Link } from "@nextui-org/link";
import { Button } from "antd";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/navbar";
import { DragHandleRounded, CloseRounded } from '@mui/icons-material';

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar isBordered isBlurred isMenuOpen={isMenuOpen}
      className="mb-6">
      <NavbarBrand className="absolute left-5">
        <p className="font-bold text-inherit">ZENARIO</p>
      </NavbarBrand>
      <NavbarContent className="md:flex gap-4 hidden">
        {MENUITEMS.map((item) => (
          <NavbarItem key={item.id} >
          <Link href={item.href}>
          {item.title}
          </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <Button className="md:hidden absolute right-5" onClick={() =>setIsMenuOpen(!isMenuOpen)} type="text" shape="round" icon={isMenuOpen ? <CloseRounded /> : <DragHandleRounded />} />
      <NavbarMenu className="navbar-menu">
        {MENUITEMS.map((item) => (
          <NavbarMenuItem key={item.id} className="navbar-menu-item">
            <Link href={item.href} >
            {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
