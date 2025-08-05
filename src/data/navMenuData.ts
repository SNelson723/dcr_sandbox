/* eslint-disable @typescript-eslint/no-explicit-any */
import { UsersIcon } from "@heroicons/react/24/outline";
import Radiation from "../svgs/Radiation";
import StoresIcon from "../svgs/StoresIcon";

export type NavMenuItem = {
  label: string;
};

export const baseClass =
  "py-2.5 hover:text-white hover:bg-blue-200 hover:text-black font-semibold transition-all duration-300 text-nowrap p-4 cursor-pointer flex items-center justify-start gap-3";
export const activeClass = "bg-[rgb(174,199,242)] text-white";

export interface NavLinkProps {
  to: string;
  label: string;
}

export type Navigation = {
  name: string;
  href: string;
  icon: typeof UsersIcon | typeof Radiation | typeof StoresIcon | any;
  children: Navigation[];
  childOpen: boolean;
  // mobile: boolean;
};

export const navLinks: Navigation[] = [
  { name: "Home", href: "/", icon: UsersIcon, children: [], childOpen: false },
  {
    name: "Carousel",
    href: "carousel",
    icon: Radiation,
    children: [],
    childOpen: false,
  },
  {
    name: "Charts",
    href: "#",
    icon: UsersIcon,
    children: [
      {
        name: "Charts One",
        href: "charts",
        icon: UsersIcon,
        children: [],
        childOpen: false,
      },
      {
        name: "Charts Two",
        href: "chartstwo",
        icon: Radiation,
        children: [],
        childOpen: false,
      },
    ],
    childOpen: false,
  },
  {
    name: "Testing",
    href: "testing",
    icon: StoresIcon,
    children: [],
    childOpen: false,
  },
];
