import Link from "next/link";

const worksills = ["React", "Next.js", "Tailwindcss", "Figma", "Git"];

export default function Mentorhub() {
  return (
    <div className="flex  flex-col-reverse mt-12 sm:flex-row justify-center ">
      <div className="flex flex-col mr-12  max-w-xl">
        <div className=" mx-auto md:max-w-xl mt-3">
          <h1 className="text-xl font-semibold mb-4 h-7">Meta-blog</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adi piscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
        </div>
        <div className="max-w-[480px] h-[120px] ">
          <div className=" flex flex-wrap flex-row  ">
            {worksills.map((tool, index) => {
              return (
                <p
                  key={index}
                  className=" h-7 rounded-xl bg-slate-200 flex m-auto justify-center px-5 py-1 items-center mt-2 font-semibold text-sm  text-black"
                >
                  {tool}
                </p>
              );
            })}
          </div>
          <div className="max-w-xl h-[480px] mx-auto">
            <Link href="https://news-web-1lm2.vercel.app/">
              <img src="Sum.png" className="mt-6"></img>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-xl h-[480px]">
        <img src="newsWeb.png" className="p-12 bg-[#F9FAFB] rounded-xl"></img>
      </div>
    </div>
  );
}
