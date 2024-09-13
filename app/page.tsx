"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import style from "@/app/styles/header.module.css";
import bg from "./assets/header-bg.png";
import logo from "./assets/lactivist-logo.png";
import drImage from "./assets/smiling-doctor-with-strethoscope.png";
import lactation_support_img from "./assets/Lactation_Support_img.png";
import prenatal_classes_img from "./assets/prenatal_classes_img.png";
import postnatal_care_img from "./assets/postnatal_care_img.png";
import newborn_basics_img from "./assets/newborn_basics_img.png";
import calendar_icon from "./assets/Calendar_Icon.png";
import phone_icon from "./assets/phone_icon.png";
import email_icon from "./assets/email_icon.png";
import location_icon from "./assets/location_icon.png";
import whatsapp_icon from "./assets/whatsapp_icon.png";
import email_icon2 from "./assets/envelope_icon.png";
import instagram_icon from "./assets/instagram_icon.png";
import qr_img from "./assets/QR.png";
import Aos from "aos";
import "aos/dist/aos.css";
import Service from "./service";
import type { StaticImageData } from "next/image";
import TestimonyList from "./testimonials";
import testimony_img_1 from "./assets/testimony_img_1.png";

const testimonials = [
  {
    id: 1,
    title: "Get high-quality service with us",
    text: "Thanks to Abir, I received invaluable support and guidance on my breastfeeding journey. Her Expertise and compassion made all the difference ensuring a successful and fulfilling  experience for both me and my baby.",
    image: testimony_img_1,
  },
 
];

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  // Array of services
  const services = [
    {
      number: "01",
      title: "Lactation and Breastfeeding Support Services",
      description: `At Abir Dagher Lactation Consultancy, we understand that breastfeeding is a journey, 
        and we're here to support you every step of the way. Whether you're a first-time mom or have previous 
        experience, our lactation consultants provide personalized guidance and practical solutions to help you 
        and your baby thrive.`,
      imageSrc: lactation_support_img,
    },
    {
      number: "02",
      title: "Prenatal Classes and Education",
      description: `Prepare for the beautiful journey ahead with our warm and welcoming prenatal classes. 
        We’ll guide you through breastfeeding basics, latch techniques, and what to expect in those precious 
        first days.`,
      imageSrc: prenatal_classes_img,
    },
    {
      number: "03",
      title: "Postnatal Care",
      description: `The postpartum period is a special time, and we're here to support you and your baby 
        with love and care. Our home visits and personalized plans ensure a smooth transition, helping you 
        bond and thrive together.`,
      imageSrc: postnatal_care_img,
    },
    {
      number: "04",
      title: "Newborn Basics Training",
      description: `Navigating life with a newborn can be overwhelming, but we're here to make it easier. 
        Our friendly, hands-on training covers everything from diapering to understanding your baby’s cues, 
        helping you feel more confident and prepared.`,
      imageSrc: newborn_basics_img,
    },
  ];

  const renderService = (
    number: string,
    title: string,
    description: string,
    imageSrc: StaticImageData,
    index: number
  ) => {
    return (
      <div data-aos="fade-right" data-aos-delay={150 * (index + 1)}>
        <Service
          number={number}
          title={title}
          description={description}
          image={
            <Image
              src={imageSrc}
              alt={`${title}_img`}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          }
          isExpanded={expandedService === index}
          onToggle={() => toggleService(index)}
        />
      </div>
    );
  };

  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section>
      <div className="relative z-30 px-[4vw] py-[2vw] text-center w-full bg-[#BFE2D2]" id="NavBar">
        <Image
          alt="logo"
          src={logo}
          className="w-[10vw] absolute top-[1vw]"
          data-aos="fade-right"
          data-aos-delay="300"
        />
        <div className="flex flex-row align-middle justify-center text-[1.6vw] gap-10 text-[#5C5C5C]">
          <p><a href="#NavBar">Home</a></p>
          <p>
            <a href="#About_us">About us</a>
          </p>
          <p>
            <a href="#Services">Services</a>
          </p>
          <p>
            <a href="#Testimonials">Testimonials</a>
          </p>
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
          <button
            className="bg-[#BFE2D2] hover:bg-[#e2fbf0] text-black text-[1.5vw] font-bold py-4 px-[4vw] rounded-xl transition duration-300 ease-in-out"
            onClick={() => {
              const element = document.getElementById("Contact-us");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
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

      <div className={style.about_us} id="About_us">
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
        <p
          className="text-black text-[3vw] font-bold"
          data-aos="fade-rigth "
          data-aos-duration="1000"
        >
          Inside the Clinic
        </p>
        <p
          className="text-black text-[1.3vw] font-light text-start"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          A Peek into the journey of Happy Moms and Healthy Babies.
        </p>
        <br />
        <Image
          src={drImage}
          alt="Smiling Image"
          className="rounded-xl w-[100vw]"
          // data-aos="fade-down"
          data-aos="flip-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        />
      </div>
      <div className={style.services} id="Services">
        <p
          className="text-black text-[3vw] font-bold"
          data-aos="fade-rigth "
          data-aos-delay="100"
        >
          Services
        </p>
        <p
          className="text-black text-[1.3vw] font-light text-start"
          data-aos="fade-rigth "
          data-aos-delay="100"
        >
          Tailored Services for your Unique Journey. Supporting Moms and Babies
          every step of the way.
        </p>
        <br />

        {/* Dynamically render services from the array */}
        {services.map((service, index) =>
          renderService(
            service.number,
            service.title,
            service.description,
            service.imageSrc,
            index
          )
        )}
      </div>
      <div className={style.trapezoid_parent_container}>
        <div
          className={style.trapezoid1}
          data-aos="flip-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <div className={style.trapezoid_child_div}>
            <Image
              src={calendar_icon}
              alt="calendar_icon"
              className={style.icon_contact_us}
            />
            <h1 className="py-[1vw] text-[1.5vw] font-bold	"> OPENING HOURS </h1>
            <p className="text-[1.2vw]">Mon-Fri</p>
            <p className="text-[1.2vw]">9:00am-5:00pm</p>
          </div>
        </div>
        <div
          className={style.trapezoid2}
          data-aos="flip-left"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <div className={style.trapezoid_child_div}>
            <a href="tel: +961 70 19 18 04">
              <Image
                src={phone_icon}
                alt="phone_icon"
                className={style.icon_contact_us}
              />
            </a>
            <a href="tel: +961 70 19 18 04">
              <h1 className="py-[1vw] text-[1.5vw] font-bold	">
                +961 70 19 18 04
              </h1>
            </a>

            <a href="tel: +961 70 19 18 04">
              <p className="text-[1.2vw]">We will be happy to </p>
            </a>
            <a href="tel: +961 70 19 18 04">
              <p className="text-[1.2vw]">answer your calls.</p>
            </a>
          </div>
        </div>
        <div
          className={style.trapezoid3}
          data-aos="flip-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <div className={style.trapezoid_child_div}>
            <a target="blank" href="mailto:abirdagher@gmail.com">
              <Image
                src={email_icon}
                alt="email_icon"
                className={style.icon_contact_us}
              />
            </a>
            <a target="blank" href="mailto:abirdagher@gmail.com">
              <h1 className="py-[1vw] text-[1.5vw] font-bold	"> Email </h1>
            </a>
            <a target="blank" href="mailto:abirdagher@gmail.com">
              <p className="text-[1.2vw]">abirdagher@gmail.com</p>
            </a>
          </div>
        </div>
        <div
          className={style.trapezoid4}
          data-aos="flip-left"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <div className={style.trapezoid_child_div}>
            <a target="blank" href="https://maps.app.goo.gl/eAJSG3feFJH12mmk9">
              <Image
                src={location_icon}
                alt="location_icon"
                className={style.icon_contact_us}
              />
            </a>

            <a target="blank" href="https://maps.app.goo.gl/eAJSG3feFJH12mmk9">
              <h1 className="py-[1vw] text-[1.5vw] font-bold	"> Location </h1>
            </a>
            <a target="blank" href="https://maps.app.goo.gl/eAJSG3feFJH12mmk9">
              <p className="text-[1.2vw]">Totalcare Polyclinic</p>
            </a>
            <a target="blank" href="https://maps.app.goo.gl/eAJSG3feFJH12mmk9">
              <p className="text-[1.2vw]">Mtayleb-Metn-Lebanon</p>
            </a>
          </div>
        </div>
      </div>
      <div
        className={style.testimonials}
        id="Testimonials"
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-duration="600"
      >
        <TestimonyList testimonials={testimonials} />
      </div>

      <footer>
        <div className="relative z-30 px-[8vw] py-[2vw] w-full bg-[#BFE2D2] flex justify-between">
          <div id="Contact-us">
            <p className="text-gray-600 text-[3vw] font-bold">
              Abir DAGHER <br />
            </p>
            <p className="text-gray-600 text-[2vw] font-bold">
              IBCLC - Certified Lactation Consultant
            </p>

            <br />
            <p className="text-gray-600 text-[2vw] font-bold">
              Totalcare Polyclinic
              <br />
            </p>
            <p className="text-gray-600 text-[1.5vw] font-bold">
              Mtayleb - Metn - Lebanon
            </p>
            <br />
            <p className="text-gray-600 text-[2vw] font-bold">
              Online sessions &nbsp;&nbsp; | &nbsp;&nbsp;Home visits
            </p>
            <br />
            <br />
            <div className="flex items-center text-gray-600 text-[2vw]">
              <a target="blank" href="https://wa.me/96170191804">
                <Image
                  src={whatsapp_icon}
                  alt="whatsapp_icon"
                  className={style.icon_footer}
                />
              </a>
              <a target="blank" href="https://wa.me/96170191804">
                <p className="ml-[1vw]">+961 70 19 18 04</p>
              </a>
            </div>
            <br />
            <div className="flex items-center text-gray-600 text-[2vw]">
              <a
                target="blank"
                href="mailto:abirdagher@gmail.com"
                className="text-gray-600 text-[2vw]"
              >
                <Image
                  src={email_icon2}
                  alt="email_icon"
                  className={style.icon_footer}
                />
              </a>
              <a
                target="blank"
                href="mailto:abirdagher@gmail.com"
                className="text-gray-600 text-[2vw]"
              >
                <p className="ml-[1vw]">abirdagher@gmail.com</p>
              </a>
            </div>
            <br />
            <div className="flex items-center text-gray-600 text-[2vw]">
              <a
                target="blank"
                href="https://www.instagram.com/lactivist.lb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              >
                <Image
                  src={instagram_icon}
                  alt="instagram_icon"
                  className={style.icon_footer}
                />
              </a>
              <a
                target="blank"
                href="https://www.instagram.com/lactivist.lb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              >
                <p className="ml-[1vw]">lactivist.lb</p>
              </a>
            </div>
          </div>
          <div className="flex">
            <Image
              src={qr_img}
              alt="QR Code"
              className="w-[25vw] h-auto object-contain"
            />
          </div>
        </div>
      </footer>
    </section>
  );
}