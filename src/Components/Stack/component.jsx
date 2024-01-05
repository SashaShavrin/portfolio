import classNames from "classnames";
import style from "./style/style.module.css";

export const Stack = ({ stackImages }) => {
  return (
    <div className={style.container}>
      {stackImages.map((src, i) => {
        return (
          <div key={i} className={style.item}>
            <div className={style.block}>
              {src !== "Hooks" &&
                src !== "ООП" &&
                src !== "SPA" &&
                src !== "PWA" && (
                  <img
                    className={classNames(
                      style.img,
                      src === "React" && style.rotate
                    )}
                    src={`./img/${src}.svg`}
                    alt=""
                  />
                )}

              <div className={style.text}>{src}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
