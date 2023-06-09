import React from "react";
import one from "../assets/portfolio/one.png";
import two from "../assets/portfolio/two.png";
import three from "../assets/portfolio/three.png";
import four from "../assets/portfolio/four.png";
import five from "../assets/portfolio/five.png";
import six from "../assets/portfolio/six.png";
import seven from "../assets/portfolio/seven.png";
import eight from "../assets/portfolio/eight.png";
import nine from "../assets/portfolio/nine.png";
import { Link } from "react-scroll";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: one,
      text: "Restaurant website",
      des: "It is made by using HTML,CSS,Apache,SQL.",
      textstyle: "p-6 text-center",
      href: "https://www.linkedin.com/in/khushi-garg-b31217201/",
    },
    {
      id: 2,
      src: two,
      text: "Online Teaching",
      des: "C Programming Bootcamp for 6 days 100% Live interaction.",
      textstyle: "p-6 text-center",
    },
    {
      id: 3,
      src: three,
      text: "Typing Speed Test Game",
      des: "A graphical User Interface made by using Python.",
      textstyle: "p-4 text-center text-1xl ",
      href: "",
    },
    {
      id: 4,
      src: four,
      text: "Offline Teaching",
      des: "Offline Masterclasses on C Programming at LPU for girls batch.",
      textstyle: "p-6 text-center",
    },
    {
      id: 5,
      src: five,
      text: "OS LAB Website",
      des: "Disk Scheduling Algorithms Calculator is made by using HTML, CSS and JavaScript.",
      textstyle: "p-6 text-center",
      href: "https://os-lab-using-java-script.vercel.app/",
    },

    {
      id: 7,
      src: seven,
      text: "Histogram",
      des: "A website is made by using React, Tailwind.",
      textstyle: "p-6 text-center text-1xl ",
      href: "https://histogramsitebykhushi.netlify.app/",
    },
    {
      id: 8,
      src: eight,
      text: "Hospital Website",
      des: "An online website is made by using React, Tailwind.",
      textstyle: "p-6 text-center text-1xl",
      href: "healthcarehospitalwebsite.netlify.app",
    },
    {
      id: 9,
      src: nine,
      text: "Crud Application",
      des: "An online website is made by using NodeJs, ReactJs, MongoDB.",
      textstyle: "p-6 text-center text-1xl",
      href: "https://crud-application2.onrender.com/users",
    },
    {
      id: 6,
      src: six,
      text: "Ecommerce Website",
      des: "An online website is made by using HTML, CSS, SQL.",
      textstyle: "p-6 text-center text-1xl",
      href: "",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-900 to-gray-800 w-full px-8 md:h-screen pt-20 sm:pt-36 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl border-b-4 inline border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-white">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 py-12 ">
          {portfolios.map(({ id, src, text, textstyle, des, href }) => (
            <a target="_blank" href={ href }>
              <div
                key={id}
                className="cursor-pointer shadow-md shadow-gray-600 rounded-lg h-full relative hover:opacity:0"
              >
                <img src={src} alt="" className="rounded-md z-10 h-full " />
                <div
                  className={`opacity-0 hover:opacity-100 absolute inset-0 z-20 flex justify-center rounded-lg flex-wrap text-1xl text-white font-bold align-items-center bg-black border-2 ${textstyle}`}
                >
                  {text} <span>{des}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
