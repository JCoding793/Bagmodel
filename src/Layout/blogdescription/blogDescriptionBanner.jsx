import React from "react";
import blogBg from "../../assets/image5.png";
import BlogDes from "../../assets/blogdes.png";
import Facebook from "../../assets/bface.png";
import Instagram from "../../assets/binsta.png";
import Twiter from "../../assets/btwi.png";
import Youtube from "../../assets/byout.png";
export default function BlogDescriptionBanner() {
  return (
    <div>
      <div className="blog-des-container">
        <div className="main-blog-container  flex justify-between gap-10 max-w-[1440px] m-auto py-20">
          <div className="w-3/4">
            <div
              className="bg-cover bg-center h-[700px]  rounded-xl"
              style={{ backgroundImage: `url(${blogBg})` }}
            >
              {" "}
            </div>
            <div className="pt-10 pb-5">
              <h1 className="font-bold text-5xl pb-5">
                Delivering what consumers really value ?
              </h1>

              <div className="flex gap-5">
                <p>Lara Joe</p>
                <p>Comments</p>
                <p>Funiture</p>
              </div>
            </div>
            <div>
              <p className="text-[1.1rem] pb-5">
                In today's dynamic and competitive marketplace, understanding
                and delivering what consumers truly value is paramount for
                business success. Companies that prioritize a customer-centric
                approach not only stay relevant but also build stronger
                relationships with their target audience. By actively listening
                to customer feedback, analyzing market trends, and adapting
                their offerings accordingly, these businesses can meet the
                evolving needs and preferences of consumers.
              </p>
              <p className="text-[1.1rem] pb-5">
                From developing clear value propositions to embracing innovation
                and sustainability, the key lies in aligning every aspect of the
                business with the genuine desires and expectations of customers.
                Through continuous improvement and a commitment to delivering
                exceptional value, companies can establish themselves as trusted
                brands and drive long-term growth in the market.
              </p>
              <div className="bg-[#00234d] border-l-4 border-red-500 text-white py-16 px-14 my-8">
                <p className="text-white text-3xl pb-3">
                  Worods can Bbe like x-rays, if you use them properly-they'll
                  go through anything. you read and you're pierced.
                </p>
                <p className="text-white text-xl">-Aldous Huxley</p>
              </div>
              <div>
                <h1 className=" font-semibold text-2xl pb-3">
                 
                  A Perfect Product for you
                </h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the radable content of a page looking atits layous. the
                  POint of using lorem ispum is that it has a more-or-less
                  normal distrbu letters as opposed to using content here
                  content here, making it like readable English. Many desktop
                  publishing packages and web page editors.{" "}
                </p>
              </div>
              <div className="py-10">
                <h1 className="text-4xl">Comments</h1>
                <div className="flex gap-4 pt-8">
                  <img src={blogBg} alt="" className="h-14 w-14 rounded-full" />
                  <div>
                    <p className="font-semibold text-[1.1rem]">
                      Rlapha Edwards{" "}
                    </p>
                    <p className="text-sm pb-2">30 December, 2022</p>
                    <p className="font-medium">
                      The seconds Bag is a corner room with double windows. The
                      Bag has fabulaous spa new appliances and a laundry area
                      Other features inclued rich herrigbone floors{" "}
                    </p>
                    <p>Reply</p>
                  </div>
                </div>
                <div className="flex gap-4 pl-20 pt-8">
                  <img src={blogBg} alt="" className="h-14 w-14 rounded-full" />
                  <div>
                    <p className="font-semibold text-[1.1rem]">
                      Rlapha Edwards{" "}
                    </p>
                    <p className="text-sm pb-2">30 December, 2022</p>
                    <p className="font-medium">
                      The seconds Bag is a corner room with double windows. The
                      Bag has fabulaous spa new appliances and a laundry area
                      Other features inclued rich herrigbone floors{" "}
                    </p>
                    <p>Reply</p>
                  </div>
                </div>
                <div className="flex gap-4 pt-8">
                  <img src={blogBg} alt="" className="h-14 w-14 rounded-full" />
                  <div>
                    <p className="font-semibold text-[1.1rem]">
                      Rlapha Edwards{" "}
                    </p>
                    <p className="text-sm pb-2">30 December, 2022</p>
                    <p className="font-medium">
                      The seconds Bag is a corner room with double windows. The
                      Bag has fabulaous spa new appliances and a laundry area
                      Other features inclued rich herrigbone floors{" "}
                    </p>
                    <p>Reply</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#f0f1f2] p-10">
                <h className="font-semibold text-2xl">Leave A Reply</h>
                <p className="font-medium pt-2">
                  
                  All Fields marked with an asterisk (*) are required{" "}
                </p>
                <div className="flex flex-col gap-5 pt-6">
                  <div className="flex gap-5">
                    <input type="text" name="" id="" className="w-1/2 p-4 bg-transparent border-b border-slate-400 focus-within:" placeholder="Name"/>
                    <input type="text" name="" id="" className="w-1/2  p-4 bg-transparent border-b border-slate-400 focus:border-0" placeholder="Email"/>
                  </div>
                  <div className="flex gap-5">
                    <textarea type="text" name="" id="" className="w-full  p-4 bg-transparent border-b border-slate-400 focus:border-0" rows={5} placeholder="Write you Comment here"/>
                  </div>
                  <div className="flex gap-4">
                    <input type="checkbox" name="" id="" /> <p>Save my information in this browser for the next time</p>
                  </div>
                  <button className="py-2 px-6">Submit</button>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-1/4 ">
            <div className="flex flex-col items-center text-center">
              <img
                src={BlogDes}
                alt=""
                className=" rounded-full h-20 w-20 mb-4"
              />
              <h1 className="font-semibold">Shakespeare D.willaim </h1>
              <p className="text-sm pb-4">Bloger / Photographer</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, exercitationem! Perspiciatis facilis assumenda debitis
                quisquam odio deserunt ipsum eos ipsam minus, veritatis iusto
                consequatur eaque quam rerum, asperiores rem illo animi.
              </p>
              <div className="flex gap-4 py-4">
                <img
                  src={Facebook}
                  alt=".f"
                  className=" object-contain h-8 w-8"
                />
                <img
                  src={Instagram}
                  alt=".t"
                  className=" object-contain h-8 w-8"
                />
                <img
                  src={Twiter}
                  alt=".i"
                  className=" object-contain h-8 w-8"
                />
                <img
                  src={Youtube}
                  alt=".y"
                  className=" object-contain h-8 w-8"
                />
              </div>
            </div>
            <div>
              <p className="font-bold text-xl border-b border-slate-400 pb-3">
                Categoires
              </p>
              <div className="flex flex-col gap-2 py-3">
                <div className="flex gap-2">
                  <input type="checkbox" className="pr-3 inline-block" />
                  <label className="flex">Womens Bag</label>
                </div>
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <label>Bottles</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-xl  border-b border-slate-400 pb-3">
                Latest Post
              </p>
              <div className="flex items-center gap-4">
                <img src={BlogDes} alt="" className="h-25  w-2/6" />
                <div className="w-4/6">
                  <p>Modern furniture in velvet</p>
                  <p>30 December , 2022</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={BlogDes} alt="" className="h-25  w-2/6" />
                <div className="w-4/6">
                  <p>Modern furniture in velvet</p>
                  <p>30 December , 2022</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={BlogDes} alt="" className="h-25  w-2/6" />
                <div className="w-4/6">
                  <p>Modern furniture in velvet</p>
                  <p>30 December , 2022</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={BlogDes} alt="" className="h-25  w-2/6" />
                <div className="w-4/6">
                  <p>Modern furniture in velvet</p>
                  <p>30 December , 2022</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={BlogDes} alt="" className="h-25  w-2/6" />
                <div className="w-4/6">
                  <p>Modern furniture in velvet</p>
                  <p>30 December , 2022</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={BlogDes} alt="" className="h-25  w-2/6" />
                <div className="w-4/6">
                  <p>Modern furniture in velvet</p>
                  <p>30 December , 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
