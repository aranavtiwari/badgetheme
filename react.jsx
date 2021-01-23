import React, { useEffect, useRef } from "react";
import Nav from './Nav'
import VanillaTilt from "vanilla-tilt";
import img from '../img/skilllogo.png';



function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }
  
  function Skill() {
    const options = {
        speed: 7000,
      scale: 1.3,
      max: 30,
      
 };
     return (
        <div>
            <Nav/>
            <div className="skill-container">
                <div className="img-skill">
                <Tilt className="box" options={options} >
                   <img src={img} alt="" className="img"/>
                </Tilt> 
                </div>
                <div className="skill-outer">
                    {skillShow()}
                </div>

            </div>
        </div>
    )
    }
export default Skill;

 
