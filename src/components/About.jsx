import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500
">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
        As a third-year student studying web development, I have gained a 
        strong foundation in front-end development. I have experience in 
        creating responsive and visually appealing web pages using HTML, 
        CSS, and JavaScript, ReactJS, TailwindCss. I have worked on multiple projects, both individually and in a team, which has equipped
            me with excellent problem-solving and collaboration skills, which I think will be an huge asset. Along with these skills, I have worked with diversity of people, so I'm a team player.
        </p>

        <br />

        <p className="text-xl">
          Additionally, I am proficient in utilizing web development frameworks such as React.
           .Moreover, I learn the basics of DSA with Java and got many other certificates of appreciation in this field. I am eager to continue
             learning and growing in the field of web development and am excited to bring my 
             skills, enthusiasm to any project and ready to collaborate with other professionals.</p>
      </div>
    </div>
  );
};

export default About;
