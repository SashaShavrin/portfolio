import style from "./style/style.module.css";
import { motion } from "framer-motion";
import { perspective, slideIn } from "./anim";

const links = [
  {
    title: "Main",
  },
  {
    title: "Stack",
    children: 4,
  },
  {
    title: "Expirience",
    children: 5,
  },
  {
    title: "Works",
    children: 6,
  },
  {
    title: "Send Me",
    children: 7,
  },
];

const footerLinks = [
  {
    title: "Telegram",
    href: "https://t.me/+79519417777",
  },
  {
    title: "Discord",
    href: "https://discord.com/channels/@me/1136377764266655874",
  },
  {
    title: "GitHub",
    href: "https://github.com/SashaShavrin",
  },
  {
    title: "WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=79519417777&text&app_absent=0",
  },
];

export default function Nav({ mainRef, toggleMenu }) {
  return (
    <div className={style.nav}>
      <div className={style.body}>
        {links.map((link, index) => {
          const { title, href } = link;
          return (
            <div key={index} className={style.linkContainer}>
              <motion.a
                href={href}
                custom={index}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
                onClick={() => {
                  console.log(mainRef.current.children);
                  if (link.title === "Main") {
                    mainRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  } else {
                    mainRef.current.children[link.children]?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                  setTimeout(() => toggleMenu(), 600);
                }}
              >
                {title}
              </motion.a>
            </div>
          );
        })}
      </div>
      <motion.div className={style.footer}>
        {footerLinks.map((link, index) => {
          const { title } = link;
          return (
            <a
              variants={slideIn}
              custom={index}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${index}`}
              href={link.href}
              target="black"
            >
              {title}
            </a>
          );
        })}
      </motion.div>
    </div>
  );
}
