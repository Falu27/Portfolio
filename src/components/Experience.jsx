import React from "react";


import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import mongodb from "../assets/mongodb.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import sass from "../assets/sass.png";
import bootstraps from "../assets/bootstraps.png";
import jquery from "../assets/jquery.png";
import tailwind from "../assets/tailwind.png";
import express from "../assets/express.png";
import git from "../assets/git.png";
import ps from "../assets/ps.png";
import postgre from "../assets/postgre.png";
import sqlite from "../assets/sqlite.png";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const [t]= useTranslation("global");
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: sass,
      title: "Sass",
      style: "shadow-pink-400",
    },
    {
      id: 13,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: bootstraps,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 12,
      src: jquery,
      title: "jQuery",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: react,
      title: "React",
      style: "shadow-blue-400",
    },
    {
      id: 7,
      src: git,
      title: "Git",
      style: "shadow-red-500",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-white",
    },
    {
      id: 9,
      src: mongodb,
      title: "Mongo DB",
      style: "shadow-green-600",
    },
    {
      id: 10,
      src: node,
      title: "Node",
      style: "shadow-green-400",
    },
    {
      id: 11,
      src: express,
      title: "Express",
      style: "shadow-gray-400",
    },
    {
      id: 15,
      src: postgre,
      title: "PostgreSQL",
      style: "shadow-blue-400",
    },
    {
      id: 16,
      src: sqlite,
      title: "SQLite",
      style: "shadow-blue-300",
    },
    {
      id: 14,
      src: ps,
      title: "Photoshop",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name={t("navbar.experience")}
      className="bg-gradient-to-b from-black to-gray-900 w-full h-fit"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-600 p-2 inline">
            {t("experience.experience")}
          </p>
          <p className="py-6">{t("experience.tech")}</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-5 text-center py-8 px-10 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
