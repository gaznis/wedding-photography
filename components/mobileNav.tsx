import React from "react"
import { MENUITEMS } from "@/constants/menuItems";
import { Link } from "@nextui-org/link";
import { Flex } from 'antd';
import { Divider } from "antd";



export function MobileNav() {

  return (
    <div className="md:hidden fixed bottom-0 w-full">
      <Divider className="border-l-neutral-950" />
      <Flex gap="large" justify="space-evenly">
        {MENUITEMS.map((item) => (
          <Link href={item.href} key={item.id}>
            <item.icon />
            </Link>
        ))}
      </Flex>
    </div>
  )
}
