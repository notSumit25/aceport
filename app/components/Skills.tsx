import React from "react";

const Skills = () => {
  return (
    <div className="w-full text-white p-20">
      <span className="text-5xl font-extrabold">
        Skills<span className="text-blue-500 text-5xl">.</span>
      </span>
      <div className="w-full flex justify-center mt-10">
        <div className="w-[25%]">
          <div className="text-2xl font-bold mb-5">Frontend</div>
          <div className="text-lg">
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>React</p>
            <p>Next.js</p>
            <p>Tailwind CSS</p>
          </div>
        </div>
        <div className="w-[25%]">
          <div className="text-2xl font-bold mb-5">Backend</div>
          <div className="text-lg">
            <p>Node.js</p>
            <p>Express.js</p>
            <p>MongoDB</p>
            <p>Firebase</p>
            <p>Django</p>
          </div>
        </div>
        <div className="w-[25%]">
          <div className="text-2xl font-bold mb-5">Tools</div>
          <div className="text-lg">
            <p>Git</p>
            <p>GitHub</p>
            <p>VSCode</p>
            <p>Postman</p>
            <p>Vercel</p>
          </div>
        </div>
        <div className="w-[25%]">
          <div className="text-2xl font-bold mb-5">Programming</div>
          <div className="text-lg">
            <p>C/C++</p>
            <p>Java</p>
            <p>Python</p>
            <p>Dart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
