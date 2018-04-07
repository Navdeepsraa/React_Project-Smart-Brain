import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.png'
import './Logo.css'

const Logo = () =>
{
  return(
    <div className="ma4 mt0 ">
    <Tilt className="Tilt shadow-5 bg"
     options={{ max : 50 }} style={{ height: 120, width: 120 }} >
 <div className="Tilt-inner "> <img src={brain} alt="logo"
 style={{height:80,marginTop:'20px'}}/></div>
</Tilt>
    </div>
  );
}

export default Logo;
