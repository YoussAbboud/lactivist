"use client";

import React, {useEffect} from 'react'
import Image from "next/image";
import 'tailwindcss/tailwind.css';
import style from "@/app/styles/header.module.css";
import bg from "./assets/header-bg.png";
import logo from "./assets/lactivist-logo.png";
import Aos from "aos"
import 'aos/dist/aos.css'

export default function Home() {
  useEffect (()=> {
    Aos. init();
    }, [])
  return (
    <section>

<div className="relative z-30 px-[4vw] py-[2vw] text-center w-full bg-[#BFE2D2]">
  <span className="w-[10vw] absolute top-[1vw]">
  <img alt="logo" src="./assets/lactivist-logo.png" data-aos="fade-right" data-aos-delay="300"/>
  </span>
  <div className="flex flex-row align-middle justify-center text-[1.6vw] gap-10 text-[#5C5C5C]"><p>Home</p> <p>About us</p> <p>Services</p> </div>
</div>


 <div className={style.header}>
<h1 className="text-black font-bold text-[3vw] z-30 relative whitespace-pre-line w-[50vw] leading-[3.5vw]" data-aos="fade-right">Welcome to Abir Dagher Lactation 
Consultancy.</h1>

<p className="text-black font-light text-[1.5vw] z-30 relative whitespace-pre-line w-[50vw] leading-[3.5vw]" data-aos="fade-right" data-aos-delay="100">Supporting Your Journey to Motherhood.</p>

<div className="relative z-30 mt-8" data-aos="fade-right" data-aos-delay="200">
    <button className="bg-[#BFE2D2] hover:bg-[#e2fbf0] text-black text-[1.5vw] font-bold py-4 px-[4vw] rounded-xl transition duration-300 ease-in-out">
      Contact Us
    </button>
  </div>
<span className="absolute w-full top-0 left-0 z-0 mt-[-13vw]">
  <img src="./assets/header-bg.png" alt="header" data-aos="fade-down"/>
  </span>
  </div>

  <div className={style.contact_us}>
    <span data-aos="fade-right" data-aos-delay="300">
  Have questions about lactation? Contact our expert consultant! Abir Dagher, IBCLC. {"\n"}
  Call us at: <a href="tel: +961 70 19 18 04" className="underline">+961 70 19 18 04</a> . Available: Monday to Friday, 09:00 AM - 05:00 PM.
  </span>
  </div>

  <div className={style.about_us}>
    <div className="w-2/3" data-aos="fade-right" data-aos-delay="400">
<p className="text-[#5C5C5C] text-[1vw] font-light">About us</p>
<p className="text-black text-[3vw] font-bold">Abir Dagher Lactation Consultancy</p>
<p className="text-black text-[1.3vw] font-light text-start">With over 13 years of experience in maternity care, Abir Dagher is an
IBCLC-certified lactation consultant who has worked with some of the
most reputable hospitals, including Bellevue Medical Center in Lebanon.
Her extensive experience and compassionate approach make her a trusted
resource for mothers seeking support and education in their breastfeeding
journey.</p>
</div>

<div className="w-fit flex flex-row bg-[#BFE2D2] p-5 rounded-2xl gap-3 h-fit" data-aos="flip-up" data-aos-delay="400">
<div className="text-[3.5vw] text-black">13</div>
<div>
 <p className="text-[2vw] text-black">years of</p>
 <p className="lg:whitespace-pre-line text-[1vw] text-black font-light">Maternity Care with an IBCLC {"\n"}
 certified lactation.</p>
 </div>
</div>

  </div>
     
    </section>
  );
}
