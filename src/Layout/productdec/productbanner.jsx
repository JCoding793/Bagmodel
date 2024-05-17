import bgImg from "../../assets/image5.png";
import React, { useEffect } from "react";
import gsap from "gsap/";
import payPal from "../../assets/paypa.png";
import paytm from "../../assets/ptm.png";
import gPay from "../../assets/gpya.png";
import aPay from "../../assets/apay.png";
import visa from "../../assets/visa.png";
import Facebook from "../../assets/bface.png";
import Instagram from "../../assets/binsta.png";
import Twiter from "../../assets/btwi.png";
import Youtube from "../../assets/byout.png";
import ProductModel from "../productModel";
export default function ProductBanner() {
  // useEffect(() => {
  //   gsap.from(".produt-bg", {
  //     opacity: 0,
  //     y: 100,
  //     duration: 1,
  //   });
  //   gsap.from(".banner-c", {
  //     opacity: 0,
  //     y: 60,
  //     duration: 0.5,
  //     stagger: 0.1,
  //   });
  // }, []);
  return (
    <div className="bg-white ">
      <div className="max-w-[1440px] m-auto  pt-14 pb-5 md:pt-20 md:pb-10">
        <div className="produc-banner flex flex-col md:flex-row gap-20 px-[4%] lg:px-0">
          <div
            className="w-full md:w-4/6 h-[800px] bg-center bg-cover bg-no-repeat rounded-2xl produt-bg"
           
          > 
          {/* sstyle={{ backgroundImage: `url(${bgImg})` } */}
          <ProductModel />
          </div>
          <div className="w-full md:w-2/6">
            <span className=" px-3 py-2 md:px-5 md:py-2 text-[0.9rem] md:text-[1rem] bg-[#00234d]  text-white rounded-lg text-center banner-c">
              In Stock
            </span>
            <h1 className="text-3xl lg:text-5xl font-semibold py-5 banner-c">
              Accesories Lather bag
            </h1>
            <span className="pb-2 banner-c text-[0.9rem] md:text-[1rem]">
              * * * * * (22)
            </span>
            <div className="flex gap-4 pb-5 items-baseline banner-c">
              <span className="text-2xl text-semibold text-[1.3rem] lg:text-[1.5rem]">
                $ 24.00{" "}
              </span>
              <span className=" line-through text-slate-300 text-[1rem] lg:text-[1.2rem]">
                $32.00
              </span>
            </div>
            <p className="font-semibold pb-3 banner-c">SKU: 401</p>
            <p className="font-semibold pb-5 banner-c ">Vendor: leather</p>
            <p className="font-semibold banner-c">Color</p>
            <div className=" flex gap-1 first-line:md:gap-6 pb-4 banner-c">
              <div className=" p-[13px] md:p-[20px] rounded-full bg-[#000]"></div>
              <div className=" p-[13px] md:p-[20px] rounded-full bg-[#4ebeda]"></div>
              <div className=" p-[13px] md:p-[20px] rounded-full bg-[#80b93f]"></div>
              <div className=" p-[13px] md:p-[20px] rounded-full bg-[#d86464]"></div>
              <div className=" p-[13px] md:p-[20px] rounded-full bg-[#41d69d]"></div>
              <div className=" p-[13px] md:p-[20px] rounded-full bg-[#ce9350]"></div>
            </div>
            <div className="flex w-36 items-center justify-center py-5 banner-c">
              <p className=" border px-3 text-2xl">-</p>
              <p className=" border  px-4 py-[2px] text-xl flex-grow text-center">
                2
              </p>
              <p className="border px-3 text-2xl">+</p>
            </div>
            <div className="button-container ">
              <div className=" uppercase py-3 text-center bg-black text-white rounded-lg mb-3 banner-c">
                Add To Cart
              </div>
              <div className=" uppercase py-3 text-center bg-[#00234d]  text-white rounded-lg banner-c">
                Buy It Now
              </div>
            </div>
            <div className="py-5 banner-c">
              <p className="pb-3 md:pb-5 font-semibold">
                Guaranteed safe checkout:
              </p>
              <div className="flex gap-6">
                <img
                  src={paytm}
                  alt=".."
                  className=" md:h-10 md:w-16  object-contain"
                />
                <img
                  src={payPal}
                  alt=".."
                  className=" md:h-10 md:w-16  object-contain"
                />
                <img
                  src={gPay}
                  alt=".."
                  className=" md:h-10 md:w-16  object-contain"
                />
                <img
                  src={aPay}
                  alt=".."
                  className="md:h-10 md:w-16 object-contain"
                />
                <img
                  src={visa}
                  alt=".."
                  className="md:h-10 md:w-16 object-contain "
                />
              </div>
            </div>
            <div>
              <p className="font-semibold ">Share:</p>
              <div className="flex gap-6">
                <img
                  src={Facebook}
                  alt=".."
                  className="  object-contain h-8 w-8  "
                />
                <img
                  src={Instagram}
                  alt=".."
                  className=" object-contain h-8 w-8"
                />
                <img
                  src={Twiter}
                  alt=".."
                  className=" object-contain h-8 w-8"
                />
                <img
                  src={Youtube}
                  alt=".."
                  className=" object-contain h-8 w-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
