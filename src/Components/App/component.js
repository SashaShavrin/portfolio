import { Navbar } from "../Navbar/Navbar";
import { Main } from "../Main/component";
import { ParallaxText } from "../ParalaxText/component";
import { ParalaxStack } from "../ParalaxStack/component";
import { Expirience } from "../Expirience/component";
import style from "./style/style.module.css";
import Hello from "../Hello/component";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Cards from "../Cards/component";
import { Menu } from "../Menu/component";
import { SendWork } from "../SendWork/component";

const linksRender = [
  { name: "telegram", href: "https://t.me/+79519417777" },
  {
    name: "discord",
    href: "https://discord.com/channels/@me/1136377764266655874",
  },
  { name: "github", href: "https://github.com/SashaShavrin" },
];

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  const mainRef = useRef(null);

  return (
    <div ref={mainRef}>
      <AnimatePresence mode="wait">{isLoading && <Hello />}</AnimatePresence>
      <Navbar linksRender={linksRender} />
      <Menu mainRef={mainRef} />
      <Main linksRender={linksRender} />
      <div className={style.paralax_text}>
        <ParallaxText baseVelocity={-3}>
          ИНТЕРФЕЙС ☺ ДИЗАЙН ★ ФРОНТЕНД ♡ SPA ПРИЛОЖЕНИЯ ⛮ ЧИСТЫЙ КОД ❀ PWA ✧
        </ParallaxText>
        <ParallaxText baseVelocity={-2}>
          ИНТЕРФЕЙС ☺ ДИЗАЙН ★ ФРОНТЕНД ♡ SPA ПРИЛОЖЕНИЯ ⛮ ЧИСТЫЙ КОД ❀ PWA ✧
        </ParallaxText>
      </div>
      <ParalaxStack />
      <Expirience />
      <Cards />
      <SendWork />
    </div>
  );
};
