export default function Experience2(props) {
  const { head, li1, li2, li3, li4 } = props;

  return (
    <div className="m-auto">
  
      <div className="h-auto p-4 bg-slate-100 mt-12 m-auto max-w-lg sm:max-w-4xl rounded-lg">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 m-auto pt-6 sm:pt-9">
       
          <div className="w-[120px] sm:w-[160px] h-auto mb-4 sm:mb-0 mx-auto sm:mx-0">
            <img src="logo-upwork.png" alt="Upwork logo" className="w-full h-auto" />
          </div>

      
          <div className="w-full sm:w-[480px]">
            <h1 className="text-xl sm:text-2xl font-semibold mb-4">{head}</h1>
            <ul className="list-none p-0">
              <li className="mb-2">{li1}</li>
              <li className="mb-2">{li2}</li>
              <li className="mb-2">{li3}</li>
              <li className="mb-2">{li4}</li>
            </ul>
          </div>

      
          <div className="mt-4 sm:mt-0">
            <p className="text-sm sm:text-base">June 2024 - Present</p>
          </div>
        </div>
      </div>
    </div>
  );
}
