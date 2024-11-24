import React, { useEffect, useState } from "react";
import Profile from "../../assets/profile.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-scroll";

const links = [
  {
    name: " HOME ",
    url: "hero",
  },
  {
    name: " MENU ",
    url: "toplist",
  },
  {
    name: " ABOUT ",
    url: "about",
  },
  {
    name: " SERVICE ",
    url: "service",
  },
];

const Navbar = () => {
  const [navbaropen, setNavbaropen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const HandleNavbar = () => {
    setNavbaropen(!navbaropen);
  };

  return (
    <section
      className={`${
        scrolled ? "sticky top-0 z-50 bg-white shadow-md" : "bg-transparent"
      } py-4 transition-all duration-300`}
    >
      <div className="container flex items-center justify-between">
        {/* logo section */}
        <div className="cursor-pointer">
          <p className="text-lg font-semibold">
            FOOD <span className="text-red-600"> EAT</span>
          </p>
        </div>

        <div className="flex gap-10">
          {/* Nav section */}
          <div className="hidden sm:flex">
            <ul className="flex items-center justify-center gap-4 sm:gap-6">
              {links.map((link) => {
                return (
                  <li
                    key={link.name}
                    className="hover:border-b-2 hover:border-primary cursor-pointer"
                  >
                    <Link to={link.url} smooth={true} duration={500}>
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Login section */}
          <div className="cursor-pointer">
            <div className="flex gap-2 items-center">
              <img src={Profile} alt="" className="w-10" />
              <RiArrowDownSLine
                size={30}
                color="gray"
                onClick={HandleNavbar}
                className="block sm:hidden"
              />
            </div>
          </div>
        </div>
      </div>

      {navbaropen && (
        <div>
          <ul className="flex flex-col py-6 bg-gray-200 w-40 h-56 rounded-xl absolute top-20 right-10 items-center justify-center gap-2 sm:gap-6">
            {links.map((link) => {
              return (
                <li
                  key={link.name}
                  className="hover:border-b-2 hover:border-primary w-36 text-center bg-white/50 px-4 py-2 rounded-md"
                >
                  <Link to={link.url} smooth={true} duration={500}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;
