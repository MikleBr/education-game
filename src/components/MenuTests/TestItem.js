import styles from "./TestItem.module.scss";
import Question from "../../assets/image/questionHonor.png";

const TestItem = ({ title, open, onClick }) => {
  if (open) {
    return (
      <button className={styles.honorText} onClick={onClick}>
        {title}
      </button>
    );
  }

  return (
    <button className={styles.honorQuestion} onClick={onClick}>
      <img src={Question} alt="question" />
    </button>
  );
};

export default TestItem;
