import styles from './MainFooterStartGame.module.scss';
import Monster from '../../assets/image/Monster.svg';

const MainFooterStartGame = ({ onStart }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={styles.wave}
      >
        <path
          fill="#009285"
          fill-opacity="1"
          d="M0,224L20,192C40,160,80,96,120,85.3C160,75,200,117,240,154.7C280,192,320,224,360,234.7C400,245,440,235,480,202.7C520,171,560,117,600,106.7C640,96,680,128,720,160C760,192,800,224,840,202.7C880,181,920,107,960,80C1000,53,1040,75,1080,122.7C1120,171,1160,245,1200,256C1240,267,1280,213,1320,165.3C1360,117,1400,75,1420,53.3L1440,32L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
        ></path>
      </svg>
      <div className={styles.containerForBackground}>
        {window.innerWidth >= 480 ? (
          <div className={styles.containerContentMain}>
            <img src={Monster} />
            <div className={styles.descriptionGame}>
              <p className={styles.descriptionGameText}>
                В пути тебе встретится множество разных заданий, которые помогут
                мне понять твою планету. Ты готов?
              </p>
              <button
                onClick={onStart}
                className={styles.descriptionGameButton}
              >
                к заданиям
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.containerContentMainAdaptive}>
            <div className={styles.descriptionGameAdaptive}>
              <p className={styles.descriptionGameTextAdaptive}>
                В пути тебе встретится множество разных заданий, которые помогут
                мне понять твою планету. Ты готов?
              </p>
              <button
                onClick={onStart}
                className={styles.descriptionGameButtonAdaptive}
              >
                к заданиям
              </button>
            </div>
            <img src={Monster} />
          </div>
        )}
      </div>
    </>
  );
};

export default MainFooterStartGame;
