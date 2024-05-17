import React, { useEffect } from "react";
import bgImg from "../assets/imagenew.png";
import {gsap , Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function NewsLeter() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".newletter",
        start: "top center",
        end: "bottom",
        // scrub: 1,
      },
    });

    tl.from(".bg-news", {
      opacity: 0,
      duration: 0.5,
      // x: 200,
      ease: Power2.easeIn,
    });
    tl.from(
      ".news-heading",
      {
        y: 300,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      },
      
    );
  }, []);

  return (
    <div className=" py-24  px-[4%] lg:px-0 newletter">
      <div className="flex  flex-col md:flex-row justify-between max-w-[1440px] h-[600px] m-auto bg-[#fff3f3] items-center gap-8 md:gap-0 news-main-container">
        <div className="px-8 py-6 md:py-0 md:px-14 lg:px-20 w-full md:w-1/2 md:overflow-hidden">
          <div className=" overflow-hidden">
            <h4 className="text-xl md:text-2xl font-medium pb-3 text-[#e0544f] news-heading ">
            News Letter
          </h4> 
          </div>
         
          <div className=" overflow-hidden">
          
          <h4 className="text-3xl md:text-5xl font-bold pb-10 news-heading">
            Subscribe to our Newsletter
          </h4>
          </div>
            <div className="news-heading">
               <input
              type="text"
              className="border-solid border-[#00234d] rounded-md px-2 py-3 w-[80%]"
              placeholder="Enter you e-mail"
            />
            <span className="bg-[#fa8c89] px-5 py-[15px]  ml-[-3px] text-sm text-white rounded-lg rounded-l-none ">
              &rarr;
            </span>
            </div>
           
        </div>
        <div
          className=" overflow-hidden w-full  md:w-1/2 bg-no-repeat bg-center h-full bg-cover bg-news"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>
      </div>
    </div>
  );
}
