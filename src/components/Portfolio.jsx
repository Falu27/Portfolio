import React from "react";

import arrayDestruct from "../assets/portfolio/arrayDestruct.png";
import installNode from "../assets/portfolio/installNode.png";
import navbar from "../assets/portfolio/navbar.png";
import reactParallax from "../assets/portfolio/reactParallax.png";
import reactSmooth from "../assets/portfolio/reactSmooth.png";
import reactWeather from "../assets/portfolio/reactWeather.png";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const [t]= useTranslation("global");
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: installNode,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactParallax,
    },
    {
      id: 5,
      src: reactSmooth,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-900 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-600">
            Portfolio
          </p>
          <p className="py-6">{t("portfolio.check")}</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-300 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {t("portfolio.demo")}
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {t("portfolio.code")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
