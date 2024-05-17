import image1 from "../assets/testimg.png";
import image2 from "../assets/image3.png";
import image3 from "../assets/image4.png";
import image4 from "../assets/image5.png";
import image5 from "../assets/image6.png";
import image6 from "../assets/image7.png";
import image7 from "../assets/image8.png";
import image8 from "../assets/image9.png";
import image9 from "../assets/image10.png";
import gsap from "gsap";
import React, { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Texture } from "three";
gsap.registerPlugin(ScrollTrigger);


const tabItem = ["New Arrvals", "Our Favourites", "Bestsellers"];
const cardData = [
  {
    id: 0,
    bgimg: image1,
    heading: "Black Backpack",
    price: "1529",
    discount: "1759",
  },
  {
    id: 2,
    bgimg: image2,
    heading: "Lady Handbag",
    price: "800",
    discount: "900",
  },
  {
    id: 3,
    bgimg: image3,
    heading: "Men Travel Bag",
    price: "523",
    discount: "759",
  },
  {
    id: 4,
    bgimg: image4,
    heading: "Bnike Legend Stripe",
    price: "539",
    discount: "600",
  },
];
export default function BetSeller() {
  useEffect(() => {
    const tl = gsap.timeline({
       scrollTrigger: {
        trigger: ".new-arrival-container",
        start: "top bottom",
        end: "bottom",
        // scrub: 1, 
      },
    });

    tl.from(".tab-items" , {
      autoAlpha: true , 
      y: 100,
      stagger: true,
      duration: 1
      
    })
     tl.from(".tab-cards", {
      opacity: 0,
      y: 300,
      duration: 1,
      stagger: 0.2,
    }).from(".shop-categ" ,{
        y: 20,
        opacity: 0,
        duration: 1,
    }).from(".category-1",{
      opacity:0,
      x: -200,
      duration: 1
    }).from(".category-2" ,{
       opacity: 0,
       x: 200,
       duration: 1
    }, "-=0.5");
  }, []);
  return (
    <div className="new-arrival-container bg-whitepx-[4%] lg:px-0">
      <div className=" main-containers  max-w-[1440px] m-auto">
        <nav className="tab-container">
          <ul className="flex gap-10 justify-center overflow-hidden">
            {tabItem.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`tab-items text-[0.9rem] md:text-[1.2rem] ${
                    index === 0 ? " underline underline-offset-8" : ""
                  }`}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="card-container justify-center flex gap-2  flex-wrap md:flex-nowrap md:gap-1 w-full pt-10 pb-10 md:pt-11 md:pb-20 overflow-hidden">
          {cardData.map((item, index) => {
            const { bgimg, heading, price, discount } = item;
            return (
              <div
                className="tab-cards flex-wrap min-w-[300px] md:min-w-[25%] flex flex-col justify-center items-center"
                key={index}
              >
                <div
                  className="img-wrapper bg-no-repeat bg-center  bg-cover h-[400px] w-full"
                  style={{ backgroundImage: `url(${bgimg})` }}
                >
                </div>
                <div className="content-wraper text-center pt-4">
                  <h4 className=" font-semibold pb-1">{heading}</h4>
                  <p>
                    <span className="pr-4">${price}</span>
                    <span className=" text-red-500 line-through">
                      ${discount}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="category-container flex flex-col justify-center gap-3 pb-20">
          <div className="text-center pb-3">
            <p className="shop-categ">Shop By Category</p>
          </div>
          <div className="category-card-container flex gap-3 flex-col md:flex-row lg:gap-8 justify-between md:h-[500px]">
            <div className="w-full md:w-1/3 bg-[#fff3f3] p-5 category-1">
              <div
                className="content-card-wrapper changbg bg-no-repeat bg-right-bottom h-[300px] md:h-full"
                style={{
                  backgroundImage: `url(${image5})`,
                  backgroundSize: "88%",
                }}
              >
                <p className="text-red-500">New Arrivals</p>
                <h4 className=" text-[1.2rem] font-semibold pb-3">
                  Women Beautiful Handbag
                </h4>
                <p className=" text-[.9rem] underline underline-offset-2 uppercase">
                  Shop Collection
                </p>
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col  gap-3 lg:gap-8 h-[500px] md:h-auto category-2">
              <div className=" flex h-1/2  gap-3 lg:gap-8">
                <div
                  className="w-1/2 bg-[#d9dce9] p-5 backgroun-imgs-size bg-no-repeat bg-right-bottom bgsiz"
                  style={{ backgroundImage: `url(${image6})` }}
                >
                  <div>
                    <p className="text-red-500">New Arrivals</p>
                    <h4 className=" text-[1.2rem] font-semibold pb-3">
                      Bag Bouquet
                    </h4>
                    <p className=" text-[.9rem] underline underline-offset-2 uppercase">
                      Shop Collection
                    </p>
                  </div>
                  <div>{/* <img src={image1} alt="..not found" /> */}</div>
                </div>
                <div
                  className="w-1/2 bg-[#fff3f3] p-5 backgroun-imgs-size2 bg-no-repeat bg-right-bottom bgsiz"
                  style={{ backgroundImage: `url(${image7})` }}
                >
                  <div>{/* <img src={image1} alt="..not found" /> */}</div>
                  <div>
                    <p className="text-red-500">Quality Product</p>
                    <h4 className=" text-[1.2rem] font-semibold pb-3">
                      Leather Collection
                    </h4>
                    <p className=" text-[.9rem] underline underline-offset-2 uppercase">
                      Shop Collection
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex  gap-3 lg:gap-8 h-1/2">
                <div
                  className=" backgroun-imgs-size w-1/2 md:w-1/3 bg-[#e8f0f3] p-5  bg-no-repeat bg-right-bottom bgsiz"
                  style={{ backgroundImage: `url(${image8})` }}
                >
                  <div>
                    <p className="text-red-400">New Arrivals</p>
                    <h4 className=" text-[1.2rem] font-semibold pb-3">
                      Office Carrier
                    </h4>
                    <p className=" text-[.9rem] underline underline-offset-2 uppercase">
                      Shop Collection
                    </p>
                  </div>
                  <div>{/* <img src={image1} alt="..not found" /> */}</div>
                </div>
                <div
                  className=" backgroun-imgs-size2 w-1/2 md:w-2/3 bg-[#eef0ff] p-5 bg-no-repeat bg-right-bottom bgsiz"
                  style={{ backgroundImage: `url(${image9})` }}
                >
                  <div>
                    <p className="text-red-500">New Arrivals</p>
                    <h4 className=" text-[1.2rem] font-semibold pb-3">
                      Travel The World
                    </h4>
                    <p className=" text-[.9rem] underline underline-offset-2 uppercase">
                      Shop Collection
                    </p>
                  </div>
                  <div>{/* <img src={image1} alt="..not found" /> */}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
