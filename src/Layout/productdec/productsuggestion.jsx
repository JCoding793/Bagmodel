import React, {useEffect} from "react";
import image1 from "../../assets/testimg.png";
import image2 from "../../assets/image3.png";
import image3 from "../../assets/image4.png";
import image4 from "../../assets/image5.png";
import gsap  from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
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
export default function ProductSuggestion() {
  useEffect(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".sub-ref-container",
          start: "top bottom",
          end: "bottom",
          // scrub: 1,
        },
      });
      tl.from(".sub-ref-container" ,{
          opacity: 0, 
          y:100,
          duration:1,
      },)
      tl.from(".tab-cards", {
        opacity: 0,
        y: 300,
        // skewX: -30,
        duration: 1,
        stagger: 0.2,
      })
  }, []);
  return (
    <div className="bg-white px[4%]">
      <div className="max-w-[1440px] m-auto py-10 px-[4%] lg:px-0">
        <h1 className="text-3xl lg:text-5xl font-bold pb-6 sub-ref-container text-center md:text-left" >You may aslo like</h1>
        <div className="card-container justify-center flex   flex-wrap md:flex-nowrap gap-12 w-full pt-10 pb-10 md:pt-11 md:pb-20 overflow-hidden">
          {cardData.map((item, index) => {
            const { bgimg, heading, price, discount } = item;
            return (
              <div
                className="tab-cards flex-wrap min-w-[300px] md:min-w-[21%] flex flex-col justify-center items-center"
                key={index}
              >
                <div
                  className="img-wrapper bg-no-repeat bg-center  bg-cover h-[400px] w-full rounded-2xl"
                  style={{ backgroundImage: `url(${bgimg})` }}
                ></div>
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
      </div>
    </div>
  );
}
