import React, { useEffect, useRef, useState } from "react";
import {fullMaskRight,fullMaskBottom} from '../utils/mask'
import { useTransform,motion } from "framer-motion";
import { AnimatedText,TypeWriter, } from 'pratap-ui';
  const text = "Crafting digital experiences that seamlessly blend art and design to create visually stunning ,innovative and user-friendly creations.";


const Page1 = ({ progress,size }) => {
  const divRef = useRef(null)
  const maskProgress = useTransform(progress, [0, 20], [0, 45])
  const [time, setTime] = useState('');
  const updateTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour clock to 12-hour clock
    hours = hours % 12;
    hours = hours ? hours : 12; // If hour is 0 (midnight), set to 12

    // Format the time
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
    setTime(timeString);
  };
  
  useEffect(() => {
    const timerId = setInterval(updateTime, 1000);
    return () => clearInterval(timerId); // Cleanup the interval on component unmount
  }, []);
  maskProgress.on("change", (lat) => {
        if (divRef.current) {
            divRef.current.style.setProperty("--headerMask",size>640?fullMaskRight[Math.round(lat)]:fullMaskBottom[Math.round(lat)])
        }
    });

  return (
    <div ref={divRef}  className=" page h-svh w-screen shrink-0 bg-leaves dark:bg-[#2d312a] overflow-hidden flex flex-col justify-between px-3 sm:px:10 pt-40 py-10"  style={{mask:'var(--headerMask)'}}>
     <div className="max-w-[800px] ml-auto mr-4 ">
      <AnimatedText wrapperClass="gap-x-1 h-auto  flex-wrap" wordsClass='flex h-fit w-fit overflow-visible' variant="scaleOut" className='text-2xl sm:text-3xl md:text-5xl  '>
          {text}
        </AnimatedText>
      </div>
        
      
      <div className="relative flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-5 md:gap-8">
        <motion.div initial={{ y:100,opacity:0 }} whileInView={{ y:0,opacity:1,transition:{duration:0.8,ease:'linear'}}} viewport={{once:true}} className="order-2 sm:order-1 logo text-9xl text-[8.2rem] sm:text-[200px] md:text-[350px] xl:text-[400px] italic font-bold ">
          <span>u</span>
          <span>d</span>
          <span>a</span>
          <span>y</span>
        </motion.div>
        <motion.div initial={{ y:20,opacity:0 }} whileInView={{ y:0,opacity:1,transition:{duration:0.8,ease:'linear',delay:0.5}}} viewport={{once:true}}  className="order-1 h-fit rounded-sm text-sm sm:text-xl py-1 sm:py-2 font-semibold  px-2 sm:px-5   ">Local time { time}<br/>GMT(+5:30)</motion.div>
      </div>
    </div>
  );
};

export default Page1;
