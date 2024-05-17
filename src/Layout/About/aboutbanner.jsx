import aboutImg from "../../assets/about.png";
import gsap from "gsap";
import React, { useEffect } from "react";

const aboutData = [
  "Welcome to Quirky Bags - Where Fashion Meets Functionality! At Quirky Bags, we believe that every accessory tells a unique story, and we are here to help you craft yours with style. Established with a passion for exceptional craftsmanship and a love for fashion, our brand is dedicated to offering a curated collection of bags that seamlessly blend elegance with practicality.",
  [
    {
      heading: "Our Story:",
      subDes:
        "Founded 2000, Quirky Bags was born out of a desire to redefine the way people connect with their accessories. We envisioned a space where fashion enthusiasts could discover a diverse range of bags that not only complement their individual style but also cater to their daily needs. From the very beginning, our commitment has been to provide more than just bags; we aim to offer an experience. Each design is carefully curated, reflecting the latest trends while maintaining a timeless appeal. We take pride in our attention to detail, ensuring that every stitch, material, and finish meets the highest standards of quality.",
    },
    {
      heading: "What Sets Us Apart:",
      subDes:
        "Unique Designs: Our bags are a celebration of individuality. We believe in offering designs that stand out, whether through innovative shapes, vibrant colors, or distinctive textures. Customization: Make it yours! We empower our customers to personalize their bags, adding a touch of personality to each piece. Choose your colors, materials, and even add monograms for a truly unique creation. Quality Craftsmanship: We value durability as much as aesthetics. Our bags are crafted with precision, using high-quality materials to ensure longevity and functionality.",
    },
  ],
];
export default function AboutBanner() {
  useEffect(()=>{
     gsap.from(".welcom-about-des" ,{
     opacity: 0,
     y:70,
     duration: 1,
     stagger: 0.3
  })
  gsap.from(".about-img" , {
    opacity:0,
    x: 200,
    duration: 1,
  })
  }, [])
 

  return (
    <div className="py-10 bg-white ">
      <div className="max-w-[1440px] m-auto overflow-hidden">
        <div className="about-container flex  flex-col md:flex-row  gap-20">
          <div className="about-content  w-full md:w-3/5 px-[4%] lg:px-0">
            <p className="text-[0.9rem] md:text-xl py-5 md:py-10 welcom-about-des">{aboutData[0]}</p>
            <div className=" flex flex-col gap-3 md:gap-11">
              {aboutData[1].map((item, index) => {
                const { heading, subDes } = item;
                return (
                  <div key={index}>
                    <h3 className=" text-xl md:text-3xl font-bold pb-2 md:pb-6 welcom-about-des">
                      {heading}
                    </h3>
                    <p className="text-[0.9rem] md:text-xl welcom-about-des">{subDes}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="about-img w-2/5 hidden md:flex max-h-min bg-no-repeat bg-contain "
            style={{backgroundImage: `url(${aboutImg})`}}></div>
        </div>
      </div>
    </div>
  );
}
