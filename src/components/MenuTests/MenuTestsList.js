import { useNavigate } from 'react-router-dom';
import styles from './MenuTestsList.module.scss';
import TestItem from './TestItem';

const MenuTestsList = ({ tests }) => {
  const navigate = useNavigate();

  const onOpenHonor = id => {
    navigate(`/tests/${id}/honor`);
  };

  const moveToTest = id => {
    navigate(`/tests/${id}`);
  };

  return (
    <div className={styles.container}>
      {tests.map(test => (
        <TestItem
          key={test.id}
          title={test.honor?.title}
          open={test.completed}
          onClick={() =>
            test.completed ? onOpenHonor(test.id) : moveToTest(test.id)
          }
        />
      ))}
    </div>
  );
};

export default MenuTestsList;
