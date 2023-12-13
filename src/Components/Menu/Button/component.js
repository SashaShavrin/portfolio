import { motion } from "framer-motion";
import style from "./style/style.module.css";

export default function Button({ isActive, toggleMenu }) {
  return (
    <div className={style.button}>
      <motion.div
        className={style.slider}
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className={style.el}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Menu" />
        </div>
        <div
          className={style.el}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label }) {
  return (
    <div className={style.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
