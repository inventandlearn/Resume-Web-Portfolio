import React from 'react'
import tutorialapi from '../assets/portfolio/TutorialAPI.jpg'
import recipeapi from '../assets/portfolio/RecipeAPI.jpg'
import profileapi from '../assets/portfolio/ProfileAPI.jpg'


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: tutorialapi,
            title: "Guide Guru",
            description: "An application that showcases introductory tutorials and provides links to documentation for various frameworks and DevOps technologies. Bootstrap was used to build the front-end of the application and Django REST Framework along with PostgreSQL were used to build the back-end.",
            architectureLink: tutorialapi,
            codeLink: "https://github.com/inventandlearn/PostGres-Docker-pgAdmin-Insomnia---Docker-Tutorial-App-"
        },
        {
            id: 2,
            src: profileapi,
            title: "API Express",
            description: "An application that is primarily used for backend operations. These operations include creating and updating user profiles, login and authentication, posting status updates, and viewing status update feeds. Django REST Framework, Nginx, and the inbuilt database SQLite defines the architechure of this application.",
            architectureLink: profileapi,
            codeLink: "https://github.com/inventandlearn/Profiles-Rest-Api"
        },
        {
            id: 3,
            src: recipeapi,
            title: "Recipe Rush",
            description: "An application that acts as a virtual recipe box. It handles creating and updating user profiles, changing passwords, creating recipes with titles, price points, cooking times, and tags like comfort food, vegan or dessert. Users can upload and view images once they are authenticated. Django REST Framework, Nginx, GitLab, Terraform, Docker, and AWS were used to build and scale this project.",
            architectureLink: recipeapi,
            codeLink: "https://github.com/inventandlearn/Cloud-Recipe-Api-App"

        }
    ]




  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg pg-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, title, description, src, architectureLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-indigo-600">{title}</h2>
            </div>
            <div className="image-container">
            <img src={src} alt="" className="rounded-md duration-200 hover:scale-150" />
            </div>
            <div className="description-container p-4 overflow-y-auto h-40">
            <p className="text-sm">{description}</p>
            </div>
            <div className="button-container flex items-center justify-center">
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
  );
}

export default Portfolio