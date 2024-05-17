import image from "../../assets/image2.png";
import image5 from "../../assets/image1.png";
import image1 from "../../assets/bblog-1.png";
import image2 from "../../assets/vimg3.png";
import image3 from "../../assets/vimg2.png";
import image4 from "../../assets/vimg1.png";

import gsap from "gsap";
import React, { useEffect } from "react";

const myBlogData = [
  {
    id:0,
    bgImg: image,
    blogDate: "05 Mar 2024",
    blogHeading: "Delivering What Consumers Really Value?"
  },
  {
    id:1,
    bgImg: image1,
    blogDate: "25 Mar 2024",
    blogHeading: "The fairycore trend is a 2022 fashion hit as fairies."
  },
  {
    id:2,
    bgImg: image2,
    blogDate: "20 Feb 2024",
    blogHeading: "TOP 10 most fahionable ladies bag on super sale!"
  },
  {
    id:3,
    bgImg: image3,
    blogDate: "25 Feb 2024",
    blogHeading: " Polish fashion, eco products and the national art seence."
  },
  {
    id:4,
    bgImg: image4,
    blogDate: "02 Jan 2022",
    blogHeading: "Travel in Style: Best Bags for Your Next Adventure"
  },
  {
    id:5,
    bgImg: image,
    blogDate: "30 Sep 2022",
    blogHeading: " Bag Diaries: Tales from the World of Fashion Accessories"
  },
  {
    id:6,
    bgImg: image5,
    blogDate: "30 July 2022",
    blogHeading: "In the Bag: Navigating the World of Handbag Essentials"
  },
]
export default function BlogCards() {
  useEffect(()=>{
    gsap.from(".blog-containr div" ,{
    opacity: 0,
    y:100,
    // skewX: -45,
    duration:1,
    stagger: 0.2
  })
  })
  
  return (
    <div>
      <div className=" flex blog-containr  justify-center flex-wrap max-w-[1440px] m-auto py-10 gap-14 px-[4%] lg:px-0 overflow-hidden">
     {myBlogData.map((item , index )=>{
      return (
         <div className="w-full md:w-[30%]" key={index}>
          <div
            className="h-[350px] bg-cover rounded-2xl bg-center"
            style={{ backgroundImage: `url(${item.bgImg})` }}
          ></div>
          <p className="text-[0.9rem] text-[#918f8f] pb-1 pt-4">{item.blogDate}</p>
          <h4 className="font-semibold text-xl pb-4 md:w-3/4">
            {item.blogHeading}
          </h4>
          <p className=" text-[#918f8f] uppercase underline text-[0.9rem]">
            Read More
          </p>
        </div>
      )
     })}
     
        
        {/* <div className="w-full md:w-[30%]">
          <div
            className="h-[350px] bg-cover rounded-2xl bg-center"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <p className="text-[0.9rem] text-[#918f8f] pb-1 pt-4">30 july 2022</p>
          <h4 className="font-semibold text-xl pb-4 md:w-3/4">
            The faircore trend is a 2022 fashion hit as fairies.
          </h4>
          <p className=" text-[#918f8f] uppercase underline text-[0.9rem]">
            Read More
          </p>
        </div> */}
      </div>
    </div>
  );
}
