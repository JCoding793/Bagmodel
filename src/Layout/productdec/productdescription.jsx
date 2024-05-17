import bgImg from "../../assets/image5.png";
import gsap from "gsap";
import React, { useEffect } from "react";

export default function ProductDescription() {
  useEffect(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".desc-porduct-more",
        start: "top bottom",
        end: "bottom",
        scrub: false,
        // markers: true,
      },
    })
    tl.from (".desc-porduct-more p", {
      opacity: 0,
      y:100,
      skewX:-10,
       duration : 0.8,
       stagger: 0.1
    })
    tl.from(".desc-heading" ,{
      opacity: 0,
      y:100,
      skewX:-10,
      duration: 1,
      stagger: 0.1
    }).from(".pro-img" ,{
      opacity: 0,
      y:100,
      duration: 1,
    } , "-=0.5")
  })

  return (
    <div className="bg-white ">
      <div className="max-w-[1440px] m-auto py-10 px-[4%] lg:px-0">
          <div className="flex gap-3 md:gap-7 border-b border-slate-400 pb-[2px] desc-porduct-more overflow-hidden text-[0.9rem] md:text-[1.1rem]">
            <p className=" text-red-400 underline underline-offset-8">
              Description
            </p>
            <p>Shipping & Returns</p>
            <p>Styles</p>
            <p>Reviews</p>
          </div>
          <div className="flex flex-col md:flex-row  gap-10 md:gap-16 mt-8 md:mt-20">
            <div className=" w-full md:w-3/5">
              <h1 className="font-semibold text-[1.4rem] md:text-3xl pb-3 md:pb-6 desc-heading">
                Luxurious Lather Bag - Elevate Your Daily Routine
              </h1>
              <p className="text-[1rem] md:text-xl pb-2 md:pb-4 desc-heading">
                Indulge in the ultimate grooming experience with our Luxurious
                Lather Bag, meticulously curated to enhance your daily routine
                with unparalleled sophistication and efficacy. Crafted for those
                who appreciate the finer details of grooming, this exclusive
                collection brings together premium essentials designed to
                elevate every aspect of your grooming regimen.
              </p>
              <p className="text-[1rem] md:text-xl desc-heading">
                Each component of our Luxurious Lather Bag is meticulously
                selected to offer you an unparalleled grooming experience.
                Whether you're preparing for a busy day at the office or a
                special evening out, our collection ensures that you step out
                with confidence and sophistication, ready to conquer the day
                ahead. Elevate your grooming routine to new heights of luxury
                with our Luxurious Lather Bag. Experience the epitome of
                sophistication and refinement, and embrace the art of grooming
                with elegance and style.
              </p>
            </div>
            <div
              className="w-full md:w-2/5 h-[350px] md:h-[500px] bg-cover rounded-2xl pro-img"
              style={{ backgroundImage: `url(${bgImg})` }}
            ></div>
          </div>
          <p className="text-[1rem] md:text-xl pt-7 desc-heading">
            Step into the world of timeless elegance with our Exquisite Leather
            Bag, meticulously crafted to complement your refined taste and
            elevate your style to new heights. Handcrafted from the finest
            quality leather, each bag is a masterpiece of craftsmanship, exuding
            sophistication and luxury in every detail. Impeccably designed for
            both fashion and function, our leather bag seamlessly combines
            classic aesthetics with modern utility. The spacious interior offers
            ample room to organize your essentials, while multiple compartments
            and pockets provide convenient storage for your belongings. Whether
            you're heading to the office, a weekend getaway, or a special
            occasion, this versatile bag effortlessly adapts to your needs,
            ensuring you're always prepared in style.
          </p>
        </div>
      </div>
  );
}
