import { useState, useRef } from "react";
import ChevronRight from "../components/ChevronRight";
import { Navigation, navLinks } from "../data/navMenuData";
import { NavLink } from "react-router";
import { baseClass, activeClass } from "../data/navMenuData";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [childOpen, setChildOpen] = useState<{ [key: string]: boolean }>({});
  const ref = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const handleRef = (href: string = "") => {
    if (!ref.current || !iconRef.current || href == "#") return;
    ref.current.setAttribute("data-open", isOpen ? "false" : "true");
    iconRef.current.setAttribute("data-open", isOpen ? "false" : "true");
    setIsOpen((v) => !v);
    // Reset childOpen state if menu is closed
    if (isOpen) {
      setChildOpen({});
    }
  };

  const handleChildren = (label: string) => {
    setChildOpen((p) => ({
      ...p,
      [label]: !p[label],
    }));
  };

  return (
    <div className="select-none">
      <div
        ref={ref}
        data-open="true"
        className="
          z-50 flex flex-col py-4 justify-between absolute left-0 top-0 bg-[rgb(235,235,245)] font-medium overflow-hidden transition-all duration-500
          data-[open=true]:w-48 data-[open=true]:h-full data-[open=true]:bg-opacity-100 data-[open=false]:w-0 data-[open=false]:h-0 data-[open=false]:opacity-0 
        "
      >
        <ul className="flex flex-col">
          {navLinks.map((link: Navigation) => (
            <li key={link.name} className="w-full">
              <NavLink
                key={link.name}
                to={link.href}
                draggable={false}
                onClick={() => handleRef(link.href)}
                className={({ isActive }) =>
                  `${baseClass} ${
                    isOpen ? "w-full opacity-100" : "w-0 opacity-0"
                  } ${isActive ? activeClass : ""}`
                }
              >
                <link.icon className="w-6 h-6" />
                {link.name}
                {link.children?.length && (
                  <ChevronRight
                    className="w-4 h-4 absolute right-4 transition-all duration-200"
                    style={{
                      transform: childOpen[link.name]
                        ? "rotate(90deg)"
                        : "rotate(0deg)",
                    }}
                    onClick={(e) => {
                      if (!e) return;
                      e.preventDefault();
                      e.stopPropagation();
                      handleChildren(link.name);
                    }}
                  />
                )}
              </NavLink>
              {childOpen[link.name] ? (
                <ul
                  className={`
                  overflow-hidden
                  transition-all duration-300
                  pl-2
                  ${
                    childOpen[link.name]
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
                >
                  {link.children &&
                    link.children.map((child) => (
                      <li key={child.name} className={`${baseClass}`}>
                        <child.icon className="w-5 h-5 ml-4" />
                        <NavLink
                          to={child.href}
                          onClick={() => handleRef(child.href)}
                        >
                          {child.name}
                        </NavLink>
                      </li>
                    ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>

        <div className="flex flex-col">
          <div
            className={`transition-all duration-500 text-nowrap p-4 cursor-pointer hover:bg-blue-200 ${baseClass} ${
              isOpen ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
          >
            Settings
          </div>
          <div
            className={`transition-all duration-500 text-nowrap py-2 px-4 cursor-pointer hover:bg-blue-200 ${baseClass} ${
              isOpen ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
          >
            Sign Out
          </div>
        </div>
      </div>
      <div
        ref={iconRef}
        data-open="true"
        className={`z-50 flex absolute data-[open=true]:left-48 ml-2 data-[open=false]:left-0 top-2 rounded-full 
          p-2 bg-blue-200 cursor-pointer transition-all duration-500 border-2 ${
            isOpen ? "border-black/100" : "border-black/40"
          }`}
        onClick={() => handleRef()}
      >
        <ChevronRight
          className={`${
            isOpen ? "opacity-100" : "opacity-40"
          } transition-all duration-300`}
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
        <span
          className={`pr-2 ${
            isOpen ? "opacity-100" : "opacity-40"
          } transition-all duration-300`}
        >
          Menu
        </span>
      </div>
    </div>
  );
};

export default NavMenu;
