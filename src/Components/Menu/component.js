import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button/component";
import style from "./style/style.module.css";
import Nav from "./Nav/component";

export const Menu = ({ mainRef }) => {
  const [isActive, setIsActive] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(width);

  const menu = {
    open: {
      width: width <= 576 ? "100vw" : "350px",
      height: "100vh",
      top: width <= 576 ? "-15px" : "-30px",
      right: width <= 576 ? "-15px" : "-35px",
      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: "100px",
      height: "40px",
      top: "0px",
      right: "0px",
      transition: {
        duration: 0.75,
        delay: 0.35,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <div className={style.header}>
      <motion.div
        className={style.menu}
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>
          {isActive && (
            <Nav
              mainRef={mainRef}
              toggleMenu={() => {
                setIsActive(!isActive);
              }}
            />
          )}
        </AnimatePresence>
      </motion.div>
      <Button
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </div>
  );
};
