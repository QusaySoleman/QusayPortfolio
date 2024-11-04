import React from "react";
import "./Skill.css";
import Star from "./Star";
import skills from "./SkillData/SkillData";
//motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
function Skill() {
  return (
    <div className="skill-section ">
   
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="row row-container container content"
      >
        <h2 className="text-center mb-4">My Skills</h2>
        
        {skills.map((skill) => {
          return (
            <div className="col-md-3 col-sm-6 col-xs-12" key={skill.id}>
              
              <div className="skill-box">
                <h4>
                  <span>
                    <i className={skill.skillName}></i>
                  </span>
                </h4>

                <p>{skill.skillDesciption}</p>
                <Star />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Skill;
