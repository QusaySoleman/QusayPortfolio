import React from "react";
import "./Hero.css";
import QusayImg from "../../Assets/images/portfolio.jpg";
//motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import Company from '../Company/Company'
function Hero() {
  return (
 <>

 <div className="container-fluid hero-section">
      
      <div className="hero-content">
        <div
        className="row">
          <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}  className="col-md-6 col-sm-12 ">
            <div
             
              className="img-box"
            >
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src={QusayImg}
                  alt="Personal Photo"
                />
              </div>
            </div>
          </motion.div>
          {/* Secondcol */}
          <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}  className="col-md-5 col-sm-12 col-xs-12 self-introduction p-5">
            Hi There, I’m Qusay from Syria.
            <br />
            I'm working as a Front-End Web Developer since 2 years. <br /> I
            have developed many websites and I have been a part of some very
            good web design projects at Darrebni Company .
            <br />
            My skills are HTML5, CSS3, Bootstrap, Javascript and React JS.{" "}
            <br />
            You can see my projects on my GitHub account or my YouTube Channel
            (Code With B11) . I'm looking forward to be a Full Stack Web
            Developer.
          </motion.div>
        </div>
      </div>
        <Company/>
      
    </div>
 </>
  );
}

export default Hero;
