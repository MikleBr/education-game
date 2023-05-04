import styles from "./WrapperHonorMainPage.module.scss";
import Question from "../../assets/image/questionHonor.svg";
const WrapperHonorMainPage = ({ title, isOpen }) => {
  return (
    <>
      {isOpen ? (
        <button className={styles.honorText}>{title}</button>
      ) : (
        <button className={styles.honorQuestion}>
          <img src={Question} /> //заменить картинку
        </button>
      )}
    </>
  );
};

export default WrapperHonorMainPage;
