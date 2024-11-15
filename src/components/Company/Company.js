import "./Company.css";
import React from "react";
import darrebniImg from "../../Assets/images/Company/Darrebni.png";
import JCIImg from "../../Assets/images/Company/JCI-Syria.png";
import translateImg from "../../Assets/images/Company/Translate.jpg";
//motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
function Company() {
  return (
    <div className="container-fluid companies text-center">
      <h2>Comapnies I've had worked</h2>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}  className="row company-content">
        <div className="col-md-4">
          <a href="https://darrebni.net/en/home-2/" target="blank">
            <div className="company-box">
              <span className="about-company"></span>
              <img className="img-fluid" src={darrebniImg} alt="Darrebni-img" />
            </div>
          </a>
        </div>
        <div className="col-md-4">
          <a
            href="https://jcisyria.org/"
            target="blank"
          >
            <div className="company-box">
              <span className="about-company"></span>
              <img className="img-fluid" src={JCIImg} alt="JCI-img" />
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Company;
