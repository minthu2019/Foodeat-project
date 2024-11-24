import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineFastfood } from "react-icons/md";
import { GiHealthPotion } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { motion } from "motion/react";
import { SlideUp } from "../../utility/animation";

const Service = () => {
  return (
    <section className=" container py-12" name="service">
      <div className=" flex flex-col items-center justify-center">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className=" text-3xl sm:text-4xl font-semibold text-shadow m-6 p-4"
        >
          Our Service
        </motion.h1>
        <div className=" grid grid-cols-2 sm:grid-cols-4 gap-10">
          <motion.div
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className=" flex items-center gap-1"
          >
            <IoIosPhonePortrait size={30} />
            <p className=" text-xl font-bold ">Online Booking</p>
          </motion.div>
          <motion.div  variants={SlideUp(0.5)}
          initial="initial"
          whileInView="animate" className=" flex items-center gap-1">
            <MdOutlineFastfood size={30} />
            <p className=" text-xl font-bold ">Fast Food</p>
          </motion.div>
          <motion.div  variants={SlideUp(0.6)}
          initial="initial"
          whileInView="animate" className=" flex items-center gap-1">
            <GiHealthPotion size={30} />
            <p className=" text-xl font-bold">Healthy Food</p>
          </motion.div>
          <motion.div  variants={SlideUp(0.7)}
          initial="initial"
          whileInView="animate" className=" flex items-center gap-1">
            <CiDeliveryTruck size={30} />
            <p className=" text-xl font-bold">Delivery</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Service;
