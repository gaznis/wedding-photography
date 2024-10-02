import React from "react"
import Link from "next/link"

export function Navbar() {
  return (
    <header>
      <nav className="container flex flex-col items-start justify-between px-6 mx-auto md:flex-row md:items-center">
        <Link href="/">
          Zenario
        </Link>
        <ul className="grid grid-flow-col gap-4 mx-auto mt-6 md:mt-0 auto-cols-auto md:auto-rows-auto md:gap-8 lg:gap-12">
          <li>
            <Link href='/'>
                Home
            </Link>
          </li>
          <li>
            <Link href='services'>
                Services
            </Link>
          </li>
          <li>
            <Link href='portfolio'>
                Portfolio
            </Link>
          </li>
          <li>
            <Link href='contact'>
                Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
