import styles from "./HonorMessage.module.scss";
import Monster from "../assets/image/Monster.svg";
import Ufo from "../assets/image/ufo.svg";
import smallConfetti from "../assets/image/smallConfetti.svg";
import bigConfetti from "../assets/image/bigConfetti.svg";
import greenMessage from "../assets/image/greenMessage.svg";
import { useNavigate, useParams } from "react-router-dom";
import { tests } from "../data/tests";

const HonorMessage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentTest = tests.find((test) => test.id === +id);

  const honor = currentTest.honor;
  const honorTitle = honor.title;
  const honorText = honor.text;

  return (
    <div style={{ display: "flex", paddingTop: "50px" }}>
      <div className={styles.containerUfoDesign}>
        <img src={Ufo} className={styles.elementUfo} />
        <img src={smallConfetti} className={styles.elementSmallConfetti} />
      </div>
      <div className={styles.containerContent}>
        <img src={Monster} className={styles.imgMonster} />
        <div className={styles.containerMessage}>
          <img src={greenMessage} />
          <div className={styles.containerMessageText}>
            <h1 className={styles.MessageTitle}>{honorTitle}</h1>
            <p className={styles.messageText}>{honorText}</p>
          </div>
          <div className={styles.containerButtonRout}>
            <button
              onClick={() => {
                navigate("/");
              }}
              className={styles.buttonRout}
            >
              Вернуться на главную
            </button>
          </div>
        </div>
      </div>
      <img src={bigConfetti} className={styles.elementBigConfetti} />
    </div>
  );
};

export default HonorMessage;
