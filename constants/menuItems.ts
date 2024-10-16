import { GoHomeFill } from "react-icons/go";
import { FaCameraRetro } from "react-icons/fa";
import { IoIosImages } from "react-icons/io";
import { MdChat } from "react-icons/md";

export const MENUITEMS = [
    {
    id:0,
        title: "Home",
        href: "/",
        icon: GoHomeFill
},
{
    id:1,
        title: "Services",
    href: "services",
    icon: FaCameraRetro
},
    {
    id:2,
        title: "Portfolio",
        href: "portfolio",
        icon: IoIosImages
},
    {
    id:3,
        title: "Contact Us",
        href: "contact",
        icon: MdChat 
}
];