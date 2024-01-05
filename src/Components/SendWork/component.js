import style from "./style/style.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export const SendWork = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={style.main}>
      <div className={style.text}>Наведи курсор на текст или тапни 👇</div>
      <motion.div
        className={style.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          Frontend разработчик - с навыками, готовый писать сложную архитиктуру,
          решая проблемы Вашего бизнеса, за Ваши деньги 💸
        </p>
      </motion.div>

      <div className={style.body}>
        <p>
          Я <span>frontend</span> разработчик с сильным желанием создавать
          впечатляющий цифровой опыт пользователей
        </p>
      </div>
    </main>
  );
};
