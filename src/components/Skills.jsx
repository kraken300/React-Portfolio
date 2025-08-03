import React from 'react';
import {
    FaHtml5,
    FaJs,
    FaReact,
    FaJava
} from 'react-icons/fa';

import { SiSpring, SiHibernate, SiCsswizardry, SiMysql } from "react-icons/si";

const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <SiCsswizardry className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Java", icon: <FaJava className="text-red-400" /> },
    { name: "Advanced Java", icon: <SiHibernate className="text-gray-500" /> },
    { name: "Spring Boot", icon: <SiSpring className="text-green-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
];

const Skills = () => {
    return (
        <section id="skills" className="bg-black text-white py-20">
            <div className="w-4/5 mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-emerald-400">
                    Skills
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900 p-6 rounded-xl text-center shadow-[0_4px_12px_rgba(0,255,128,0.2)] hover:shadow-[0_0_15px_rgba(0,255,128,0.5)] hover:scale-105 transition-all duration-300"
                        >
                            <div className="text-4xl mb-2">{skill.icon}</div>
                            <p className="text-lg font-medium">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
