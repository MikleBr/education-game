import monsterHead from "../../assets/image/monsterHead.svg";
import star from "../../assets/image/star.svg";
import styles from "./SignInForm.module.scss";
import { useState } from "react";
function SignInForm({ onSubmit }) {
  const [data, setData] = useState({
    login: "",
    password: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(data);
  };

  const changeValueInput = (event, name) => {
    setData({ ...data, [name]: event.target.value });
  };

  const handleCreate = {
    login: data.login,
    password: data.password,
  };

  return (
    <>
      <div className={styles.containerLink}>
        <a href="#" className={styles.link}>
          Регистрация
        </a>
      </div>

      <div className={styles.containerForm}>
        <img src={monsterHead} className={styles.imgMonsterHead} />
        <form onSubmit={handleFormSubmit} className={styles.formSign}>
          <input
            placeholder="Введите логин"
            type="text"
            className={styles.inputForm}
            value={data.login}
            onChange={(event) => changeValueInput(event, "login")}
            required
          ></input>
          <input
            type="password"
            placeholder="Введите пароль"
            className={styles.inputForm}
            value={data.password}
            onChange={(event) => changeValueInput(event, "password")}
            required
          ></input>
          <button type="submit" className={styles.submitForm}>
            Вход
          </button>
        </form>
      </div>
    </>
  );
}

export default SignInForm;
