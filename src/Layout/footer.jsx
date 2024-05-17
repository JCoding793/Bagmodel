import React,{useEffect} from "react";
import footerLogo from "../assets/newlogo.png";
import {gsap , Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// #fff3f3
export default function Footer() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
         trigger: ".footer-section",
         start: "top bottom",
         end: "bottom",
         // scrub: 1, 
       }
    });
   
   tl.from(".footer-list li", {
       opacity:0,
       y:20,
       duration: 1.5,
       stagger: 0.2
     })
  }, []);
  return (
    <div>
      <div className="bg-[#fbf3f0] pb-5 px-[4%] lg:px-0 footer-section">
        <div className="flex  flex-wrap justify-between max-w-[1440px] py-20 m-auto gap-8 md:gap-5 ">
          <ul className=" flex flex-col gap-y-2 footer-list">
            <li className=" font-semibold pb-3">About</li>
            <li>About us</li>
            <li>Our magazine</li>
            <li>Team Work</li>
            
          </ul>
          <ul className=" flex flex-col gap-y-2 footer-list">
            <li className="font-semibold pb-3">Shopping</li>
            <li>Brands Catalog</li>
            <li>Discount Codes</li>
            <li>Bag Brands</li>
            
          </ul>
          <ul className=" flex flex-col gap-y-2 footer-list">
            <li className="font-semibold pb-3">Help</li>
            <li>Privacy Policy</li>
            <li>Our Group</li>
            <li>Work with us</li>
          </ul>
          <div className="footerlogo">
           <img src={footerLogo} alt="logo"  className="pb-1 w-[50%]"/> 
            <p className="text-xl pb-6">Stay up to date with all the news</p>
            <div className=" flex justify-centera items-center">
              <input
              type="text"
              className="bg-transparent border border-slate-400  rounded-lg px-2 py-3 w-[70%] md:w-full"
              placeholder="Your E-mail"
            />
            <span className=" w-16  md:w-24 text-center text-[0.8rem] md:text-[1rem] bg-[#444450] py-[15px] text-white rounded-lg rounded-l-none translate-x-[-20px]">Sing Up</span>
            </div>
           
            {/* <div className="flex gap-5 pt-5">
              <img src="" alt="twiter"  />
              <img src="" alt="facebook"  />
              <img src="" alt="instagram"  />
              <img src="" alt="tiktock"  />
              <img src="" alt="youtube"  />
            </div> */}
          </div>
        </div>
        <div className="border-t border-slate-500">
          <div className="flex justify-between max-w-[1440px] m-auto pt-5 gap-3">
            <p>Terms of Use | Privacy Policy</p>
          <span>Copyright © 2022 BranStr.com.</span>
          </div>
          
        </div>
      </div>
    </div>
  );
}
