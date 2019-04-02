import React from 'react';
import Slider from "react-slick";
import "./slider.css";


const Slide = () => {
  
    const settings = {
      arrows: false,
      autoplay:true,  
    }; 
   
  return ( 
    <Slider {...settings}>
          <div>
           <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
        </Slider>
   );
}
 
export default Slide;