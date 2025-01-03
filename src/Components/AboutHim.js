export default function About() {
  return (
    <div className="m-auto px-4 sm:px-8">
      <div id="about" className="mb-12 ">
        <p className="mt-24 w-28 h-7 rounded-xl bg-slate-200 flex m-auto justify-center text-black text-sm sm:text-base">
          About me
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        <div>
          <img
            src="aiGenerated.jpg"
            className="max-w-xs mx-auto sm:mr-8 sm:max-w-md rounded-lg"
            alt="About me"
          />
        </div>
        <div className="font-sans mt-6 sm:mt-0 w-full">
        
          <div className="flex flex-col sm:w-[584px] mx-auto mt-5">
          <h1 className="text-2xl sm:text-3xl font-medium text-center sm:text-left">
            Curious about me? Here you have it:
          </h1>
            <p className="text-base sm:text-lg mt-4 sm:mt-5">
              I am a full-stack developer, passionate about React.js, JavaScript, and Node.js. I excel in blending technical and visual aspects to craft exceptional digital products, prioritizing user experience, precise design, and optimized code.
            </p>
            <p className="text-base sm:text-lg mt-4">
              Since starting my web development journey in 2024, I have embraced challenges and kept up with the latest tech trends. Now in my early twenties, one year in, I am building cutting-edge web apps using Next.js, TypeScript, Nestjs, Tailwindcss, MongoDB, and more.
            </p>
            <p className="text-base sm:text-lg mt-4">
              With a progressive mindset, I enjoy the entire product development process, from ideation to execution. Off duty, you will find me on Facebook. Follow me for tech insights and public project updates on GitHub.
            </p>
            <p className="text-base sm:text-lg mt-4">Finally, some quick bits about me.</p>
            <div className="flex flex-col sm:flex-row mt-4">
              <div className="flex flex-col sm:w-1/2">
                <li className="mr-4">B.E. in Computer Engineering</li>
                <li className="mr-4">Half-time freelancer</li>
              </div>
              <div className="flex flex-col sm:w-1/2 mt-4 sm:mt-0">
                <li>Avid learner</li>
              </div>
            </div>
            <p className="mt-4 mb-24 text-base sm:text-lg">
              One last thing, I am available for freelance work, so feel free to reach out and say hello! I promise I do not bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
