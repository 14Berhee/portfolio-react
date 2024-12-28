export default function About() {
  return (
    <div className="m-auto">
      <div className="mb-12">
        <p className=" mt-24 w-28 h-7 rounded-xl bg-slate-200 flex m-auto justify-center ">
          About me
        </p>
      </div>
      <div className="flex flex-col sm:flex-row  ">
        <div>
          <img
            src="aiGenerated.jpg"
            className="max-w-xl mx-auto sm:max-w-xl sm:mr-48 "
          ></img>
        </div>
        <div className="font-sans w-full ">
          <div>
            <h1 className=" flex justify-center font text-2xl h-12 font-medium   ">
              Curious about me? Here you have it:
            </h1>
          </div>
          <div className="flex justify-between mx-auto flex-col w-[400px] sm:justify-between sm:w-[584px]">
            <p className="sm:mt-5 pt-5">
              Im a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code.
            </p>
            <p className="mb-4">
              Since starting my web development journey in 2015, Ive embraced
              challenges and kept up with the latest tech trends. Now in my
              early thirties, seven years in, Im building cutting-edge web apps
              using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and
              more.
            </p>
            <p className="mb-4">
              With a progressive mindset, I enjoy the entire product development
              process, from ideation to execution. Off duty, youll find me on
              Twitter, tracking startup journeys, or unwinding. Follow me for
              tech insights and public project updates on Twitter or GitHub.
            </p>
            <p>Finally, some quick bits about me.</p>
            <div className="flex mt-4">
              <div className="flex flex-col">
                <li className="mr-4">B.E. in Computer Engineering</li>
                <li className="mr-4">Full time freelancer</li>
              </div>
              <div className="mr-3">
                <li>Avid learner</li>
              </div>
            </div>
            <p className="mt-4 mb-24">
              One last thing, Im available for freelance work, so feel free to
              reach out and say hello! I promise I dont bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
