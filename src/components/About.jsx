import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">


        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>
                <p className="text-xl mt-20">
                    Motivated DevOps Engineer with over a year of hands-on experience in implementing DevOps practices and technologies. 
                    During this time, I have actively pursued personal projects, a robust bootcamp, and self-guided learning to gain a good 
                    foundation in software development, infrastructure automation, and CI/CD pipelines.
                </p>
                <br />
                <p className="text-xl">
                    With a solid understanding of cloud 
                    platforms, configuration management, and containerization, I am eager to apply my knowledge and skills to drive efficiency 
                    and collaboration within development and operations teams. As a continuous learner, I am passionate about exploring emerging 
                    technologies and best practices to stay at the forefront of the DevOps landscape. I am now seeking an opportunity to contribute 
                    my expertise and grow professionally in a collaborative and innovative environment.
                </p>
        </div>


    </div>
  )
}

export default About