import starPoint from "../../assets/image/starPoint.svg";
import monsterEye from "../../assets/image/monsterEye.svg";
import styles from "./TaskWrapper.module.scss";
import { useNavigate } from "react-router-dom";
function TaskWrapper({
  userName,
  error,
  userPoint,
  textTask,
  children,
  onSubmit,
}) {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.containerUser}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className={styles.containerPoint}>
            <img src={starPoint} className={styles.imgPoint} />
            <p className={styles.numberPoint}>{userPoint}</p>
          </div>
          <a
            onClick={() => {
              navigate("/");
            }}
            className={styles.linkToMain}
          >
            Вернуться на главную
          </a>
        </div>
      </div>

      <form onSubmit={onSubmit} className={styles.containerTask}>
        <img src={monsterEye} />
        <div className={styles.containerTextTask}>
          <p className={styles.textTask}>{textTask}</p>
        </div>
        {error && (
          <div className={styles.error}>
            Неправильный ответ ;( Попробуй еще раз!
          </div>
        )}

        {children}

        <button type="submit" className={styles.submitTask}>
          Отправить
        </button>
      </form>
    </div>
  );
}
export default TaskWrapper;
