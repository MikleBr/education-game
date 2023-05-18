import styles from './HonorsMainPage.module.scss';
import MenuTestsList from '../MenuTests/MenuTestsList';

const HonorsMainPage = ({ tests }) => {
  return (
    <div className={styles.containerHonors}>
      <MenuTestsList tests={tests} />
    </div>
  );
};

export default HonorsMainPage;
