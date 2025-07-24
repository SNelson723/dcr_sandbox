
export type NavMenuItem = {
  label: string;
};

export const baseClass =
  "border text-center py-2 px-6 md:px-10 rounded animate-all duration-500 bg-emerald-500 hover:bg-green-300 hover:text-black font-semibold";
export const activeClass = "bg-green-300 text-black";

export interface NavLinkProps {
  to: string;
  label: string;
}

export const navMenuData: NavMenuItem[] = [
  { label: "Home" },
  { label: "Carousel" },
  // { label: "Dashboard" },
  { label: "Charts" },
  { label: "Charts Two" },
  { label: "Nav Menu" },
];

export const navLinks: NavLinkProps[] = [
  { to: "/", label: "Home" },
  { to: "carousel", label: "Carousel" },
  // { to: "dashboard", label: "Dashboard" },
  { to: "charts", label: "Charts" },
  { to: "chartstwo", label: "Charts Two" },
];