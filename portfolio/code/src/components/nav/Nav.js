import React from "react";
import { motion } from "framer-motion";
import { navigate } from "@reach/router";

const Nav = () => {
  const nav = {
    hidden: { y: "-50vw", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 2.2,
        delayChildren: 0.7,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div data-scroll-section className="relative z-10">
      <motion.ul
        className="absolute top-0 right-0 my-12 mx-6 md:mx-14 flex font-display justify-end space-x-8 md:space-x-16 text-light-green 2xl:text-lg"
        variants={nav}
        initial="hidden"
        animate="visible"
      >
        <motion.li
          className="border-blue-500 hover:border-b hover:text-blue-500 cursor-pointer"
          whileHover={{ scale: 1.2 }}
          onClick={() => {
            navigate("#about");
          }}
          variants={nav}
        >
          About
        </motion.li>
        <motion.li
          className="border-blue-500 hover:border-b hover:text-blue-500 cursor-pointer"
          whileHover={{ scale: 1.2 }}
          onClick={() => {
            navigate("#portfolio");
          }}
          variants={nav}
        >
          Projects
        </motion.li>
        <motion.li
          className="border-blue-500 hover:border-b hover:text-blue-500 cursor-pointer"
          whileHover={{ scale: 1.2 }}
          onClick={() => {
            navigate("#contact");
          }}
          variants={nav}
        >
          Contact
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Nav;
