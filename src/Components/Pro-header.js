import localFont from "next/font/local";
import Button from "../Components/Pro-button";
import { ThemeController } from "./ThemeController";
import { Drawer } from "../Components/Drawer";
import Link from "next/link";

const myFont = localFont({ src: "../../public/RubikMonoOne-Regular.ttf" });

export const Header = () => {
  return (
    <div className="flex justify-between items-center sm:flex-row container mx-auto px-4 sm:px-0 mt-8">
      <div className="flex items-center">
        <div className={myFont.className}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold ">
            BERKHEE
          </h1>
        </div>
      </div>
      <div className="hidden sm:flex items-center gap-8 ml-auto">
        <div className="flex gap-8 text-lg font-medium text-stone-600">
          <Link href="#about">
            <span className="cursor-pointer hover:text-blue-600 transition-all duration-300 ease-in-out">
              About
            </span>
          </Link>
          <Link href="#work">
            <span className="cursor-pointer hover:text-blue-600 transition-all duration-300 ease-in-out">
              Work
            </span>
          </Link>
          <Link href="#contact">
            <span className="cursor-pointer hover:text-blue-600 transition-all duration-300 ease-in-out">
              Contact
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-4 ml-8">
          <ThemeController />
          <Button />
        </div>
      </div>
      <div className="sm:hidden flex items-center ml-auto">
        <Drawer src="kebab.png" className="w-6 h-6" />
      </div>
    </div>
  );
};
