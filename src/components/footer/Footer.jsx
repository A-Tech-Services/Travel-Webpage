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

        <div className="bottom">
            <div>
                <h4>Project</h4>
                <Link to="/">ChangeLog</Link>
                <Link to="/">Status</Link>
                <Link to="/">License</Link>
                <Link to="/">All Versions</Link>
            </div>

            <div>
                <h4>Community</h4>
                <Link to="/">Github</Link>
                <Link to="/">Issues</Link>
                <Link to="/">Project</Link>
                <Link to="/">Twitter</Link>
            </div>

            <div>
                <h4>Help</h4>
                <Link to="/">Support</Link>
                <Link to="/">Troubleshooting</Link>
                <Link to="/">Contact us</Link>
            </div>

            <div>
                <h4>Others</h4>
                <Link to="/">Terms of Service</Link>
                <Link to="/">Privacy Policy</Link>
                <Link to="/">License</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer