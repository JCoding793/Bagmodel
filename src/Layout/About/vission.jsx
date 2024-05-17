import React, { useEffect, useRef } from "react";
import Vimg1 from "../../assets/vimg1.png";
import Vimg2 from "../../assets/vimg2.png";
import Vimg3 from "../../assets/vimg3.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const visionData = [
  {
    bg: "rgba(83,126,154,0.8)",
    bgimg: Vimg1,
    heading: "Our Mission",
    desc: "At Quirky bags, our mission is to inspire confidence and self-expression through our thoughtfully designed bags. We strive to be more than just a brand; we want to be a part of your journey, accompanying you through every adventure and milestone.",
  },
  {
    bg: "rgba(181,140,84,0.8)",
    bgimg: Vimg2,
    heading: "Our Vision",
    desc: "At Quirky bags, we envision a world where fashion is not just a trend but a reflection of individuality. Our vision is to empower every person to carry a piece of their personality, dreams, and aspirations with them. ",
  },
  {
    bg: "rgba(57,145,151,0.8)",
    bgimg:Vimg3,
    heading:"Our Values",
    desc: "Our values are woven into every stitch, reflecting our commitment to excellence and authenticity. We prioritize Quality, ensuring that each bag is a testament to meticulous craftsmanship and durability. ",
  },
];
export default function VissionMision() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".vissionm",
        start: "top bottom",
        end: "bottom",
        scrub: false,
        // markers: true,
      },
    });

    tl.from(".vis-heading", {
      opacity: 0,
      y: 80,
      duration:1
    });
    tl.from(".vis-para", {
      y: 200,
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <div className="py-10 bg-white">
      <div className=" flex self-center flex-col md:flex-row justify-center vissionm overflow-hidden">
        {visionData.map((item, index) => {
          return (
            
            <div
              className="w-full md:w-1/3 text-center h-[280px] md:h-[400px] flex justify-center items-center flex-col text-white bg-center bg-no-repeat bg-cover"
              key={index}
              style={{
                backgroundImage: `linear-gradient(${item.bg},${item.bg}), url(${item.bgimg})`
              }}
            >
              
                <h1 className="text-[1rem] md:text-2xl font-semibold w-[60%] text-white vis-heading overflow-hidden">
                {item.heading}
              </h1>
              <p className="text-[0.8rem] md:text-[1.2rem] w-[60%] text-white vis-para overflow-hidden">
                {item.desc}
              </p>
              </div>
              
          );
        })}
      </div>
    </div>
  );
}
