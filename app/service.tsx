import React, { ReactNode } from "react";
import style from "@/app/styles/header.module.css";
import Image from "next/image";
import collapse_img from "./assets/collapse.png";
import expand_img from "./assets/expand.png";

interface ServiceProps {
  number?: string;
  title?: string;
  description?: string;
  image?: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
}

const Service: React.FC<ServiceProps> = ({
  number,
  title,
  description,
  image,
  isExpanded,
  onToggle,
}) => {
  const imageToUse = isExpanded ? collapse_img : expand_img;

  return (
    <div className="relative transition-all duration-300 ease-in-out" onClick={onToggle}>
      <div className={`${style.service} cursor-pointer `}>
        <div className="flex flex-row justify-start items-center lg:items-center w-full mb-5">
        <p className="text-black text-[2rem] lg:text-[2vw] font-bold lg:w-[5vw] pr-[0.5rem] leading-0">{number}</p>
        <div className="w-full lg:w-[50vw] px-1">
          <p className="text-black text-[1rem] lg:text-[2vw] font-bold">{title}</p>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {isExpanded && (
              <p className="text-black text-[0.8rem] lg:text-[1.3vw] font-light text-start">
                {description}
              </p>
            )}
          </div>
        </div>
        <div className="flex lg:flex-grow justify-end w-max lg:hidden">
          <Image src={imageToUse} alt="Toggle" className="w-[1.5rem] lg:w-[2vw]"/>
        </div>
        </div>

        <div
          className={`relative transition-all duration-300 ease-in-out ${
            isExpanded ? "h-[20rem] lg:h-[25vw]" : " h-[10rem] lg:h-[12vw] "
          } w-full lg:w-[30vw]`}
        >
          {image}
        </div>
        <div className="lg:flex flex-grow justify-end hidden">
          <Image src={imageToUse} alt="Toggle" className="w-[1rem] lg:w-[2vw]"/>
        </div>
      </div>
      <hr className="my-4 border-gray-600 border-t-1 " />
    </div>
  );
};

export default Service;
