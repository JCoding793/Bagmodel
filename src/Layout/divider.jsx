import React, { useEffect, useRef } from "react";
import bgimg1 from "../assets/image1.png";
import bgimg2 from "../assets/imagenew.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const dividerData = [
  {
    bg: "#e5e5e5",
    heading: "Mini Backpack",
    discount: "25% off on all bags",
    img: bgimg1,
  },
  {
    bg: "#f3d7d6",
    heading: "New Year Sell",
    discount: "25% off on all bags",
    img: bgimg2,
  },
];
export default function Divider() {
  const divRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".divider-container",
        start: "-=700",
        end: "bottom",
        // scrub: 1,
      },
    });
    tl.from(".offer-container", {
      opacity: 0,
      y: 500,
      duration:1.5,
    });
    tl.from(".divider-primary-h", {
      autoAlpha: true,
      y: 100,
      duration: 1,
    }, "-=0.5");
    tl.from(
      ".img-wrapper",
      {
        autoAlpha: true,
        ease: "ease",
      },
      "-=0.5"
    );
  }, []);
  return (
    <div
      ref={(el) => divRef}
      className="  bg-white py-10 md:py-20 px-[4%] lg:px-0 overflow-hidden"
    >
      <div className=" flex  flex-col lg:flex-row  gap-10 md:gap-20 max-w-[1440px] m-auto divider-container">
        {dividerData.map((item, index) => {
          return (
            <div
              className="offer-container p-6 w-full lg:w-1/2 flex  h-[200px] md:h-[300px] items-center justify-center"
              key={index}
              style={{ backgroundColor: `${item.bg}` }}
            >
              <div className="content-wraper w-1/2 overflow-hidden">
                <p className="divider-primary-h text-[1rem] md:text-xl pb-2 md:pb-4">
                  {item.heading}
                </p>
                <h3 className="divider-primary-h text-[1.3rem] md:text-3xl font-bold">
                  {item.discount}
                </h3>
              </div>
              <div
                className="img-wrapper w-1/2 bg-no-repeat bg-cover h-full bg-center"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
