"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import style from "@/app/styles/header.module.css";
import bg from "./assets/header-bg.png";
import logo from "./assets/lactivist-logo.png";
import drImage from "./assets/smiling-doctor-with-strethoscope.png";
import lactation_support_img from "./assets/Lactation_Support_img.png";
import prenatal_classes_img from "./assets/prenatal_classes_img.png";
import postnatal_care_img from "./assets/postnatal_care_img.png";
import newborn_basics_img from "./assets/newborn_basics_img.png";
import contact_us_bg_img from "./assets/contact_us_bg_img.png";
import Aos from "aos";
import "aos/dist/aos.css";
import Service from "./service";



export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section>
      <div className="relative z-30 px-[4vw] py-[2vw] text-center w-full bg-[#BFE2D2]">
        <Image
          alt="logo"
          src={logo}
          className="w-[10vw] absolute top-[1vw]"
          data-aos="fade-right"
          data-aos-delay="300"
        />
        <div className="flex flex-row align-middle justify-center text-[1.6vw] gap-10 text-[#5C5C5C]">
          <p>Home</p> <p>About us</p> <p>Services</p>{" "}
        </div>
      </div>

      <div className={style.header}>
        <h1
          className="text-black font-bold text-[3vw] z-30 relative whitespace-pre-line w-[50vw] leading-[3.5vw]"
          data-aos="fade-right"
        >
          Welcome to Abir Dagher Lactation Consultancy.
        </h1>

        <p
          className="text-black font-light text-[1.5vw] z-30 relative whitespace-pre-line w-[50vw] leading-[3.5vw]"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          Supporting Your Journey to Motherhood.
        </p>

        <div
          className="relative z-30 mt-8"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <button className="bg-[#BFE2D2] hover:bg-[#e2fbf0] text-black text-[1.5vw] font-bold py-4 px-[4vw] rounded-xl transition duration-300 ease-in-out">
            Contact Us
          </button>
        </div>

        <Image
          src={bg}
          alt="header"
          className="absolute w-full top-0 left-0 z-0 mt-[-13vw]"
          data-aos="fade-down"
        />
      </div>

      <div className={style.contact_us_btn}>
        <span data-aos="fade-right" data-aos-delay="300">
          Have questions about lactation? Contact our expert consultant! Abir
          Dagher, IBCLC. <br />
          Call us at:{" "}
          <a href="tel: +961 70 19 18 04" className="underline">
            +961 70 19 18 04
          </a>{" "}
          . Available: Monday to Friday, 09:00 AM - 05:00 PM.
        </span>
      </div>

      <div className={style.about_us}>
        <div className="w-2/3" data-aos="fade-right" data-aos-delay="400">
          <p className="text-[#5C5C5C] text-[1vw] font-light">About us</p>
          <p className="text-black text-[3vw] font-bold">
            Abir Dagher Lactation Consultancy
          </p>
          <p className="text-black text-[1.3vw] font-light text-start">
            With over 13 years of experience in maternity care, Abir Dagher is
            an IBCLC-certified lactation consultant who has worked with some of
            the most reputable hospitals, including Bellevue Medical Center in
            Lebanon. Her extensive experience and compassionate approach make
            her a trusted resource for mothers seeking support and education in
            their breastfeeding journey.
          </p>
        </div>

        <div
          className="w-fit flex flex-row bg-[#BFE2D2] p-5 rounded-2xl gap-3 h-fit"
          data-aos="flip-up"
          data-aos-delay="400"
        >
          <div className="text-[3.5vw] text-black">13</div>
          <div>
            <p className="text-[2vw] text-black">years of</p>
            <p className="lg:whitespace-pre-line text-[1vw] text-black font-light">
              Maternity Care with an IBCLC {"\n"}
              certified lactation.
            </p>
          </div>
        </div>
      </div>
      <div className={style.inside_the_clinic}>
        <p className="text-black text-[3vw] font-bold">Inside the Clinic</p>
        <p className="text-black text-[1.3vw] font-light text-start">
          A Peek into the journey of Happy Moms and Healthy Babies.
        </p>
        <br />
        <Image
          src={drImage}
          alt="Smiling Image"
          className="rounded-xl w-[100vw]"
          data-aos="fade-down"
        />
      </div>
      <div className={style.services}>
        <p className="text-black text-[3vw] font-bold">Services</p>
        <p className="text-black text-[1.3vw] font-light text-start">
          Tailored Services for your Unique Journey. Supporting Moms and Babies
          every step of the way.{" "}
        </p>
        <br />
        <Service
          number="01"
          title="Lactation and Breastfeeding Support Services"
          description="At Abir Dagher Lactation Consultancy, we understand that
              breastfeeding is a journey, and we're here to support you every
              step of the way. Whether you're a first-time mom or have previous
              experience, our lactation consultants provide personalized
              guidance and practical solutions to help you and your baby thrive.
              Our services include one-on-one consultations, both in-person and
              online, to address any breastfeeding challenges you may face."
          image={
            <Image
              src={lactation_support_img}
              alt="lactation_support_img"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          }
        ></Service>
        <Service
          number="02"
          title="Prenatal Classes and 
Education"
          description=""
          image={
            <Image
              src={prenatal_classes_img}
              alt="prenatal_classes_img"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          }
        ></Service>
        <Service
          number="03"
          title="Postnatal Care"
          description=""
          image={
            <Image
              src={postnatal_care_img}
              alt="postnatal_care_img"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          }
        ></Service>
        <Service
          number="04"
          title="Newborn Basics
Training"
          description=""
          image={
            <Image
              src={newborn_basics_img}
              alt="newborn_basics_img"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          }
        ></Service>
      </div>
      <div className={style.contact_us}>
        <p className="text-black text-[3vw] font-bold">Contact us</p>
        <Image src={contact_us_bg_img} alt="contact_us" />
      </div>

      <footer>
        <div className="relative z-30 px-[8vw] py-[2vw] w-full bg-[#BFE2D2]">
            <p className="text-gray-600 text-[3vw] font-bold">
              Abir DAGHER <br />
              <span className="text-[2vw]">
                IBCLC - Certified Lactation Consultant
              </span>
            </p>
            <br />
            <p className="text-gray-600 text-[2vw] font-bold">
              Totalcare Polyclinic
              <br />
              <span className="text-[1vw]">Mtayleb - Metn - Lebanon</span>
            </p>
            <p className="text-gray-600 text-[2vw] font-bold">
              Online sessions &nbsp;&nbsp; | &nbsp;&nbsp;Home visits
            </p>
            <br />
            <br />
            <a target="blank"
              href="https://wa.me/96170191804"
              className="text-gray-600 text-[2vw]"
            >
              +961 70 19 18 04
            </a>
            <br />
            <a target="blank" href="mailto:abirdagher@gmail.com" className="text-gray-600 text-[2vw]">
              abirdagher@gmail.com
            </a>
            <br/>
            
            <a target="blank" href="https://www.instagram.com/lactivist.lb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-600 text-[2vw]">
              lactivist.lb
            </a>
        </div>
      </footer>
    </section>
  );
}
