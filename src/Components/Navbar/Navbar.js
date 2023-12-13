import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import style from "./style/style.module.css";
import { Link } from "../Link/component";

export function Navbar({ linksRender }) {
  const initialValue = 60;
  const finalValue = 88;
  const thresholdY = 800;

  const speed = 1;
  const scrollDistance = (initialValue - finalValue) / speed;

  const startY = 0;
  const endY = startY + scrollDistance;

  const { scrollY } = useScroll();
  const scrollOutput = useTransform(
    scrollY,
    [startY, endY, endY],
    [initialValue, finalValue, finalValue],
    {
      clamp: false,
    }
  );

  const [isPastThreshold, setIsPastThreshold] = useState(false);
  useEffect(
    () => scrollY.onChange((latest) => setIsPastThreshold(latest > thresholdY)),
    []
  );

  return (
    <motion.div className={style.navbar} style={{ height: scrollOutput }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: isPastThreshold ? 1 : 0,
          scale: isPastThreshold ? 1 : 0.5,
        }}
      >
        <div className={style.container}>
          <div className={style.name}>
            <img className={style.avatar} src="./img/avatar.png" alt="" />
            <div className={style.prof}>Frontend Dev</div>
          </div>
          <div className={style.links}>
            {linksRender.map((link) => {
              return <Link key={link} link={link} height="30px" />;
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
