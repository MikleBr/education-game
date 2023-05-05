import honors from '../../data/honors';
import WrapperHonorForMainPage from './WrapperHonorMainPage';
import styles from './HonorsMainPage.module.scss';
const HonorsMainPage = () => {
  return (
    <div className={styles.containerHonors}>
      {honors.map(honor => {
        return (
          <WrapperHonorForMainPage
            title={honor.title}
            isOpen={honor.isOpen}
            key={honor.id}
          />
        );
      })}
    </div>
  );
};

export default HonorsMainPage;
