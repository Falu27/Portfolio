import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [t, i18n] = useTranslation("global");

  const links = [
    {
      id: 1,
      link: t("navbar.home"),
    },
    {
      id: 2,
      link: t("navbar.about"),
    },
    {
      id: 3,
      link: t("navbar.experience"),
    },
    {
      id: 4,
      link: "portfolio",
    },
    {
      id: 5,
      link: t("navbar.contact"),
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Galota</h1>
      </div>

      <ul className="hidden md:flex">
        <button
          className="px-4 cursor-pointer capitalize font-medium text-yellow-500 hover:scale-110 duration-300"
          onClick={() => i18n.changeLanguage(t("navbar.lng"))}
        >
          {t("navbar.lng2")}
        </button>

        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-300"
          >
            <Link to={link} smooth duration={700}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400">
          <button
            className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-110 text-yellow-500"
            onClick={() => i18n.changeLanguage(t("navbar.lng"))}
          >
            {t("navbar.lng2")}
          </button>

          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-110"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={700}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
