import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-600">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          I am a person with ambition knowledge and learning, with attitude
          positive and work ethic. Thanks to the different abilities that I was
          acquiring with time and effort, I position as FrontEnd Developer
          working with HTML, CSS, Sass, NodeJs, JavaScript and React. I seek to
          continue learning and growing in the field of programming, being able
          to participate and contribute to new projects and challenges. I am
          currently studying BackEnd stack MERN (Mongo Db - Express - React -
          NodeJs).
        </p>

        <br />

        <p className="text-xl">
          I have some extra knowledge of Computer Science, WordPress, Office
          Tools, among others. Management of Photoshop, which I use a lot for
          designs and editions of images used in projects.
        </p>
      </div>
    </div>
  );
};

export default About;
