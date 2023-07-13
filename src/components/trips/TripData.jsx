import "./TripStyle.css";

import React from 'react'

const TripData = (props) => {
  return (
    <div className="tripcard">
        <div className="t-card">
            <div className="t-image">
                <img src={props.tripimg} alt="img"/> 
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text }</p>
        </div>

        <div className="t-card">
            <div className="t-image">
                <img src={props.tripimg1} alt="img"/> 
            </div>
            <h4>{props.heading1}</h4>
            <p>{props.text1 }</p>
        </div>

        <div className="t-card">
            <div className="t-image">
                <img src={props.tripimg2} alt="img"/> 
            </div>
            <h4>{props.heading2}</h4>
            <p>{props.text2}</p>
        </div>
    </div>
  )
}

export default TripData