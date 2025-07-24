import { UsersIcon } from "@heroicons/react/24/outline";
import Radiation from "../svgs/Radiation";
import StoresIcon from "../svgs/StoresIcon";

export type NavMenuItem = {
  label: string;
};

export const baseClass =
  "py-2.5 hover:bg-[rgb(174,199,242)] hover:text-black font-semibold transition-all duration-300 text-nowrap p-4 cursor-pointer flex items-center justify-start gap-3";
export const activeClass = "bg-blue-200 text-black";

export interface NavLinkProps {
  to: string;
  label: string;
}

export type Navigation = {
  name: string;
  href: string;
  icon: typeof UsersIcon | typeof Radiation | typeof StoresIcon | any;
  // children?: Navigation[];
  // childOpen?: boolean;
  // mobile: boolean;
};

export const navMenuData: NavMenuItem[] = [
  { label: "Home" },
  { label: "Carousel" },
  // { label: "Dashboard" },
  { label: "Charts" },
  { label: "Charts Two" },
  { label: "Nav Menu" },
];

export const navLinks: Navigation[] = [
  { name: "Home", href: "/", icon: UsersIcon },
  { name: "Carousel", href: "carousel", icon: Radiation },
  // { name: "Dashboard", href: "dashboard", icon: StoresIcon },
  { name: "Charts", href: "charts", icon: UsersIcon },
  { name: "Charts Two", href: "chartstwo", icon: Radiation },
  { name: "Testing", href: "testing", icon: StoresIcon },
];
