import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl">
            As a motivated DevOps Engineer with over a year of hands-on experience in implementing DevOps practices and technologies,
            the focus has been on actively pursuing personal projects, a robust bootcamp, and self-guided learning to gain a solid
            foundation in software development, infrastructure automation, and CI/CD pipelines.
        </p>

        <br />

        <p className="text-xl">
            With a solid grasp of cloud platforms, configuration management, and containerization, the focus is on applying this knowledge
            and expertise to enhance efficiency and foster collaboration within development and operations teams. Dedicated to learning and
            exploring emerging technologies and best practices, the focus is on staying at the forefront of the DevOps landscape. The current
            objective is to seek opportunities to contribute expertise and nurture professional growth within a collaborative and innovative environment.
        </p>
      </div>
    </div>
  );
};

export default About;