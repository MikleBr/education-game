import styles from './WrapperHonorMainPage.module.scss';
import Question from '../../assets/image/questionHonor.png';

const WrapperHonorMainPage = ({ title, open, onClick }) => {
  return (
    <>
      {open ? (
        <button className={styles.honorText}>{title}</button>
      ) : (
        <button onClick={onClick} className={styles.honorQuestion}>
          <img src={Question} alt="" />
        </button>
      )}
    </>
  );
};

export default WrapperHonorMainPage;
