import starPoint from "../../assets/image/starPoint.svg";
import monsterEye from "../../assets/image/monsterEye.svg";
import styles from "./TaskWrapper.module.scss";
function TaskWrapper({ userName, userPoint, textTask, children, onSubmit }) {
  return (
    <div className={styles.TaskWrapper}>
      <div className={styles.containerUser}>
        {/* <p className={styles.userName}>{userName}</p> */}
        <div className={styles.containerPoint}>
          <img src={starPoint} className={styles.imgPoint} />
          <p className={styles.numberPoint}>{userPoint}</p>
        </div>
      </div>

      <form onSubmit={onSubmit} className={styles.containerTask}>
        <img src={monsterEye} />
        <div className={styles.containerTextTask}>
          <p className={styles.textTask}>{textTask}</p>
        </div>

        <div className={styles.containerAnswer}>{children}</div>

        <button type="submit" className={styles.submitTask}>
          Отправить
        </button>
      </form>
    </div>
  );
}
export default TaskWrapper;
