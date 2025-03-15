import Link from "next/link";

const worksills = ["React", "Next.js", "Tailwindcss", "Figma", "Git"];

const SkillList = ({ skills }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((tool, index) => (
        <p
          key={index}
          className="h-7 rounded-xl bg-slate-200 flex px-5 py-1 items-center mt-2 font-semibold text-sm text-black"
        >
          {tool}
        </p>
      ))}
    </div>
  );
};

export default function Mentorhub() {
  return (
    <div className="flex flex-col-reverse mt-12 sm:flex-row items-center justify-center sm:space-x-12 px-6 sm:px-12">
      <div className="flex flex-col mr-12 max-w-xl">
        <div className="mx-auto md:max-w-xl mt-3">
          <h1 className="text-2xl font-semibold mb-4 text-center sm:text-left">
            Meta-blog
          </h1>
          <p className="text-sm sm:text-base mb-4 text-center sm:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
        </div>
        <div className="max-w-[480px] mb-6 mx-auto">
          <SkillList skills={worksills} />
        </div>
        <div className="flex justify-center sm:justify-start">
          <Link href="https://news-web-vkol.vercel.app/">
            <span className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              View Project
            </span>
          </Link>
        </div>
      </div>
      <div className="max-w-xl h-[480px] mt-6 sm:mt-0">
        <img
          src="newsWeb.png"
          alt="Meta-blog"
          className="w-full h-[480px] object-cover rounded-xl shadow-md bg-no-repeat bg-cover bg-center"
        />
      </div>
    </div>
  );
}
