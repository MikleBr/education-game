import styles from "./MainFooterStartGame.modules.scss";
import GreenWave from "../../assets/image/color-green-wave.svg";
import Monster from "../../assets/image/Monster.svg";

const MainFooterStartGame = () => {
  return (
    <>
      <img src={GreenWave} />
      <div className={styles.containerContentMain}>
        <img src={Monster} />
        <div className={styles.descriptionGame}>
          <p className={styles.descriptionGameText}>
            В пути тебе встретится множество разных заданий, которые помогут мне
            понять твою планету. Ты готов?
          </p>
          <button className={styles.descriptionGameButton}>к заданиям</button>
        </div>
      </div>
    </>
  );
};

export default MainFooterStartGame;
