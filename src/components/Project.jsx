import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: "Weather App",
        description: "A weather app built with React, using the OpenWeather API for real-time weather data, and styled with TailwindCSS for a sleek, responsive UI.",
        image: "/images/weather.png",
        github: "https://github.com/kraken300/Weather-App-React",
    },
    {
        id: 2,
        title: "React Portfolio",
        description: "A personal portfolio website created with React and styled using TailwindCSS, showcasing projects, skills, and contact information.",
        image: "/images/portfolio.png",
        github: "https://github.com/kraken300/React-Portfolio",
    },
    {
        id: 3,
        title: "Todo App",
        description: "A full-stack To-Do app built with React for the front end, Spring Boot for the backend, MySQL for data storage, and TailwindCSS for styling.",
        image: "/images/todo.png",
        github: "https://github.com/kraken300/todo-app-spring-boot",
    },
    {
        id: 4,
        title: "Expense Tracker App",
        description: "A full-stack Expense Tracker app built with JSP for the front end, Spring MVC for the backend and MySQL for data storage.",
        image: "/images/expense.png",
        github: "https://github.com/kraken300/expense-tracker-spring-mvc",
    },
];

const Project = () => {
    return (
        <section id="projects" className="bg-black text-white px-6 py-16">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12 text-emerald-400">Projects</h2>
                <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
                    {projects.map(({ id, title, description, image, github }) => (
                        <div
                            key={id}
                            className="bg-zinc-900 p-5 rounded-2xl shadow-[0_4px_12px_rgba(0,255,128,0.2)] hover:shadow-[0_0_15px_rgba(0,255,128,0.5)] transition-shadow duration-300"
                        >
                            <img
                                src={image}
                                alt={title}
                                className="rounded-xl h-48 w-full object-cover mb-4 hover:scale-105 transition-transform duration-300"
                            />
                            <h3 className="text-xl font-semibold mb-2">{title}</h3>
                            <p className="text-sm text-gray-300 mb-3">{description}</p>
                            <div className="flex justify-center">
                                <a
                                    href={github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-emerald-400 hover:text-emerald-300 text-2xl transition-colors duration-300"
                                    title="View Code on GitHub"
                                >
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
