import Header from "@/Components/Pro-header";
import Button from "../Components/Pro-button";
import Hero from "../Components/Hero";

export default function Portfolio() {
  return (
    <div className="flex flex-col border-solid border-red max-w-7xl bg-stone-400 m-auto">
      <div className="flex">
        <img className="h-9 ml-32 mt-16 " src="Tom.png" />
        <Header></Header>
        <img className="h-6 w-6 mt-16 ml-4" src="icon.png"></img>
        <Button></Button>
      </div>
      <div>
        <Hero></Hero>
      </div>
    </div>
  );
}
