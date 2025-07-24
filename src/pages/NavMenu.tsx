import { useState, useRef } from "react";
import { navMenuData } from "../data/navMenuData";
import ChevronRight from "../components/ChevronRight";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const ref = useRef<HTMLUListElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const handleRef = () => {
    if (!ref.current || !iconRef.current) return;

    const openOrClose = ref.current.getAttribute("data-open");
    ref.current.setAttribute(
      "data-open",
      openOrClose === "true" ? "false" : "true"
    );

    const icon = iconRef.current.getAttribute("data-open");
    iconRef.current.setAttribute(
      "data-open",
      icon === "true" ? "false" : "true"
    );
    setIsOpen((v) => !v);
  };

  return (
    <>
      <ul
        ref={ref}
        data-open="true"
        className="
          z-50 absolute left-0 top-0 h-screen bg-gray-200 font-medium overflow-hidden transition-all duration-300
          data-[open=true]:w-44 data-[open=true]:opacity-100 data-[open=false]:w-0 data-[open=false]:opacity-0 
        "
      >
        {navMenuData.map((item) => (
          <li
            key={item.label}
            data-open={isOpen}
            className={`
              transition-all duration-300 text-nowrap
              py-2 px-4 cursor-pointer hover:bg-blue-200
              ${isOpen ? "w-full opacity-100" : "w-0 opacity-0"}
            `}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <div
        ref={iconRef}
        data-open="true"
        className="z-50  absolute data-[open=true]:left-48 data-[open=false]:left-4 top-4 rounded-full p-2 bg-white cursor-pointer transition-all duration-300"
        onClick={handleRef}
      >
        <ChevronRight className={`${isOpen ? 'opacity-100' : 'opacity-40'} transition-all duration-300`} style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
      </div>
    </>
  );
};

export default NavMenu;
