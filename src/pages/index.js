import Header from "@/Components/Pro-header";
import Button from "../Components/Pro-button";
import Hero from "../Components/Hero";
import About from "../Components/AboutHim";
import Skills from "../Components/Skills";
import { Script } from "../Components/Skills-Script";
import Javascriptsvg from "../Components/icons/Javascriptsvg";
import Typescript from "../Components/icons/Typescript";
import React from "../Components/icons/React";
import Next from "../Components/icons/Next";
import Node from "../Components/icons/Node";
import Tech from "../Components/icons/Tech";
import Nest from "../Components/icons/Nest";
import Socket from "../Components/icons/Socket";
import Postre from "../Components/icons/Postre";
import Mongo from "../Components/icons/Mongo";
import Sass from "../Components/icons/Sass";
import Tail from "../Components/icons/Tail";
import Figma from "../Components/icons/Figma";
import Cyress from "../Components/icons/Cyress";
import Story from "../Components/icons/Story";
import Git from "../Components/icons/Git";
import Experience from "../Components/Experience";
import Experience2 from "../Components/Experience2";
import Work from "../Components/Work";
import Worktool from "../Components/Workmap";
import Mentorhub from "../Components/Mentorhub";
import Toims from "../Components/Toims";
import Footer from "../Components/Footer";
import Footer2 from "../Components/Footer2";

const datas = [
  {
    id: 1,
    icon: <Javascriptsvg />,
    name: "Javascript",
  },
  {
    id: 2,
    icon: <Typescript />,
    name: "Typescript",
  },
  {
    id: 3,
    icon: <React />,
    name: "React",
  },
  {
    id: 4,
    icon: <Next />,
    name: "Next",
  },
  {
    id: 5,
    icon: <Node />,
    name: "Node.js",
  },
  {
    id: 6,
    icon: <Tech />,
    name: "",
  },
  {
    id: 7,
    icon: <Nest />,
    name: "Nest.js",
  },
  {
    id: 8,
    icon: <Socket />,
    name: "Socket.io",
  },
  {
    id: 9,
    icon: <Postre />,
    name: "PostgreSQL",
  },
  {
    id: 10,
    icon: <Mongo />,
    name: "MongoDB",
  },
  {
    id: 11,
    icon: <Sass />,
    name: "Sass/Scss",
  },
  {
    id: 12,
    icon: <Tail />,
    name: "Tailwindcss",
  },
  {
    id: 13,
    icon: <Figma />,
    name: "Figma",
  },
  {
    id: 14,
    icon: <Cyress />,
    name: "Cypress",
  },
  {
    id: 15,
    icon: <Story />,
    name: "Story",
  },
  {
    id: 16,
    icon: <Git />,
    name: "Git",
  },
];
const experience = [
  {
    head: " .SrFrontend Developer",
    li1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    li2: "Ut pretium arcu et massa semper, id fringilla leo semper.",
    li3: "Sed quis justo ac magna.",
    li4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    head: " Team Lead",
    li1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    li2: "Ut pretium arcu et massa semper, id fringilla leo semper.",
    li3: "Sed quis justo ac magna.",
    li4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    head: " .Full Stack Developer",
    li1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    li2: "Ut pretium arcu et massa semper, id fringilla leo semper.",
    li3: "Sed quis justo ac magna.",
    li4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function Portfolio() {
  return (
    <div className="flex flex-col border-solid box-border min-w-fit max-w-screen-[1440px] m-auto">
      <div className="flex">
        <img className="h-9 ml-32 mt-16 " src="Tom.png" />
        <Header></Header>
        <img className="h-6 w-6 mt-16 ml-4" src="icon.png"></img>
        <Button></Button>
      </div>
      <div>
        <Hero></Hero>
      </div>
      <div>
        <About></About>
      </div>
      <div>
        <Skills></Skills>
      </div>
      <div className="grid grid-cols-8 mb-24">
        {datas.map((skill) => {
          return <Script key={skill.id} icon={skill.icon} name={skill.name} />;
        })}
      </div>
      <div>
        <Experience></Experience>
      </div>
      <div className="mt-24 mb-24">
        {experience.map((experiences, index) => {
          return (
            <Experience2
              key={index}
              head={experiences.head}
              li1={experiences.li1}
              li2={experiences.li2}
              li3={experiences.li3}
              li4={experiences.li4}
            />
          );
        })}
      </div>
      <div className="mt-24 ">
        <Work></Work>
      </div>
      <div>
        <Worktool></Worktool>
      </div>
      <div>
        <Mentorhub></Mentorhub>
      </div>
      <div className="mb-24">
        <Toims></Toims>
      </div>
      <div>
        <Footer></Footer>
      </div>
      <div>
        <Footer2></Footer2>
      </div>
    </div>
  );
}
