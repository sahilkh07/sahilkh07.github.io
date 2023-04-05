import { Heading } from "@chakra-ui/react";
import React from "react";
import { Backend, Tools } from "../data/Skills";
// import html from "../assets/html.png";
// import css from "../assets/css.png";
// import javascript from "../assets/javascript.png";
// import reactImage from "../assets/react.png";
// import nextjs from "../assets/nextjs.png";
// import graphql from "../assets/graphql.png";
// import github from "../assets/github.png";
// import tailwind from "../assets/tailwind.png";
import TypeScript from '../assets/typescript.png'
import "./Projects.css";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png",

      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: "https://santoshy1101.github.io/My-Portfolio/static/media/css.69a82c2d9e45c933a9cb.png",
      title: "CSS",
      style: "shadow-sky-400",
    },
    {
      id: 3,
      src: "https://santoshy1101.github.io/My-Portfolio/static/media/javascript.1ccd6ef9bb1f9c84ef00.png",

      title: "JavaScript",
      style: "shadow-orange-300",
    },
    {
      id: 4,
      src: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",

      title: "React",
      style: "shadow-sky-500",
    },
    {
      id: 5,
      src: "https://santoshy1101.github.io/My-Portfolio/static/media/tailwind.e47ac876b8d4d0bba47a.png",
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: "https://santoshy1101.github.io/My-Portfolio/static/media/nextjs.48ddc8121a0fcb543d64.png",
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: "https://santoshy1101.github.io/My-Portfolio/static/media/redux.4ea2c9105f4e7643b31c.png",
      title: "Redux",
      style: "shadow-purple-600",
    },
    // {
    //   id: 8,
    //   src: "https://santoshy1101.github.io/My-Portfolio/static/media/github.3b9e32903aa89111875d.png",
    //   title: "GitHub",
    //   style: "shadow-gray-400",
    // }
    {
      id: 8,
      src:TypeScript,
      title:"TypeScript",
      style:"shadow-sky-500"
    },
    {
      id:9,
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6hcSQurSL8MXdOLPtiFDSLq13Mp9QncUus_RDiW1lbbSnVxI1_5pYqzKzQGgJaz8PAmo&usqp=CAU",
      title:"Chakra UI",
      style:"shadow-teal-500"
    }
  ];

  return (
    <div id="skills">
      <Heading mb="4" mt={"2"}>
        Skills
      </Heading>
      <div>
        <Heading textAlign={"center"} mb="4" mt={"4"}>
          Frontend
        </Heading>
        <div className="skills-card divSkills">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-1  rounded-lg ${style}`}
            >
              <img  src={src} alt="" className="w-20 mx-auto skills-card-img" />
              <p className="mt-4 skills-card-name">{title}</p>
            </div>
          ))}
        </div>
        <Heading textAlign={"center"} mb="4" mt={"4"}>Backend</Heading>
        <div className="divSkills">
          {Backend.map(({ id, src, name, style,img }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-1  rounded-lg ${style}`}> 
              <img src={img} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{name}</p>
            </div>
          ))}
          
          </div>

        <Heading textAlign={"center"} mb="4" mt={"4"}>Tools</Heading>
        <div className="divSkills">
          {Tools.map(({ id, src, name, style,img }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-1  rounded-lg ${style}`}>
              <img src={img} alt=""
              className="w-20 mx-auto" />
              <p className="mt-4">{name}</p>
              </div>

          ))}
          </div>
        
      </div>
    </div>
  );
};

export default Skills;
