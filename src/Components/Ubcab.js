const workskills = [
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

const SkillList = ({ skills }) => {
  return (
    <div className="flex flex-wrap flex-row">
      {skills.map((tool, index) => (
        <p
          key={index}
          className="h-7 rounded-xl bg-slate-200 flex m-auto justify-center px-5 py-1 items-center mt-2 font-semibold text-sm text-black"
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
          src="Picture.jpg"
          alt="Work tool"
          className="p-12 bg-[#F9FAFB] rounded-xl"
        />
      </div>
      <div className="ml-12">
        <div className="max-w-xl mt-3">
          <h1 className="text-xl font-semibold mb-4 h-7">UBCab</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
        </div>
        <div className="max-w-[480px] h-[120px]">
          <SkillList skills={workskills} />
          <img src="Sum.png" alt="Summary" className="mt-6" />
        </div>
      </div>
    </div>
  );
};

export default Worktool;
