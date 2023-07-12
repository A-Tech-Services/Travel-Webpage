import "./HeroSectionStyle.css";

import React from 'react';
import {Link} from 'react-router-dom';

const HeroSection = (props) => {
  return (
    <div className="hero">
        <div className={props.cName}>

            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <Link  to={props.url} className={props.btnClass}>Travel Plan</Link>
        </div>
        </div>
    </div>
  )
}

export default HeroSection