import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { StaticImage } from "gatsby-plugin-image";

const Portfolio = () => {
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
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <div
      ref={ref}
      data-scroll-section
      id="container"
      className="text-graphite m-auto w-screen pt-14 h-full"
    >
      <motion.div
        className="flex flex-col max-w-6xl space-y-12 md:space-y-0 text-center md:text-left md:flex-row md:space-x-10 justify-between w-3/4 h-10/12 m-auto"
        id="portfolio"
        initial="hidden"
        animate={animation}
        variants={list}
      >
        <motion.div
          className="flex flex-row space-x-2 m-auto md:m-0 md:flex-col md:space-y-2 w-full md:w-1/4 h-full text-4xl font-display"
          data-scroll
          data-scroll-sticky
          data-scroll-target="#container"
          variants={list}
        >
          <p>Featured</p>
          <p className="md:ml-8">Projects</p>
        </motion.div>

        <div className="flex flex-col space-y-20 md:space-y-0 w-full md:w-3/4 h-full text-center">
          <motion.div
            data-scroll
            data-scroll-delay=".1"
            data-scroll-speed="5"
            variants={list}
          >
            <StaticImage
              className="mb-4"
              src={"../../images/screenShots/omnifood-screenshot.png"}
              alt="omnifood project"
            />
            <ProjectCard
              name={"Omnifood"}
              tags={["HTML", "CSS"]}
              github={
                "https://github.com/ahmeDeid67/Kalbonyan-Elmarsos-Ahmed-Eid/tree/main/02-Udemy/-01-HTML-CSS-Jonas/Projects/Omnifood"
              }
              liveDemo={"https://omnifood-app.vercel.app/"}
              alt={"Image of omnifood"}
              description={
                "A restaurant website land page has an awesome design"
              }
            />
          </motion.div>
          <div data-scroll data-scroll-delay=".1" data-scroll-speed="5">
            <StaticImage
              className="mb-4"
              src={"../../images/screenShots/project-screenshot-2.png"}
              alt="Pig game project"
            />
            <ProjectCard
              name={"Pig game"}
              tags={["HTML", "CSS", "JavaScript"]}
              liveDemo={"https://pig-game-xi.vercel.app/"}
              github={
                "https://github.com/ahmeDeid67/Kalbonyan-Elmarsos-Ahmed-Eid/tree/main/02-Udemy/-02-Js-Jonas/Projects/Pig-Game"
              }
              alt={"Screenshot of Pig game project"}
              description={"A simple game with 2 players"}
            />
          </div>
          <div data-scroll data-scroll-delay=".1" data-scroll-speed="5">
            <StaticImage
              className="mb-4"
              src={"../../images/screenShots/project-screenshot.png"}
              alt="Bankist app project"
            />
            <ProjectCard
              name={"Bankist app"}
              tags={["HTML", "CSS", "JavaScript"]}
              github={
                "https://github.com/ahmeDeid67/Kalbonyan-Elmarsos-Ahmed-Eid/tree/main/02-Udemy/-02-Js-Jonas/Projects/Bankist"
              }
              liveDemo={"https://bankist-app-blond.vercel.app/"}
              alt={"Screenshot of Bankist, a money transfer application."}
              description={
                "A simulation for a bank with some interested functionality fake login 'js' '1111'"
              }
            />
          </div>
          <div data-scroll data-scroll-delay=".1" data-scroll-speed="5">
            <StaticImage
              className="mb-4"
              src={"../../images/screenShots/chat.png"}
              alt="Chat App project"
            />
            <ProjectCard
              name={"Chat App"}
              tags={["HTML", "CSS", "JavaScript", "Node.js"]}
              github={
                "https://github.com/ahmeDeid67/Kalbonyan-Elmarsos-Ahmed-Eid/tree/main/02-Udemy/-04-Nodejs-Andrew/Projects/Chat-App"
              }
              liveDemo={"https://chat-app-node-project.herokuapp.com/"}
              alt={"Screenshot of chat app"}
              description={
                "A Chat app allows you to chat with your friends in chat rooms"
              }
            />
          </div>
          <div data-scroll data-scroll-delay=".1" data-scroll-speed="5">
            <StaticImage
              className="mb-4"
              src={"../../images/screenShots/mapty.png"}
              alt="Mapty project"
            />
            <ProjectCard
              name={"Mapty"}
              tags={["HTML", "CSS", "JavaScript"]}
              github={
                "https://github.com/ahmeDeid67/Kalbonyan-Elmarsos-Ahmed-Eid/tree/main/02-Udemy/-02-Js-Jonas/Projects/Mapty"
              }
              liveDemo={"https://mapty-rosy.vercel.app/"}
              alt={"Screenshot of mapty"}
              description={
                "A simple web application allows you to track your workouts"
              }
            />
          </div>
          <div data-scroll data-scroll-delay=".1" data-scroll-speed="5">
            <StaticImage
              className="mb-4"
              src={"../../images/screenShots/forkify.png"}
              alt="Forkify project"
            />
            <ProjectCard
              name={"Forkify"}
              tags={["HTML", "CSS", "JavaScript"]}
              github={
                "https://github.com/ahmeDeid67/Kalbonyan-Elmarsos-Ahmed-Eid/tree/main/02-Udemy/-02-Js-Jonas/Projects/Forkify"
              }
              liveDemo={"https://forkify-project-tan.vercel.app/"}
              alt={"Screenshot of forkify"}
              description={
                "A recipes website allows you to search over 1,000,000 recipe"
              }
            />
          </div>
          <div data-scroll data-scroll-delay=".1" data-scroll-speed="5">
            <StaticImage
              className="mb-4"
              src={"../../images/screenShots/note.png"}
              alt="Note App project"
            />
            <ProjectCard
              name={"Note App"}
              tags={[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Node.js",
                "MongoDB",
                "Express.js",
                "SST",
              ]}
              github={
                "https://github.com/ahmeDeid67/Kalbonyan-Elmarsos-Ahmed-Eid/tree/main/04-Serverless-Stack-Project/Serverless-project"
              }
              liveDemo={"https://d3qgavg8biewqg.cloudfront.net/"}
              alt={"Screenshot of note app"}
              description={"A Note taking app made with sst framework"}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
