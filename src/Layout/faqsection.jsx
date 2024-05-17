import React, { useEffect, useState } from "react";
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import Faqfunionality from "./faqfunionality";
gsap.registerPlugin(ScrollTrigger);
const myFaqData = [
  {
    id: 1,
    question: "Frequently Asked Question",
    answer: "All your questions about Quirky Bags answered",
  },
  {
    id: 2,
    question: "What materials are your bags made from?",
    answer:
      "Our bags are crafted from high-quality materials such as genuine leather, durable canvas, and eco-friendly fabrics to ensure both style and durability.",
  },
  {
    id: 3,
    question: "Do you offer different sizes and styles of bags?",
    answer:
      "Yes, we offer a wide range of sizes and styles to cater to diverse needs and preferences. Whether you need a spacious tote for work or a compact crossbody for everyday use, we have something for everyone.",
  },
  {
    id: 4,
    question: "Are your bags water-resistant?",
    answer:
      "Many of our bags feature water-resistant coatings or materials to protect your belongings from light rain or splashes. However, we recommend taking appropriate precautions during heavy rainfall.",
  },
  {
    id: 5,
    question: "Do you ship internationally?",
    answer:
      "Yes, we offer international shipping to several countries. Please check our shipping policy or contact our customer service team for more information on international delivery options and rates.",
  },
  {
    id: 6,
    question: "What is your return policy?",
    answer:
      "We want you to be completely satisfied with your purchase. If for any reason you are not happy with your order, we offer a hassle-free return policy within [X days] of purchase. Please refer to our returns page for detailed instructions.",
  },
  {
    id: 7,
    question: "Can I track my order?",
    answer:
      "Yes, you will receive a tracking number via email once your order has been shipped. You can use this tracking number to monitor the status and estimated delivery date of your package.",
  },
  {
    id: 8,
    question: "How should I care for my bag to ensure longevity?",
    answer:
      "We recommend following the care instructions provided with your bag to maintain its quality and appearance. Generally, you can spot-clean most bags with a damp cloth and mild detergent, and store them in a cool, dry place when not in use.",
  },
];
export default function FaqSection() {
  useEffect(() => {
     const tl = gsap.timeline({
       scrollTrigger: {
          trigger: ".faq-section",
          start: "top bottom",
          end: "bottom",
          // scrub: 1,
        }
     });
    tl.from(".faq-heading", {
        opacity:0,
        y:200,
        duration: 1,
        stagger: 0.2
      })
    tl.from(".faqs" ,{
        opacity: 0,
        y:200,
        duration:1.2,
      })
  }, []);
  return (
    <div className="px-[4%] lg:px-0 faq-section">
      <div className=" max-w-[1440px] m-auto ">
        <div className="flex items-center flex-col pb-4 pt-6 overflow-hidden text-center">
          <h1 className="text-3xl md:text-5xl  font-bold pb-2  faq-heading">
            Freuently Asked Question
          </h1>
          <p className=" text-[1rem] md:text-xl faq-heading">
            All your questions about Axion answered
          </p>
        </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 faq-layout overflow-hidden my-3 md:my-10 " >
            {myFaqData.map((item, index) => {
              return (
                <Faqfunionality
                  key={index}
                  pheading={item.question}
                  panswer={item.answer}
                />
              );
            })}
          </div>
         
        <div className="text-center my-12 overflow-hidden">
          <button className="px-4 py-2  text-white bg-[#f76b6a] rounded-lg faqs">
            See More
          </button>
        </div>
      </div>
    </div>
  );
}
