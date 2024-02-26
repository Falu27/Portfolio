import React from "react";
import FabImage from "../assets/FabrizioImg.png";
import { TiArrowRightOutline } from "react-icons/ti";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [t]= useTranslation("global");
  return (
    <div
      name={t("navbar.home")}
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            {t("home.title")}
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            {t("home.description")}
          </p>
          <div className="flex">
            <Link
              to="portfolio"
              smooth
              duration={700}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-400 cursor-pointer "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-500">
                <TiArrowRightOutline size={22} className="ml-1" />
              </span>
            </Link>
            
          </div>
        </div>
        <div>
          <img
            src={FabImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full border-2 border-white-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
