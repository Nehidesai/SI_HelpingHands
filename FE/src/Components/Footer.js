import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="container-fluid" id="footer">
            {/* <div className="row"> */}
            <center>
                <div className="col-12 col-md-4 offset-md-2" style={{marginLeft:"8%", color:"white"}}>

<a href="https://www.google.com/maps/place/Dutt+Society+Road,+Dungarshinagar,+Chandra+Nagar,+Paldi,+Ahmedabad,+Gujarat+380007/@23.0028163,72.555914,17z/data=!3m1!4b1!4m5!3m4!1s0x395e850f8c4a76bd:0xa4187a6fe9b9d1a!8m2!3d23.0028114!4d72.5581027" target="_blank" rel="noreferrer noopener"><i class="fas fa-map-marker-alt fa-2x "></i></a><div className="text"><p>Punjab Engineering College, Sector-12,Chandigarh, 160012</p></div>
<a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nehidesai00@gmail.com" target="_blank" rel="noreferrer noopener"> <i className="fa fa-envelope fa-2x info" target="_blank"></i></a><div className="text"><p><br />nehidesai00@gmail.com</p></div>
<a href="tel:+919978610820" target="_blank" rel="noreferrer noopener"> <i class="fa fa-phone fa-2x info" aria-hidden="true"></i></a><div className="text"><p>+91-99786 10820</p></div>
</div>

            {/* </div> */}
            </center>
            {/* <p className="col-12 copyright">Copyright © 2021</p> */}
        </footer>
    )
}

export default Footer;