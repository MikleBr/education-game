import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TextTask from '../components/Task/TextTask';
import SelectTasks from '../components/Task/SelectTask';
import { doc, getDoc, increment } from 'firebase/firestore';
import { db } from '../firebase/init';
import { useAuth } from '../hooks/useAuth';

const Test = () => {
  const navigate = useNavigate();
  const { id: testId } = useParams();

  const [error, setError] = useState(false);
  const [currentTask, setCurrentTask] = useState();
  const [currentTest, setCurrentTest] = useState(null);

  const { userData, updateUserData } = useAuth();

  useEffect(() => {
    const getTest = async () => {
      try {
        const testRef = doc(db, 'tests', testId);
        const testDoc = await getDoc(testRef);
        const testData = testDoc.data();
        const tasksRefs = testData.tasks;

        const promisesTaskDocs = tasksRefs.map(taskRef => {
          return getDoc(taskRef);
        });

        const tasks = (await Promise.all(promisesTaskDocs)).map(task =>
          task.data()
        );

        setCurrentTask(tasks[0]);
        setCurrentTest({
          id: testDoc.id,
          tasks: tasks,
          rating: testData.rating,
        });
      } catch (error) {
        console.log(error);
      }
    };

    getTest();
  }, [testId]);

  const onSubmitTask = async answer => {
    const formattedAnswer = currentTask.answers
      ? answer
      : answer.toLocaleLowerCase().trim();
    if (currentTask.rightAnswer.includes(formattedAnswer)) {
      setError(false);

      const editedTask = currentTest.tasks.find(
        task => task.questionText === currentTask.questionText
      );
      editedTask.completed = true;

      const uncompletedTask = currentTest.tasks.find(task => !task.completed);
      if (uncompletedTask) {
        setCurrentTask(uncompletedTask);
      } else {
        try {
          await updateUserData({
            completedTests: [...userData?.completedTests, currentTest.id],
            rating: increment(currentTest.rating),
          });
          navigate(`/tests/${testId}/honor`);
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      setError(true);
    }
  };

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
