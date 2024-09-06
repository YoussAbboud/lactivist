import React, { ReactNode } from "react";
import style from "@/app/styles/header.module.css";
import Image from "next/image";
import collapse_img from "./assets/collapse.png";

interface ServiceProps {
  number?: string;
  title?: string;
  description?: string;
  image?: React.ReactNode;
}

const Service: React.FC<ServiceProps> = ({
  number,
  title,
  description,
  image,
}) => {
  return (
    <div>
      <div className={style.service}>
        <p className="text-black text-[2vw] font-bold w-[5vw]">{number}</p>
        <div className="w-[50vw] px-1">
          <p className="text-black text-[2vw] font-bold">{title}</p>
          <p className="text-black text-[1.3vw] font-light text-start">
            {description}
          </p>
        </div>

        <div className="relative h-[20vw]" style={{ width: "20vw" }}>
          {image}
        </div>

        {/* <img
          src={"./assets/collapse.png"}
          alt={"collapse"}
          className="w-[5vw]"
        /> */}
        <div className="flex flex-grow justify-end " >
          <Image src={collapse_img} alt="Lactation Support" />
        </div>
      </div>
      <hr className="my-4 border-gray-600 border-t-1 " />
    </div>
  );
};

export default Service;
