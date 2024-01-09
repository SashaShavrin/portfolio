import { motion, useScroll, useTransform } from "framer-motion";
import style from "./style/style.module.css";
import { useRef } from "react";
import { Link } from "../Link/component";

export const Main = ({ linksRender }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.95, 1]);

  return (
    <motion.div className={style.container}>
      <div className={style.links}>
        {linksRender.map((link) => {
          return <Link key={link} link={link} height="40px" />;
        })}
      </div>

      <div className={style.inner}>
        <motion.div className={style.motion}>
          <div className={style.image}></div>
        </motion.div>
        <motion.div ref={ref} style={{ scale }}>
          <div className={style.content}>
            <motion.div className={style.motion_round}>
              <div
                className={style.circle}
                style={{ rotate: scrollYProgress + "deg" }}
              >
                <img src="./img/code.svg" alt="" />
              </div>
            </motion.div>

            <div className={style.prof}>Frontend dev</div>
            <div className={style.hello}>👋 Привет! Меня зовут Саша</div>

            <div className={style.info}>
              Уже 3 года я активно увлечен разработкой и дизайном интерфейсов
              приложений. Очень горю этим делом ⚡, готовый творить, работать и
              создавать
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
