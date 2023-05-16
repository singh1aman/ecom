import React from "react";
import { useState } from "react";
import './carosel.css'
import { AiOutlineArrowLeft } from 'react-icons/ai';

import {AiOutlineArrowRight} from 'react-icons/ai'
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

                
export default function Carousel(){
    const images = [ "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
                    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
                    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
                    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg"]

    const [currentSlide,setCurrentSlide] = useState(0);
  
   const leftScroller = ()=>{
     setCurrentSlide(currentSlide === 0 ? 3 : currentSlide-1)
    };
   const rightScroller = ()=>{
    setCurrentSlide(currentSlide === 3 ? 0 : currentSlide+1)

    }

    return(
        <>
      <div className="image-container">

        
      <img alt="" src={images[currentSlide]} ></img>
          
        <div className="">
        <button className="left-arrow" onClick={leftScroller}>
              <AiOutlineArrowLeft />
          </button>
        <button className="right-arrow" onClick={rightScroller}>
          <AiOutlineArrowRight />
        </button>
        </div>
     

      </div>
      
        
        </>
    )
}