import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import linkedIn from "../../images/linkedin.svg";
import github from "../../images/github.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { navigate } from "@reach/router";

const Contact = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  const list = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    hidden: {
      y: "10vw",
      opacity: 0,
    },
  };

  return (
    <div
      ref={ref}
      data-scroll-section
      className="bg-graphite text-center h-full w-screen pb-12 pt-24 mt-12"
    >
      <motion.div
        id="contact"
        className="w-5/6 md:w-4/5 max-w-7xl h-full m-auto pt-10"
        initial="hidden"
        animate={animation}
        variants={list}
      >
        <div className="flex flex-col lg:flex-row md:text-left align-start h-full lg:space-x-16">
          <div className="flex flex-col space-y-12 w-full lg:w-1/2 mb-12 lg:mb-0 px-6 py-12 md:p-12 h-full bg-light-green text-graphite">
            <h2 className="font-display text-4xl">Say Hi!</h2>
            <p className="font-body md:text-lg tracking-wide leading-loose 2xl:w-2/3">
              Currently open for new opportunities or people to share ideas
              with! For any other information about me or my work, feel free to
              reach out!
            </p>
            <button
              className="m-auto md:m-0 md:text-left bg-black bg-opacity-90 font-body text-light-green h-full w-max mt-6 p-4
                        hover:scale-105 hover:tracking-wider active:scale-95 transform duration-200 shadow-2xl hover:text-blue-500"
            >
              <a
                href="https://drive.google.com/file/d/1rEDCtg7HHTe9BEhXfQDCOvEa02FIWQcf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </button>
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between">
              <div className="flex flex-col">
                <p>Contact me at</p>
                <a
                  href="mailto:Ahmed_tech67@outlook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Ahmed_tech67@outlook.com
                </a>
              </div>
              <div>
                <p>Or find me here</p>
                <div className="flex justify-center md:justify-start space-x-2">
                  <a
                    href="https://github.com/ahmeDeid67"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="h-5 w-5 hover:scale-125 active:scale-95 transition duration-150"
                      alt="github"
                      src={github}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ahmed-eid-568051229/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="h-5 w-5 hover:scale-125 active:scale-95 transition duration-150"
                      alt="linkedin"
                      src={linkedIn}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-graphite font-body flex flex-col space-y-6 w-full lg:w-1/2">
            <p className="font-display text-4xl text-light-green">
              Send me a message!
            </p>
            <ContactForm />
          </div>
        </div>
        <div className="mt-14 flex flex-col space-y-12 justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              navigate("#");
            }}
            className="h-6 w-6 text-light-green m-auto animate-bounce cursor-pointer transition duration-150 hover:text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 11l7-7 7 7M5 19l7-7 7 7"
            />
          </svg>
          <p className="text-light-green font-display text-sm">
            Designed and developed by Ahmed Eid © 2022
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
