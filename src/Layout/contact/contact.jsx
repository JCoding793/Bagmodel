import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="contact-container flex  flex-col md:flex-row gap-5  max-w-[1440px] m-auto py-20 px-[4%] lg:px-0">
        <div className="w-full md:w-3/5">
          <h1 className=" text-3xl md:text-5xl font-bold pb-6">Get in touch</h1>
          <form action="">
            <div className=" flex flex-col gap-3 pb-5">
              <label for="" className="">Name*</label>
              <input
                type="text"
                placeholder="Name"
                className=" bg-transparent w-full py-2 px-2 border border-stone-500 rounded-xl"
              ></input>
            </div>

            <div className="flex flex-col gap-3 pb-5">
              <label for="">Email*</label>
              <input
                type="text"
                placeholder="Name"
                className=" bg-transparent w-full py-2 px-2 border border-stone-500 rounded-xl"
              ></input>
            </div>
            <div className="flex flex-col gap-3 pb-5">
              <label for="">Message*</label>
              <textarea
                type="text"
                placeholder="Name"
                className=" bg-transparent w-full py-2 px-2 resize-none border border-stone-500 rounded-xl"
                rows={6}
              ></textarea>
            </div>
        {/* button  */}
            <p className= "text-white bg-black py-3 text-center cursor-pointer  rounded-xl">Send message</p>
          </form>
        </div> 
        <div className=" w-full md:w-2/5 ">
          <div className=" pb-5 border-b-1">
            <h1 className="text-4xl font-bold pb-3">Support</h1>
            <p className="font-semibold pb-2">Phone</p>
            <p className="text-[1.1rem] text-slate-400 pb-1">+9122 35134757</p>
            <p className="text-[1.1rem] text-slate-400 pb-1">Monday - Friday</p>
            <p className="text-[1.1rem] text-slate-400 pb-1">10:00am - 07:00pm</p>
          </div>

          <div className="pb-5 border-b-1 border-slate-400">
            <h1  className="font-semibold pb-2">Email</h1>
            <p className="text-[1.1rem] text-slate-400 pb-1">infor@support.com</p>
          </div>
          <div className=" pb-5 ">
            <h1 className="font-semibold pb-2">Address</h1>
            <p className="text-[1.1rem]">Panthaghati Shiv mandir, Chota shimla near by Phantaghati chwok</p>
          </div>
        </div>
      </div>
    </div>
  );
}
