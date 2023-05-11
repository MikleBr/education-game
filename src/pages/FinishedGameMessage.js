import styles from "./FinishedGameMessage.module.scss";
import Star from "../assets/image/star.svg";
import Monster from "../assets/image/Monster.svg";
import greenMessage from "../assets/image/greenMessage.svg";

const FinishedGameMessage = () => {
  return (
    <div className={styles.finishedGameMessage}>
      <div className={styles.containerButtonRout}>
        <img src={Star} />
        <button className={styles.buttonRout}>Выйти из игры</button>
      </div>
      <div className={styles.containerContent}>
        <img src={Monster} />
        <div className={styles.containerMessage}>
          <img className={styles.backgroundMessage} src={greenMessage} />
          <div className={styles.containerMessageText}>
            <h1 className={styles.messageTitle}>
              Дорогой друг, <br /> спасибо за помощь!
            </h1>
            <p className={styles.messageText}>
              Ты достиг самого высокого уровня - Мудреца Планеты и готов к
              самостоятельным открытиям! Планета Земля хранит в себе ещё
              множество тайн и секретов, которые только тебе под силу разгадать,
              надеюсь! Я отправляюсь домой и желаю тебе яркого лета!
            </p>
          </div>
        </div>
      </div>
      <div className={styles.designCircle}>
        <div className={styles.circleBig}></div>
        <div className={styles.circleMiddle}></div>
        <div className={styles.circleSmall}></div>
      </div>
    </div>
  );
};

export default FinishedGameMessage;
