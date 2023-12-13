import { useEffect, useRef, useState } from "react";
import style from "./style/style.module.css";
import { useTransform, useScroll, motion } from "framer-motion";
import classNames from "classnames";

const images = [
  "React",
  "Redux",
  "Hooks",
  "Java Script",
  "Type Script",
  "ООП",
  "module SCSS",
  "SPA",
  "PWA",
  "NEXT.js",
  "SWC",
  "Figma",
];

export const ParalaxStack = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 0.9]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 1.5]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);

    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.97]);

  return (
    <div className={style.container}>
      <motion.div ref={gallery} className={style.gallery} style={{ scale }}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </motion.div>
    </div>
  );
};

const Column = ({ images, y }) => {
  return (
    <motion.div className={style.column} style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className={style.imageContainer}>
            <div className={style.item}>
              <div className={style.block}>
                {src !== "Hooks" &&
                  src !== "ООП" &&
                  src !== "SPA" &&
                  src !== "PWA" && (
                    <img
                      className={classNames(
                        style.img,
                        src === "React" && style.rotate
                      )}
                      src={`../img/${src}.svg`}
                      alt=""
                    />
                  )}

                <div className={style.text}>{src}</div>
              </div>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};
