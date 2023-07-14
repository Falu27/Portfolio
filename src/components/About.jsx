import React from "react";
import { useTranslation } from "react-i18next"; 

const About = () => {
  const [t]= useTranslation("global");
  return (
    <div
      name={t("navbar.about")}
      className="w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-600">
            {t("about.about")}
          </p>
        </div>

        <p className="text-xl mt-10">
          {t("about.p1")}
        </p>

        <br />

        <p className="text-xl">
          {t("about.p2")}
        </p>
      </div>
    </div>
  );
};

export default About;
