import { Header } from "@/Components/Pro-header";

import Hero from "../Components/Hero";
import About from "../Components/AboutHim";
import Skills from "../Components/Skills";
import { Script } from "../Components/Skills-Script";
import Experience from "../Components/Experience";
import Experience2 from "../Components/Experience2";
import Work from "../Components/Work";
import Worktool from "../Components/Ubcab";
import Mentorhub from "../Components/Mentorhub";
import Toims from "../Components/Toims";
import Footer from "../Components/Footer";
import Footer2 from "../Components/Footer2";
import Datas from "@/Components/Datas";

const experience = [
  {
    head: " .JrFrontend Developer",
    li1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    li2: "Ut pretium arcu et massa semper, id fringilla leo semper.",
    li3: "Sed quis justo ac magna.",
    li4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function Portfolio() {
  return (
    <div className="flex flex-col container mx-auto sm:mx-auto">
      <div>
        <Header />
      </div>
      <div className="flex m-auto ">
        <Hero></Hero>
      </div>
      <div>
        <About></About>
      </div>
      <div>
        <Skills></Skills>
      </div>
      <div className="grid grid-cols-3 mb-24 sm:grid-cols-6">
        {Datas.map((skill) => {
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
