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
    <div className="relative transition-all duration-300 ease-in-out">
      <div className={`${style.service} cursor-pointer `} onClick={onToggle}>
        <p className="text-black text-[2vw] font-bold w-[5vw]">{number}</p>
        <div className="w-[50vw] px-1">
          <p className="text-black text-[2vw] font-bold">{title}</p>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {isExpanded && (
              <p className="text-black text-[1.3vw] font-light text-start">
                {description}
              </p>
            )}
          </div>
        </div>

        <div
          className={`relative transition-all duration-300 ease-in-out ${
            isExpanded ? "h-[25vw]" : "h-[10vw]"
          } w-[20vw]`}
        >
          {image}
        </div>
        <div className="flex flex-grow justify-end ">
          <Image src={imageToUse} alt="Toggle" />
        </div>
      </div>
      <hr className="my-4 border-gray-600 border-t-1 " />
    </div>
  );
};

export default Service;
