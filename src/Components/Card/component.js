import style from "./style/style.module.css";
import { useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Chat } from "../Chat/component";

export const Card = ({ index, item, progress, range, targetScale }) => {
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={style.container}>
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
        className={style.card}
      >
        <div className={style.header}>
          <div>{item.title}</div>

          <div className={style.date}>| {item.date}</div>
        </div>

        <Chat item={item} />
      </motion.div>
    </div>
  );
};
