import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-emerald-400">About Me</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg hover:shadow-emerald-400 transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-emerald-300 mb-2">Background</h3>
            <p className="text-gray-300">
              I have a strong foundation in <strong>Java programming</strong>, object-oriented principles, and full-stack web development. I’ve built hands-on projects using HTML, CSS, JavaScript, React and Spring Boot.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg hover:shadow-emerald-400 transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-emerald-300 mb-2">Passion</h3>
            <p className="text-gray-300">
              I'm highly motivated to work on real-world applications, continuously improve my skills, and contribute to development teams. My curiosity and commitment help me quickly adapt to new technologies and environments.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg hover:shadow-emerald-400 transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-emerald-300 mb-2">Strengths</h3>
            <p className="text-gray-300">
             Detail-oriented and focused on writing clean, efficient code. Quick to learn and passionate about building intuitive user interfaces with reliable backend functionality.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg hover:shadow-emerald-400 transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-emerald-300 mb-2">Goal</h3>
            <p className="text-gray-300">
              Seeking a challenging entry-level role where I can apply my technical knowledge, grow through mentorship, and become a valuable part of a collaborative team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
