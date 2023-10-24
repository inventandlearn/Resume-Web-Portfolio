import React from 'react'
import tutorialapi from '../assets/portfolio/TutorialAPI.jpg'
import recipeapi from '../assets/portfolio/RecipeAPI.jpg'
import profileapi from '../assets/portfolio/ProfileAPI.jpg'


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: tutorialapi,
            architectureLink: tutorialapi,
            codeLink: "https://github.com/inventandlearn/PostGres-Docker-pgAdmin-Insomnia---Docker-Tutorial-App-"
        },
        {
            id: 2,
            src: profileapi,
            architectureLink: profileapi,
            codeLink: "https://github.com/inventandlearn/Profiles-Rest-Api"
        },
        {
            id: 3,
            src: recipeapi,
            architectureLink: recipeapi,
            codeLink: "https://github.com/inventandlearn/Cloud-Recipe-Api-App"

        }
    ]




  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">


        <div className="max-w-screen-lg pg-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    Portfolio
                </p>
            </div>


            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({id, src, architectureLink, codeLink}) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img src={src} alt="" className="rounded-md duration-200 hover:scale-150"/>
                    <div className="flex items-center justify-center">
                    <a href={architectureLink} target="_blank" rel="noopener noreferrer">
                        <button key={id} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Architecture</button>
                    </a>
                    <a href={codeLink} target="_blank" rel="noopener noreferrer">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                    </a>
                    </div>
                </div>
                    ))}
            </div>
        </div>


    </div>
  )
}

export default Portfolio