import React, { useState } from "react";
import Image1 from "../../assets/3.png";
import Image2 from "../../assets/4.png";
import Image3 from "../../assets/5.png";
import { LiaStarSolid } from "react-icons/lia";
import { motion } from "motion/react";
import { animate, delay } from "motion";
import { SlideUp } from "../../utility/animation";

const foodDatas = [
  {
    id: 1,
    name: "Pizza",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "10.99$",
    image: Image1,
    delay: 0.5,
    rating: (
      <p className="flex gap-1 text-yellow-500">
        {[1, 2, 3, 4, 5].map((star) => (
          <LiaStarSolid key={star} size={20} />
        ))}
      </p>
    ),
  },
  {
    id: 2,
    name: "Shwe Yin Aye",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "10.99$",
    image: Image2,
    delay: 0.7,
    rating: (
      <p className="flex gap-1 text-yellow-500">
        {[1, 2, 3, 4, 5].map((star) => (
          <LiaStarSolid key={star} size={20} />
        ))}
      </p>
    ),
  },
  {
    id: 3,
    name: "Mone ti",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "10.99$",
    image: Image3,
    delay: 0.9,
    rating: (
      <p className="flex gap-1 text-yellow-500">
        {[1, 2, 3, 4].map((star) => (
          <LiaStarSolid key={star} size={20} />
        ))}
      </p>
    ),
  },
  {
    id: 4,
    name: "Burger",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "12.99$",
    image: Image2,
    delay: 0.8,
    rating: (
      <p className="flex gap-1 text-yellow-500">
        {[1, 2, 3, 4, 5].map((star) => (
          <LiaStarSolid key={star} size={20} />
        ))}
      </p>
    ),
  },
  {
    id: 5,
    name: "Pasta",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "8.99$",
    image: Image3,
    delay: 1,
    rating: (
      <p className="flex gap-1 text-yellow-500">
        {[1, 2, 3, 4].map((star) => (
          <LiaStarSolid key={star} size={20} />
        ))}
      </p>
    ),
  },
];

const TopList = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedData = showAll ? foodDatas : foodDatas.slice(0, 3);
  console.log(showAll);

  return (
    <section className=" mt-10 " name="toplist">
      <div className="container py-4 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center py-4 mb-4">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-3xl font-semibold sm:text-4xl sm:font-bold mb-2 text-shadow"
          >
            Top List
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="text-sm sm:text-xl text-gray-600"
          >
            Here is the top list of the best things in the world
          </motion.p>
        </div>

        {/* Card Section */}
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {displayedData.map((data) => {
              return (
                <motion.div
                  variants={SlideUp(data.delay)}
                  initial="initial"
                  whileInView="animate"
                  key={data.id}
                  className="flex items-center justify-center flex-col py-4 px-6 sm:py-4 mx-6 my-4 sm:mx-4 space-y-2 bg-white/50 rounded-xl"
                >
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-40 h-40 object-cover m-2 image-shadow"
                  />
                  <div className="space-y-2">
                    <p>{data.rating}</p>
                    <p className="text-lg font-bold">{data.name}</p>
                    <p className="text-lg">{data.desc}</p>
                    <p className="text-sm font-Semibold">{data.price}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Button */}
        <button
          className="px-6 py-2 bg-black text-white rounded-full mt-4"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less ..." : "See More..."}
        </button>
      </div>
    </section>
  );
};

export default TopList;
