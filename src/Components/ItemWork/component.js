// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Chat } from "../Chat/component";

// export const ItemWork = ({ item, style }) => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//   });

//   const scale = useTransform(scrollYProgress, [1, 0.5, 0], [0.98, 0.99, 1]);

//   return (
//     <motion.div className={style.item}>
//       <motion.div className={style.item_title}>
//         <div className={style.name}>{item.title}</div>
//         <div className={style.date}>{item.date}</div>
//       </motion.div>
//       <motion.div className={style.chat} ref={ref} style={{ scale }}>
//         <Chat item={item} />
//       </motion.div>
//     </motion.div>
//   );
// };
