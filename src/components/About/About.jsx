import React from "react";
import Image from "../../assets/2.png";
import { motion } from "motion/react";
import { SlideLeft, SlideRight } from "../../utility/animation";

const About = () => {
  return (
    <section className="py-4 my-10 " name="about">
      <div className=" container flex items-center justify-center">
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Image secton */}
          <motion.div
            variants={SlideRight(0.2)}
            initial="initial"
            whileInView="animate"
            className=" flex items-center justify-center"
          >
            <img src={Image} alt="About Image" className="image-shadow" />
          </motion.div>

          {/* text section */}
          <div className=" flex flex-col items-center justify-center sm:items-start  space-y-3 mt-4 px-6 py-4 sm:px-4">
            <motion.h1
              variants={SlideLeft(0.4)}
              initial="initial"
              whileInView="animate"
              className=" text-3xl font-semibold text-black "
            >
              Food Is Always Good
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.6)}
              initial="initial"
              whileInView="animate"
              className=" text-sm sm:text-xl text-gray-600"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus laboriosam vitae accusamus assumenda, nobis perferendis
              ducimus! Itaque similique, recusandae nulla
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
