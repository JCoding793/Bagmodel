import React, { useEffect , useState} from "react";


export default function Faqfunionality({pheading , panswer}) {
const [faqData , setFaqData] = useState(false);
  return (
       <div className=" faqs" >
              <div className=" bg-[#fff3f3]  flex flex-col px-4  ">
                <div className="flex items-center justify-between  rounded-md py-4 md:py-6 cursor-pointer"  onClick={()=>{ setFaqData(faqData === !true)}}>
                  <p className=" font-medium">{pheading}</p>
                <span className="text-2xl">&#129175;</span>
                </div>
                {faqData ? (<p className="mt-[-6px] md:mt-[-15px] pb-4 md:pb-6">{panswer}</p>) : ""}
              </div>
            </div>
  )
}
