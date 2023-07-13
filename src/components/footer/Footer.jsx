import "./FooterStyle.css";
import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
            <div>
                <h1>Trippy</h1>
                <p>Choose your favorite </p>
            </div>
            <div>
                <Link to="/"><i class="fa-brands fa-square-facebook"></i></Link>
                <Link to="/"><i class="fa-brands fa-linkedin"></i></Link>
                <Link to="/"><i class="fa-brands fa-square-twitter"></i></Link>
                <Link to="/"><i class="fa-brands fa-square-instagram"></i></Link>
            </div>
        </div>
        <div className="bottom"></div>
    </div>
  )
}

export default Footer