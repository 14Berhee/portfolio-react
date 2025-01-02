const workskills = [
  "React",
  "Next.js",
  "Typescript",
  "MongoDB",
  "Tailwindcss",
  "Figma",
  "Git",
];

import Link from "next/link";

const SkillList = ({ skills }) => {
  return (
    <div className="flex flex-wrap flex-row gap-2">
      {skills.map((tool, index) => (
        <p
          key={index}
          className="h-7 rounded-xl bg-slate-200 flex  px-5 py-1 items-center mt-2 font-semibold text-sm text-black "
        >
          {tool}
        </p>
      ))}
    </div>
  );
};

const Worktool = () => {
  return (
    <div className="flex flex-col justify-center  sm:flex-row">
      <div className="max-w-xl h-[480px] mx-auto">
        <img
          src="foodDelivery.png"
          alt="Work tool"
          className="p-12 bg-[#F9FAFB] rounded-xl dark:bg-slate-600"
        />
      </div>
      <div className="ml-12">
        <div className="max-w-xl mt-3">
          <h1 className="text-xl font-semibold mb-4 h-7">Food-Delivery</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
        </div>
        <div className="max-w-[480px] h-[120px]">
          <SkillList skills={workskills} />
          <Link href=" https://food-rouge-five.vercel.app/">
            {" "}
            <img src="Sum.png" className="mt-6"></img>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Worktool;
