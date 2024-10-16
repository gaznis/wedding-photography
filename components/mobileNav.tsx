import React from "react"
import { MENUITEMS } from "@/constants/menuItems";
import { Link } from "@nextui-org/link";
import { Flex } from 'antd';



export function MobileNav() {

  return (
    <div className="md:hidden fixed bg-white bottom-0 w-full align-middle p-3">
      <Flex gap="large" justify="space-evenly">
        {MENUITEMS.map((item) => (
          <Link href={item.href} key={item.id}>
            <item.icon size={20}/>
            </Link>
        ))}
      </Flex>
    </div>
  )
}
