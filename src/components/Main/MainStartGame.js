import styles from "./MainStartGame.module.scss";
import PurpleWave from "../../assets/image/color-purple-wave.svg";
import Monster from "../../assets/image/Monster.svg";
const MainStartGame = () => {
  return (
    <>
      <div className={styles.containerContent}>
        <div className={styles.containerContentLink}>
          <div className={styles.containerDesignCircle}>
            <div className={styles.designCircleBig}></div>
            <div className={styles.designCircleSmall}></div>
          </div>
          <a href="#">Выйти из игры</a>
        </div>
        <div className={styles.containerContentMain}>
          <img src={Monster} />
          <div className={styles.descriptionGame}>
            <p className={styles.descriptionGameText}>
              Привет, меня зовут Мунк! Я прилетел изучить планету Земля, но это
              оказалось сложной миссией. Каждый день я сталкиваюсь с трудностями
              и только ты можешь помочь мне ответить на все вопросы и решить
              загадки. За каждое решенное задание ты будешь получать баллы,
              повышая свой уровень. Также в знак благодарности, я буду тебе
              предсказывать будущее и раскрывать тайны своей планеты!
            </p>
            <button className={styles.descriptionGameButton}>Помочь</button>
          </div>
        </div>
      </div>
      <img src={PurpleWave} />
    </>
  );
};

export default MainStartGame;
