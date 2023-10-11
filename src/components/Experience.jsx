import React from 'react'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import docker from '../assets/docker.png'
import jenkins from '../assets/jenkins.png'
import bash_scripting from '../assets/bash_scripting.png'
import linux from '../assets/Linux.png'
import insomnia from '../assets/insomnia.png'
import aws from '../assets/aws.png'
import restapi from '../assets/restapi.png'
import vagrant from '../assets/vagrant.png'
import oracle from '../assets/oracle.png'
import ubuntu from '../assets/ubuntu.png'
import postgresql from '../assets/postgresql.png'
import python from '../assets/python.png'
import reactframework from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import github_actions from '../assets/github_actions.png'
import css from '../assets/css.png'
import terraform from '../assets/terraform.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import django from '../assets/django.png'
import gitlab from '../assets/gitlab.jpg'

const Experience = () => {


const tech = [
    {
        id: 1,
        src: html,
        title: 'HTML',
        style: 'shadow-orange-500',
    },
    {
        id: 2,
        src: css,
        title: 'CSS',
        style: 'shadow-blue-500',
    },
    {
        id: 3,
        src: javascript,
        title: 'Javascript',
        style: 'shadow-yellow-500',
    },
    {
        id: 4,
        src: reactframework,
        title: 'React',
        style: 'shadow-blue-600',
    },
    {
        id: 5,
        src: tailwind,
        title: 'Tailwind',
        style: 'shadow-sky-500',
    },
    {
        id: 6,
        src: nextjs,
        title: 'NextJS',
        style: 'shadow-white',
    },
    {
        id: 7,
        src: github,
        title: 'Github',
        style: 'shadow-gray-400',
    },
    {
        id: 8,
        src: docker,
        title: 'Docker',
        style: 'shadow-blue-500',
    },
    {
        id: 9,
        src: jenkins,
        title: 'Jenkins',
        style: 'shadow-white',
    },
    {
        id: 11,
        src: bash_scripting,
        title: 'Bash Scripting',
        style: 'shadow-gray-400',
    },
    {
        id: 11,
        src: linux,
        title: 'Linux',
        style: 'shadow-white',
    },
    {
        id: 12,
        src: insomnia,
        title: 'Insomnia',
        style: 'shadow-purple-500',
    },
    {
        id: 13,
        src: aws,
        title: 'AWS',
        style: 'shadow-orange-400',
    },
    {
        id: 14,
        src: restapi,
        title: 'RESTAPI',
        style: 'shadow-sky-500',
    },
    {
        id: 15,
        src: vagrant,
        title: 'Vagrant',
        style: 'shadow-gray-500',
    },
    {
        id: 16,
        src: oracle,
        title: 'Oracle',
        style: 'shadow-white',
    },
    {
        id: 17,
        src: ubuntu,
        title: 'Ubuntu',
        style: 'shadow-orange-500',
    },
    {
        id: 18,
        src: postgresql,
        title: 'PostgreSQL',
        style: 'shadow-sky-300',
    },
    {
        id: 19,
        src: python,
        title: 'Python',
        style: 'shadow-yellow-200',
    },
    {
        id: 20,
        src: github_actions,
        title: 'Github Actions',
        style: 'shadow-blue-500',
    },
    {
        id: 21,
        src: terraform,
        title: 'Terraform',
        style: 'shadow-purple-400',
    },
    {
        id: 22,
        src: django,
        title: 'Django',
        style: 'shadow-red-500',
    },
    {
        id: 23,
        src: gitlab,
        title: 'GitLab',
        style: 'shadow-orange-500',
    },
]



  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen">
  <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
    <div>
            <br />
            <br />
            <br />
            <br />
            <br />
      <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
        Experience
      </p>
    </div>
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
      {tech.map(({ id, src, title, style }) => (
        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
          <img src={src} alt="" className="w-20 mx-auto" />
          <p className="mt-4">{title}</p>
        </div>
      ))}
    </div>
  </div>
</div>
  )
}

export default Experience