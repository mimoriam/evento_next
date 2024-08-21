"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
];

export default function Header() {
  const activePathname = usePathname();

  return (
    <header className="flex h-14 items-center justify-between border-b border-white/10 px-3 sm:px-9">
      EVENTO LOGO
      <nav className="h-full">
        <ul className="flex h-full gap-x-6 text-sm">
          {routes.map((route) => (
            <li
              key={route.path}
              className={cn(
                "relative flex items-center transition hover:text-white",
                {
                  "text-white": activePathname === route.path,
                  "text-white/50": activePathname !== route.path,
                },
              )}
            >
              <Link href={route.path}>{route.name}</Link>

              {activePathname === route.path && (
                <motion.div
                  layoutId="header-active-link"
                  className="bg-accent absolute bottom-0 h-1 w-full"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
