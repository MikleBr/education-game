import styles from './HonorMessage.module.scss';
import Monster from '../assets/image/Monster.svg';
import Ufo from '../assets/image/ufo.svg';
import smallConfetti from '../assets/image/smallConfetti.svg';
import bigConfetti from '../assets/image/bigConfetti.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/init';

const HonorMessage = () => {
  const { id: testId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [currentTest, setCurrentTest] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const getTest = async () => {
      try {
        const testRef = doc(db, 'tests', testId);
        const testDoc = await getDoc(testRef);
        const test = testDoc.data();
        if (test) {
          setCurrentTest({
            id: testDoc.id,
            honor: test.honor,
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getTest();
  }, [testId]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '0px',
      }}
    >
      <div className={styles.containerUfoDesign}>
        <img src={Ufo} className={styles.elementUfo} />
        <img src={smallConfetti} className={styles.elementSmallConfetti} />
      </div>
      <div className={styles.containerContent}>
        <img src={Monster} className={styles.imgMonster} />
        <div className={styles.containerMessage}>
          <div className={styles.containerMessageText}>
            {isLoading && <p>Загрузка подсказки</p>}
            {!isLoading && currentTest?.honor && (
              <>
                <h1 className={styles.MessageTitle}>
                  {currentTest.honor.title}
                </h1>
                <p className={styles.messageText}>{currentTest.honor.text}</p>
              </>
            )}
          </div>
          <button
            onClick={() => {
              navigate('/');
            }}
            className={styles.buttonRoute}
          >
            Вернуться на главную
          </button>
        </div>
      </div>

      <img src={bigConfetti} className={styles.elementBigConfetti} />
    </div>
  );
};

export default HonorMessage;
