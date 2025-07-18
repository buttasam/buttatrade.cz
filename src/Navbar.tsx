import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Kontakty", href: "#kontakty" },
    { name: "Partneři a reference", href: "#partneri" },
    { name: "Projekty", href: "#projekty" },
  ];

  return (
    <nav
      className={`bg-white border-b-1 border-gray-300 z-10 md:fixed top-0 right-0 left-0 md:transition-all md:duration-300 ${
        scrolled ? "md:py-0" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between h-12 items-center">
          {/* Logo */}
          <div className="text-xl font-bold transition-all duration-300">
            <img
              src="logos/logo-bt.png"
              className={`transition-all duration-300 ${
                scrolled ? "md:h-10" : "md:h-14"
              }`}
              alt="Logo"
            />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <a
                href={item.href}
                className=" hover:text-gray-600"
                key={item.name}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden mr-5">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" hover:text-gray-600 focus:cursor-pointer"
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden px-4 text-right overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block hover:text-gray-600 py-1 transition-opacity duration-300"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
