import styles from "./MainInfoPersonal.module.scss";
import UfoBottom from "../../assets/image/ufo-mainPage.svg";
import UfoTop from "../../assets/image/ufo-top-mainPage.svg";
import MonsterHead from "../../assets/image/monsterHead.svg";
import StarPoint from "../../assets/image/starPoint.svg";
import StarOrange from "../../assets/image/starOrange.svg";
import StarOrangeRight from "../../assets/image/StarOrangeRight.svg";

const MainInfoPersonal = ({
  userCountPoint,
  username,
  userLevel,
  children,
}) => {
  return (
    <>
      <div className={styles.MainInfoPersonal}>
        <div className={styles.designElementBottom}>
          <img src={UfoBottom} />
        </div>

        <div className={styles.containerInfoPersonal}>
          <img src={MonsterHead} />
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

        <div>
          <img src={UfoTop} />
        </div>
      </div>
    </>
  );
};

export default MainInfoPersonal;
