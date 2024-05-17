import React, { useRef , useState , useEffect} from 'react'
import gsap  from "gsap";
import Content from './content';
import Canvas from './canvas';
import { dataFormat } from '../data';
import { LoadingAnimation } from '../components';
import NavBar from './nav';
import Divider from './divider';
import BetSeller from './betseller';
import Testimonial from './testimonial';
import FaqSection from './faqsection';
import AboutBanner from './About/aboutbanner';
import Footer from './footer';
import NewsLeter from './newsleter';
import VissionMision from './About/vission';
import AboutService from './About/service';
import ProductBanner from './productdec/productbanner';
import ProductDescription from './productdec/productdescription';
import ProductSuggestion from './productdec/productsuggestion';
export default function Banner() {
  
  const banner = useRef();
  const [condition, setCondition] = useState(false);
  const [isLoading , setLoading] = useState(true);
  const [activeData , setActiveDate] = useState(dataFormat[0]);
  const handleLoading = ()=>{
    setLoading(false);
  }
  const handleSwatchClick = (item) =>{
    if(activeData.id !== item.id) setActiveDate(item);
  }
  useEffect(()=>{
   gsap.to(banner.current, {
    background: activeData.background,
    ease: 'power3.inOut',
    duration: 0.8
   });
   gsap.to('.logo', {
    color: activeData.headingColor,
    ease: 'power3.inOut',
    duration: 0.8,
   });
  }, [activeData])
  return (
    <div ref={banner} className='w-scrren h-screen relative'>
      {isLoading ? <LoadingAnimation /> : null} 
     {/* <div className='logo absolute my-2 ml-6 text-left text-2xl font-bold tracking-widest md:ml-28 lg:ml-[12vw] lg:my-8'> 
      <NavBar />
      </div> */}
     <div className='max-w-[1440px] h-full m-auto flex justify-between items-center flex-col lg:flex-row-reverse'>
     <Canvas
          activeData={activeData}
          swatchData={dataFormat}
          handleSwatchClick={handleSwatchClick}
          handleLoading={handleLoading}
          condition={condition}
        />
        <Content
          activeData={activeData}
          condition={condition}
          setCondition={setCondition}
        />
     </div>
 
  
    </div>
  )
}
