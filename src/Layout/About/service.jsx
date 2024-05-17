import React, { useEffect } from "react";
import gsap from "gsap";
import img1 from "../../assets/bsett.png"
import img2 from "../../assets/bmodi.png"
import img3 from "../../assets/bmang.png"
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const servcieData = [
  "Services we provide to our valued customers",
  [
    {
      heading: "Convenient Service",
      subHeading:
        "Through True Rich Attended does no end his mother since real had half every him end it his mother",
        img:img1
    },
    {
      heading: "Expert Mechanics",
      subHeading:
        "Through True Rich Attended does no end his mother since real had half every him end it his mother",
        img:img2

    },
    {
      heading: "Transparnet pricing",
      subHeading:
        "Through True Rich Attended does no end his mother since real had half every him end it his mother",
        img: img3

    },
  ],
];

export default function AboutService() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".service-container",
        start: "top bottom",
        end: "bottom",
        // scrub: 1,
      },
    });

    tl.from(".service-heading", {
      opacity: 0,
      y: 300,
      duration: 1,
    });
    tl.from(
      ".serv-card",
      {
        opacity: 0,
        y: 300,
        // skewX: -30,
        duration: 1,
        stagger: 0.2,
      }
    );
    // tl.from(".service-p",{
    //   opacity:0,
    //   y:60,
    //   duration:1,
    // })
  });
  return (
    <div className="bg-white service-container">
      <div className="service-container text-center max-w-[1440px] m-auto py-10 overflow-hidden px-[4%] lg:px-0">
        <div className="overflow-hidden">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold pb-10 md:pb-20 md:w-2/3 text-center m-auto service-heading ">
            {servcieData[0]}
          </h1>
        </div>
        <div className="service-category flex gap-10 md:gap-20 flex-col md:flex-row ">
          {servcieData[1].map((item, index) => {
            return (
              <div
                className="flex flex-col items-center justify-center w-full md:w-1/3 serv-card"
                key={index}
              >
                <img
                  className="h-[60px] w-[60px] md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px] rounded-full border"
                  src={item.img}
                  alt="..not"
                />
                <h4 className=" font-semibold text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] py-2 md:py-4 service-p">
                  {item.heading}
                </h4>
                <p className=" md:text-[0.8rem] lg:text-[1.1rem] service-p">{item.subHeading}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
