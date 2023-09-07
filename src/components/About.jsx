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
            a strong foundation in software development, infrastructure automation, and CI/CD pipelines has been diligently cultivated
            through personal projects, a robust bootcamp, and self-guided learning. This proficiency extends to cloud platforms, configuration
            management, and containerization, all leveraged to facilitate smooth code integration and promote collaboration within development and operations teams.
        </p>

        <br />

        <p className="text-xl">
            My unwavering dedication to learning and exploring emerging technologies and best practices drives me to staying at the cutting edge of the dynamic DevOps landscape.
            Presently, the goal is to identify opportunities to contribute expertise and nurture professional growth within a collaborative and innovative environment.
        </p>
      </div>
    </div>
  );
};

export default About;