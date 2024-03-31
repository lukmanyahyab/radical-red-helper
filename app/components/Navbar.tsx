"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = (): JSX.Element => {
  const pathname = usePathname();

  const navLinks = [
    { url: "/", name: "Home" },
    { url: "/abilities", name: "Abilities" },
    { url: "/tmhm", name: "TM & HM" },
    { url: "/mega-stones", name: "Mega Stones" },
    { url: "/move-tutor", name: "Move Tutor" },
    { url: "/items", name: "Items" },
  ];

  return (
    <nav className="bg-zinc-800 p-2 mb-4 m-auto w-fit rounded-b-xl">
      <ul className="flex gap-6 font-semibold">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`px-2 py-[2px] rounded-lg border-2 border-zinc-200 hover:bg-zinc-400 hover:text-zinc-950 transition${
                pathname == link.url ? " bg-zinc-200 text-zinc-950 pointer-events-none" : ""
              }`}
              href={link.url}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
