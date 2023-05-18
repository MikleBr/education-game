import { useNavigate, useParams } from 'react-router-dom';
import { tests } from '../data/tests';
import { useEffect, useState } from 'react';
import TextTask from '../components/Task/TextTask';
import SelectTasks from '../components/Task/SelectTask';
import userInfo from '../data/userInfo';

const Test = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const currentTest = tests.find(test => test.id === +id);
  const [error, setError] = useState(false);

  const [currentTask, setCurrentTask] = useState();

  const onSubmitTask = answer => {
    const formattedAnswer = currentTask.answers
      ? answer
      : answer.toLocaleLowerCase().trim();
    console.log(formattedAnswer);
    if (currentTask.rightAnswer.includes(formattedAnswer)) {
      setError(false);

      if (currentTask.answers) {
        userInfo.rating += 5;
      } else {
        userInfo.rating += 10;
      }
      window.localStorage.setItem('rating', userInfo.rating);

      const editedTask = currentTest.tasks.find(
        task => task.questionText === currentTask.questionText
      );
      editedTask.completed = true;

      const uncompletedTask = currentTest.tasks.find(task => !task.completed);
      if (uncompletedTask) {
        setCurrentTask(uncompletedTask);
      } else {
        currentTest.completed = true;
        const finishedTests = tests
          .filter(test => test.completed)
          .map(test => test.id)
          .join(',');
        console.log('finishedTest :', finishedTests);
        window.localStorage.setItem('finishedTests', finishedTests);
        navigate(`/tests/${id}/honor`);
      }
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    setCurrentTask(currentTest.tasks[0]);
  }, []);

  if (!currentTask) {
    return null;
  }

  return (
    <>
      {currentTask.answers ? (
        <SelectTasks
          error={error}
          text={currentTask.questionText}
          answers={currentTask.answers}
          onSubmit={onSubmitTask}
        />
      ) : (
        <TextTask
          error={error}
          text={currentTask.questionText}
          onSubmit={onSubmitTask}
        />
      )}
    </>
  );
};

export default Test;
