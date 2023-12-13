import React, { useRef } from "react";
import styles from "./style/style.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

export const Expirience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.05, 1]);

  return (
    <div className={styles.container}>
      <motion.div style={{ scale }}>
        <motion.div
          ref={ref}
          style={{ scale }}
          className={styles.image_container}
        >
          <img className={styles.image} src="../img/gif.gif" alt="" />
        </motion.div>
        <motion.div ref={ref} className={styles.image_container2}>
          <img className={styles.image2} src="../img/gif4.gif" alt="" />
        </motion.div>
        <div className={styles.description}>
          <div className={styles.column}>
            Придерживаюсь чистого кода и компонентного подхода. Легко
            взаимодействую с коллегами и бизнес процессами.
          </div>
          <div className={styles.column}>
            Легкий на подъем, гибкий, продуктивный, готовый создавать лучшие
            продукты для бизнеса в вашей компании.
          </div>
        </div>
      </motion.div>
    </div>
  );
};
