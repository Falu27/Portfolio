import React from "react";

import desarrolloWeb from "../assets/portfolio/desarrolloWeb.png";
import javaScript from "../assets/portfolio/javaScript.png";
import desarrolloWebResponsivear from "../assets/portfolio/desarrolloWebResponsive.png";
import reactJs from "../assets/portfolio/reactJs.png";
import frontendReact from "../assets/portfolio/frontendReact.png";
import backMern from "../assets/portfolio/backMern.png";
import reactProject from "../assets/portfolio/ReactApp.png"
import jsApp from "../assets/portfolio/JavaScriptApp.png"
import memoryJs from "../assets/portfolio/MemoryJs.png"
import portfolioNew from "../assets/portfolio/portfolioNew.png"

import { useTranslation } from "react-i18next";
import ButtonLink from "./ButtonLink";

const Portfolio = () => {
  const [t]= useTranslation("global");
  const portfolios = [
    {
      id: 1,
      src: desarrolloWeb,
      ul:"https://drive.google.com/file/d/1zVYPHTzp35VMkOf0uQI20f40hB8YormZ/view?usp=sharing",
    },
    {
      id: 2,
      src: javaScript,
      ul:"https://drive.google.com/file/d/1cyCRKXA2I8LIeiNAh-qkP9cAzfggLmZD/view?usp=sharing",

    },
    {
      id: 3,
      src: desarrolloWebResponsivear,
      ul:"https://drive.google.com/file/d/1MCcOqm_8JnIlLagGRmDahteX45JLjyHp/view?usp=sharing",
    },
    {
      id: 4,
      src: reactJs,
      ul:"https://drive.google.com/file/d/1wluOQ5gw-kTcMSBMui6VsdZanzpto6mx/view?usp=sharing",
    },
    {
      id: 5,
      src: frontendReact,
      ul:"https://drive.google.com/file/d/1hIK9JOdbFW_Nmr-o3CofRie-xtegAPYm/view?usp=sharing",
    },
    {
      id: 6,
      src: backMern,
      ul:"https://drive.google.com/file/d/1Cl5QdpMDrWKP5oWxQiPJ8cATyDArXGnI/view?usp=sharing",
    },
    {
      id: 7,
      src: reactProject,
      ul:"https://galotafabrizio.com/ProyectoReact/",
    },
    {
      id: 8,
      src: jsApp,
      ul:"https://galotafabrizio.com/ProyectoJava/",
    },
    {
      id: 9,
      src: memoryJs,
      ul:"https://galotafabrizio.com/MemoryJs/",
    },
    {
      id: 10,
      src: portfolioNew,
      ul:"https://galotafabrizio.com/portfolio/",
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-900 to-black w-full text-white md:h-fit"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-600">
            Portfolio
          </p>
          <p className="py-6">{t("portfolio.check")}</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, ul }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-300 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <ButtonLink url={ul} label={t("portfolio.demo")}></ButtonLink>
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
