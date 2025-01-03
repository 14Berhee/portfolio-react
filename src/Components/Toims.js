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

export default function Toims() {
  return (
    <div className="flex flex-col mt-12 justify-center sm:flex-row sm:space-x-12 px-6 sm:px-12">
      <div className="max-w-xl h-[480px] mb-6 sm:mb-0">
        <img
          src="ecommerce.png"
          alt="E-Commerce"
          className="w-full h-[480px] object-cover rounded-xl shadow-md"
        />
      </div>
      <div className="flex flex-col max-w-xl">
        <div className="mt-3">
          <h1 className="text-2xl font-semibold mb-4 text-center sm:text-left">
            E-Commerce
          </h1>
          <p className="text-sm sm:text-base mb-4 text-center sm:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac
            tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae.
          </p>
        </div>
        <div className="max-w-[480px] mb-6 mx-auto sm:mx-0">
          <SkillList skills={worksills} />
        </div>
        <div className="flex justify-center sm:justify-start">
          <Link href="https://ecommerce-site-serp.vercel.app/">
            <span className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              View Project
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
