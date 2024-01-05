import style from "./style/style.module.css";

export const Chat = ({ item }) => {
  return (
    <div className={style.container}>
      {item.chat?.map((str) => {
        return (
          <>
            <div className={style.question_container}>
              <span className={style.question}>{str.question}</span>
            </div>
            <div className={style.answer_container}>
              <span className={style.answer}>{str.answer}</span>
            </div>
          </>
        );
      })}
    </div>
  );
};
