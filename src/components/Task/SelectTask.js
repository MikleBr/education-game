import { useState } from 'react';
import TaskWrapper from './TaskWrapper';
import styles from './TextTask.module.scss';
import { useAuth } from './../../hooks/useAuth';

function SelectTasks({ text, error, answers, onSubmit }) {
  const [userAnswer, setUserAnswer] = useState('');

  const { userData } = useAuth();

  const handleFormSubmit = event => {
    event.preventDefault();
    onSubmit(userAnswer);
  };

  return (
    <TaskWrapper
      userName={userData?.name}
      error={error}
      userPoint={userData?.rating}
      textTask={text}
      onSubmit={handleFormSubmit}
    >
      <div className={styles.selectTitle}>Варианты ответа:</div>
      <div className={styles.answersList}>
        {answers.map((answer, index) => (
          <button
            key={index}
            type="button"
            className={`${styles.selectTaskButton} ${
              userAnswer === answer ? styles.selectTaskButton_selected : ''
            }`}
            onClick={() => setUserAnswer(answer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </TaskWrapper>
  );
}

export default SelectTasks;
