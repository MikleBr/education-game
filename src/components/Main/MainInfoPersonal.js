import styles from "./MainInfoPersonal.module.scss";
import UfoBottom from "../../assets/image/ufo.svg";
import UfoTop from "../../assets/image/ufo.svg";
import MonsterHead from "../../assets/image/monsterHead.svg";
import StarPoint from "../../assets/image/starPoint.svg";
import StarOrange from "../../assets/image/starOrange.svg";
import StarOrangeRight from "../../assets/image/StarOrangeRight.svg";
import { tests } from "../../data/tests";

const userLevels = {
  1: "Новичок Планеты",
  2: " Знаток Планеты",
  3: "Путешественник Мира",
  4: "Мудрец Планеты",
};

const MainInfoPersonal = ({ userCountPoint, username, children }) => {
  const userLevel =
    userLevels[tests.filter((test) => test.completed).length || 1];

  return (
    <div className={styles.MainInfoPersonal}>
      <div className={styles.designElementBottom}>
        <img src={UfoBottom} />
      </div>

      <div className={styles.containerInfoPersonal}>
        <img src={MonsterHead} className={styles.imgMonster} />
        <div className={styles.infoPersonalCard}>
          <div className={styles.containerUsername}>
            <div className={styles.containerPoint}>
              <img src={StarPoint} className={styles.imgPoint} />
              <p className={styles.numberPoint}>{userCountPoint}</p>
            </div>
            <p className={styles.usernameText}>{username}</p>
          </div>
          <div className={styles.containerUserLevel}>
            <img src={StarOrange} />
            <p className={styles.userLevelText}>{userLevel}</p>
            <img src={StarOrangeRight} />
          </div>
          <div className={styles.containerHonors}>{children}</div>
        </div>
      </div>

      <div className={styles.designElementTop}>
        <img src={UfoTop} />
      </div>
    </div>
  );
};

export default MainInfoPersonal;
