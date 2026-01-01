import React from "react";

const profileImg =
  "https://i.ibb.co.com/Ldsysj9f/Screenshot-2025-12-12-at-4-04-28-PM.png";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EAF6F6] via-[#FDFEFE] to-[#DFF5F4] p-8 max-w-[80%] mx-auto rounded-2xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0">
          <img
            src={profileImg}
            alt="Profile"
            className="w-64 h-64 rounded-full shadow-lg object-cover hover:scale-105 transition-transform"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-5xl font-bold" style={{ color: "#2f8f91" }}>
            Md Rakibul Hasan
          </h1>
          <p className="text-gray-700 text-lg">
            Hi! I'm a passionate software developer with expertise in React,
            Node.js, and full-stack web development. I love creating modern,
            responsive, and user-friendly web applications.
          </p>
          <p className="text-gray-700 text-lg">
            I enjoy learning new technologies, solving complex problems, and
            contributing to open-source projects.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16">
        <h2
          className="text-3xl font-bold mb-8 text-center"
          style={{ color: "#2f8f91" }}
        >
          Skills & Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-2">React.js</h3>
            <p className="text-gray-600">
              Building interactive and responsive front-end applications.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-2">Node.js</h3>
            <p className="text-gray-600">
              Creating scalable backend services and REST APIs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-2">
              Full-Stack Development
            </h3>
            <p className="text-gray-600">
              End-to-end development including database, server, and
              client-side.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-2">Git & GitHub</h3>
            <p className="text-gray-600">
              Version control and collaborative development.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
            <p className="text-gray-600">
              Strong analytical and debugging skills to solve complex problems.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
            <p className="text-gray-600">
              Experience working in agile teams and cross-functional
              environments.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4" style={{ color: "#2f8f91" }}>
          Let's Work Together!
        </h2>
        <p className="text-gray-700 text-lg">
          Feel free to reach out to me for collaboration, projects, or just a
          friendly chat.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
