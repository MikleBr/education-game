import { useState } from "react";
import TaskWrapper from "./TaskWrapper";
import styles from "./TaskText.module.scss";
function TaskText() {
  const [userAnswer, setUserAnswer] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(userAnswer);
  };

  const handleChangeInput = (event) => {
    setUserAnswer(event.target.value);
  };

  const userAnswerData = {
    userAnswer,
  };

  return (
    <TaskWrapper
      userName="Мария"
      userPoint={35}
      textTask="Текст задания"
      onSubmit={handleFormSubmit}
    >
      <input
        type="text"
        value={userAnswer}
        onChange={handleChangeInput}
        className={styles.userAnswerInput}
        placeholder="Твой ответ..."
      />
    </TaskWrapper>
  );
}

export default TaskText;
