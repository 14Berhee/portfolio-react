const workdata = [
  "React",
  "Next.js",
  "Typescript",
  "Nest.js",
  "PostgreSQL",
  "Tailwindcss",
  "Figma",
  "Cypress",
  "Storybook",
  "Git",
];

const Worktool = () => {
  return (
    <div className="flex justify-between">
      <div className="max-w-xl h-[480px]">
        <img src="Picture.jpg" className="p-12 bg-[#F9FAFB] rounded-xl"></img>
      </div>
      <div>
        <div className="max-w-xl">
          <h1 className="text-xl font-semibold mb-4 h-7">UBCab</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
        </div>
        <div className="max-w-[480px] h-[120px] ">
          <div className=" flex flex-wrap flex-row  ">
            {workdata.map((tool, index) => {
              return (
                <p
                  key={index}
                  className=" h-7 rounded-xl bg-slate-200 flex m-auto justify-center px-5 py-1 items-center mt-2 font-semibold text-sm  "
                >
                  {tool}
                </p>
              );
            })}
            ;
          </div>
          <img src="Sum.png" className="mt-6"></img>
        </div>
      </div>
    </div>
  );
};

export default Worktool;
