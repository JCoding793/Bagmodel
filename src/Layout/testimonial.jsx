import React from "react";
import testImg from "../assets/testimg.png";
export default function Testimonial() {
  return (
    <div className="testimonial-container pt-5 pb-20">
      <div className="flex justify-between max-w-[1440px] m-auto h-[500px]">
        <div
          className="w-1/3 bg-no-repeat bg-cover "
          style={{ backgroundImage: `url(${testImg})` }}
        ></div>
        <div className="w-2/3 flex flex-col justify-center">
          <div className="pl-10 pb-6">
            <p className="text-muted">Perfect For gifting</p>
            <p className="text-3xl font-semibold">You can Personalise it</p>
          </div>
          <div className="flex gap-3 card-slider-main-contianer p-3 relative left-[-50px] bg-white">
            <div className="card-slider-container">
              <div className="card-slider">
                <img className=" w-[250] h-[300px] " src={testImg} alt="" />
              </div>
              <div className="card-content">
                <p>Personalised Kawaii Backpack</p>
                <p className="text-[12px] font-medium">
                  Rs. 4, 424.00{" "}
                  <sapn className=" text-[12px] text-[#b3b2b2] line-through">
                    Rs. 5.5899.00
                  </sapn>
                </p>
              </div>
            </div>{" "}
            <div className="card-slider-container">
              <div className="card-slider">
                <img className=" w-[250] h-[300px] " src={testImg} alt="" />
              </div>
              <div className="card-content">
                <p>Personalised Kawaii Backpack</p>
                <p className="text-[12px] font-medium">
                  Rs. 4, 424.00{" "}
                  <sapn className=" text-[12px] text-[#b3b2b2] line-through">
                    Rs. 5.5899.00
                  </sapn>
                </p>
              </div>
            </div>{" "}
            <div className="card-slider-container">
              <div className="card-slider">
                <img className=" w-[250] h-[300px] " src={testImg} alt="" />
              </div>
              <div className="card-content">
                <p>Personalised Kawaii Backpack</p>
                <p className="text-[12px] font-medium">
                  Rs. 4, 424.00{" "}
                  <sapn className=" text-[12px] text-[#b3b2b2] line-through">
                    Rs. 5.5899.00
                  </sapn>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
