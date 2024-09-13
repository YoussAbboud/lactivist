import React, { useState } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import arrow_img from "./assets/arrow.png";
interface Testimony {
  id: number;
  title: string;
  text: string;
  image: StaticImageData;
}

interface TestimonyListProps {
  testimonials: Testimony[];
}

// const TestimonyList: React.FC<TestimonyListProps> = ({ testimonials }) => {
//   const [testimonyToShow, setTestimonyToShow] = useState(testimonials[0]);
//   const [animationClass, setAnimationClass] = useState('');
//   const nextTestimony = () => {
//     setAnimationClass(style.exitLeft);
//     setTimeout(() => {
//       setAnimationClass(''); // Reset animation class
//       setTestimonyToShow(
//         testimonials[(testimonyToShow.id % testimonials.length)]
//       );
//       setAnimationClass(style.enterLeft);
//       setTimeout(() => {

//         setAnimationClass(''); // Reset animation class
//       }, 500); // Match the duration of your animation
//     }, 500); // Match the duration of your animation

//   };
const TestimonyList: React.FC<TestimonyListProps> = ({ testimonials }) => {
  const [testimonyToShow, setTestimonyToShow] = useState(testimonials[0]);

  const nextTestimony = () => {
    setTestimonyToShow(testimonials[testimonyToShow.id % testimonials.length]);
  };

  const prevTestimony = () => {
    setTestimonyToShow(
      testimonials[
        (testimonyToShow.id - 2 + testimonials.length) % testimonials.length
      ]
    );
  };

  const goToLastTestimony = () => {
    setTestimonyToShow(testimonials[testimonials.length - 1]);
  };

  return (
    <div>
      <p className="text-black font-bold text-[3vw] mb-[3vw]">Testimonials</p>
      <div className={`flex `}>
        <Image
          src={testimonyToShow.image}
          alt="testimony image"
          className="h-[35vw] w-auto object-contain"
        />
        <div className="pl-[4vw] flex flex-col grow justify-between">
          <div className={`grow`}>
            <h2 className="text-black text-[4vw] font-bold">
              {testimonyToShow.title}
            </h2>
            <p className="text-black text-[2vw]">{testimonyToShow.text}</p>
            <hr className="my-4 border-gray-600 border-t-1 " />
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <p
                className="text-black text-[1.3vw] cursor-pointer underline mr-[3vw]"
                onClick={prevTestimony}
              >
                Prev
              </p>
              <p
                className="text-black text-[1.3vw] cursor-pointer underline"
                onClick={nextTestimony}
              >
                Next
              </p>
            </div>
            <div className="flex">
              <p className="text-black text-[1.3vw] underline mr-[2vw]">
                {testimonyToShow.id}/{testimonials.length}
              </p>
              <Image
                src={arrow_img}
                alt="go to end"
                className="w-[10vw] cursor-pointer"
                onClick={goToLastTestimony}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonyList;
