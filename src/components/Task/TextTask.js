import { useState } from 'react';
import TaskWrapper from './TaskWrapper';
import styles from './TextTask.module.scss';
import userInfo from '../../data/userInfo';

function TextTask({ text, error, onSubmit }) {
  const [userAnswer, setUserAnswer] = useState('');
  const handleFormSubmit = event => {
    event.preventDefault();
    onSubmit(userAnswer);
  };

  const handleChangeInput = event => {
    setUserAnswer(event.target.value);
  };

  return (
    <TaskWrapper
      userName={userInfo.name}
      userPoint={userInfo.rating}
      error={error}
      textTask={text}
      onSubmit={handleFormSubmit}
    >
      <input
        className={styles.userAnswerInput}
        type="text"
        value={userAnswer}
        onChange={handleChangeInput}
        placeholder="Твой ответ..."
      />
    </TaskWrapper>
  );
}

export default TextTask;
