export default function Experience2 (props){
    const {head , li1 , li2 , li3 ,li4} =props;
return (
<div className="m-auto">

<div className=" h-72 bg-slate-100 mt-12 m-auto max-w-4xl rounded-lg" >
  
    <div className="max-w-[832px] h-[224px]  gap-12 m-auto flex pt-9">
    <div className="w-52 h-7">
         <img src="logo-upwork.png" ></img>
    </div>
    
<div className="w-96 h-[224px]  ">
    <h1 className="text-xl font-semibold mb-4 h-7">{head}</h1>
    <div className="font-normal] ">
    <li className="mb-1">{li1}</li>
    <li className="mb-1">{li2}</li>
    <li className="mb-1">{li3}</li>
    <li className="mb-1">{li4}</li>
    </div>
</div>
<div className="ml-12">
        <p>Nov 2021 - Present</p>
    </div>
 </div>
</div>
</div>
)
}