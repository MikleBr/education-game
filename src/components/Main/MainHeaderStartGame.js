import styles from './MainHeaderStartGame.module.scss';
import Monster from '../../assets/image/Monster.svg';

import { auth } from '../../firebase/init';
import { useNavigate } from 'react-router-dom';
const MainStartGame = ({ onStart }) => {
  const navigate = useNavigate();
  const signOut = () => {
    auth.signOut();
    navigate('/auth/signin', {
      replace: true,
    });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerContentLink}>
          <div className={styles.containerDesignCircle}>
            <div className={styles.designCircleBig}></div>
            <div className={styles.designCircleSmall}></div>
          </div>
          <button className={styles.signoutButton} onClick={signOut}>
            Выйти из игры
          </button>
        </div>

        {window.innerWidth >= 920 ? (
          <div className={styles.containerContentMain}>
            <img src={Monster} alt="monster" className={styles.imgMonster} />
            <div className={styles.descriptionGame}>
              <p className={styles.descriptionGameText}>
                Привет, меня зовут Мунк! Я прилетел изучить планету Земля, но
                это оказалось сложной миссией. Каждый день я сталкиваюсь с
                трудностями и только ты можешь помочь мне ответить на все
                вопросы и решить загадки. За каждое решенное задание ты будешь
                получать баллы, повышая свой уровень. Также в знак
                благодарности, я буду тебе предсказывать будущее и раскрывать
                тайны своей планеты!
              </p>
              <button
                onClick={onStart}
                className={styles.descriptionGameButton}
              >
                Помочь
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.containerContentMainAdaptive}>
            <p className={styles.descriptionGameTextAdaptive}>
              Привет, меня зовут Мунк! Я прилетел изучить планету Земля, но это
              оказалось сложной миссией. Каждый день я сталкиваюсь с трудностями
              и только ты можешь помочь мне ответить на все вопросы и решить
              загадки. За каждое решенное задание ты будешь получать баллы,
              повышая свой уровень. Также в знак благодарности, я буду тебе
              предсказывать будущее и раскрывать тайны своей планеты!
            </p>
            <button
              onClick={onStart}
              className={styles.descriptionGameButtonAdaptive}
            >
              Помочь
            </button>

            <div className={styles.containerDesignCircleAdaptive}>
              <div style={{ display: 'flex' }}>
                <div className={styles.designCircleBigAdaptive}></div>
                <div className={styles.designCircleSmallAdaptive}></div>
              </div>
              <img
                src={Monster}
                alt="monster"
                className={styles.imgMonsterAdaptive}
              />
            </div>
          </div>
        )}
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={styles.wave}
      >
        <path
          fill="#9082E1"
          fill-opacity="1"
          d="M0,64L24,58.7C48,53,96,43,144,74.7C192,107,240,181,288,192C336,203,384,149,432,149.3C480,149,528,203,576,240C624,277,672,299,720,288C768,277,816,235,864,208C912,181,960,171,1008,160C1056,149,1104,139,1152,165.3C1200,192,1248,256,1296,277.3C1344,299,1392,277,1416,266.7L1440,256L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default MainStartGame;
