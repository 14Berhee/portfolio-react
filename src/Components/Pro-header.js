import localFont from "next/font/local";
import Button from "../Components/Pro-button";
import { ThemeController } from "./ThemeController";

const myFont = localFont({ src: "../../public/RubikMonoOne-Regular.ttf" });

export const Header = () => {
  return (
    <div className="flex justify-between sm:flex container mx-auto">
      <div className="mr-16">
        <div className={myFont.className}>
          <h1
            className="w-20 h-9 text-3xl mt-16 sm:mr-[100px]  ml-4 
                    "
          >
            BERKHEE
          </h1>
        </div>
      </div>

      <div className=" hidden sm:block  ">
        <div className="flex items-center">
          <div className=" mt-16 gap-12 ml-auto ml-30 flex xl:ml-[584px] ">
            <p>About</p>
            <p>Work</p>
            <p>Testimonials</p>
            <p>Contact</p>
          </div>
          <div className="flex items-end ml-4">
            <ThemeController />

            <Button></Button>
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center sm:hidden sm:justify-end">
        <img
          src="kebab.png"
          className="w-6 h-6 mt-16  flex ml-[231px] mr-4"
        ></img>
      </div>
    </div>
  );
};
