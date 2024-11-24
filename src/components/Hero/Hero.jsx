import React from "react";
import HeroImage from "../../assets/1 .png";
import { motion } from "motion/react";
import {  SlideRight } from "../../utility/animation";

const Hero = () => {
  return (
    <section className="" name="hero">
      <div className=" container min-h-[500px] sm:max-h-[500px] flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* text section */}
          <div
            className=" flex flex-col justify-center text-center sm:text-left
            pt-10 pb-10 space-y-4 md:space-y-8 "
          >
            <motion.h1
              variants={SlideRight(0.2)}
              initial="initial"
              animate="animate"
              className=" text-3xl sm:text-4xl md:text-5xl font-semibold text-shadow "
            >
              Delicious Foood is Waiting For You
            </motion.h1>
            <motion.p
             variants={SlideRight(0.4)}
             initial="initial"
             animate="animate"
              className=" "
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              possimus voluptatibus quos, sunt animi error ullam tempore est
              saepe accusamus.
            </motion.p>
            <motion.div
             variants={SlideRight(0.6)}
             initial="initial"
             animate="animate"
              className=" flex items-center justify-center sm:justify-start gap-4"
            >
              <button className="primary-btn hover:scale-105 duration-150 transition-transform">
                Food Menu
              </button>
              <button
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
                className="secondary-btn  hover:scale-105 duration-150 transition-transform"
              >
                Book Table
              </button>
            </motion.div>
          </div>

          {/* Image section */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              repeat: Infinity, // Loop the animation infinitely
              duration: 10, // Animation duration (in seconds)
              ease: "linear", // Smooth linear spin
            }}
            className=" flex flex-col items-center justify-center"
          >
            <img src={HeroImage} alt="" className=" w-[400px] image-shadow " />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
