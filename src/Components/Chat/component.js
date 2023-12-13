import style from "./style/style.module.css";

export const Chat = ({ item, noShowButton }) => {
  return (
    <div className={style.container}>
      <div className={style.chat}>
        {item.chat?.map((str, index) => {
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
    </div>
  );
};
