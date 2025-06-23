import { NavLink } from "react-router-dom";

const baseClass =
  "border text-center py-2 mx-4 md:mx-5 px-6 md:px-10 rounded-b-md animate-all duration-500 bg-emerald-500 hover:bg-green-300 hover:text-black font-semibold";
const activeClass = "bg-green-300 text-black";

interface NavLinkProps {
  to: string;
  label: string;
}

const navLinks: NavLinkProps[] = [
  { to: "/", label: "Home" },
  { to: "carousel", label: "Carousel" },
  { to: "dashboard", label: "Dashboard" },
  { to: "charts", label: "Charts" },
];

// The isActive prop is used to determine if the link is currently active
// it's a built in React Router feature for the NavLink component
// This can help style based on whether the to property is the same as the current URL
const NavBar = () => (
  <div className=" flex justify-center">
    {navLinks.map((link: NavLinkProps) => (
      <NavLink
        key={link.to}
        to={link.to}
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : ""}`
        }
      >
        {link.label}
      </NavLink>
    ))}
  </div>
);

export default NavBar;
