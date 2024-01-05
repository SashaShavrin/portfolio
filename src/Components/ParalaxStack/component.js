import { useEffect, useRef, useState } from "react";
import style from "./style/style.module.css";
import { useTransform, useScroll, motion } from "framer-motion";
import classNames from "classnames";
import { Stack } from "../Stack/component";

export const ParalaxStack = ({ stackImages }) => {
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
    <div>
      <div className={style.container}>
        <motion.div ref={gallery} className={style.gallery} style={{ scale }}>
          <Column
            stackImages={[stackImages[0], stackImages[1], stackImages[2]]}
            y={y}
          />
          <Column
            stackImages={[stackImages[3], stackImages[4], stackImages[5]]}
            y={y2}
          />
          <Column
            stackImages={[stackImages[6], stackImages[7], stackImages[8]]}
            y={y3}
          />
          <Column
            stackImages={[stackImages[9], stackImages[10], stackImages[11]]}
            y={y4}
          />
        </motion.div>
      </div>
      <Stack stackImages={stackImages} />
    </div>
  );
};

const Column = ({ stackImages, y }) => {
  return (
    <motion.div className={style.column} style={{ y }}>
      {stackImages.map((src, i) => {
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
                      src={`./img/${src}.svg`}
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
