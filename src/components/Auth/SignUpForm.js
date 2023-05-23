import { Link, useNavigate } from "react-router-dom";
import monsterHead from "../../assets/image/monsterHead.svg";
import star from "../../assets/image/star.svg";
import styles from "./SignUpForm.module.scss";
import { useState } from "react";
function SignUp({ onSubmit }) {
  const navigate = useNavigate();
  const [data, setData] = useState({
    login: "",
    password: "",
    name: "",
    surname: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(data);
    navigate("/");
  };

  const changeValueInput = (event, name) => {
    setData({ ...data, [name]: event.target.value });
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerLink}>
        <Link to="/auth/signin" className={styles.link}>
          Вход
        </Link>
      </div>

      <div className={styles.containerForm}>
        <img src={star} className={styles.imgStar} />
        <img src={monsterHead} className={styles.imgMonsterHead} />
        <form onSubmit={handleFormSubmit} className={styles.formSign}>
          <input
            placeholder="Введите имя"
            type="text"
            className={styles.inputForm}
            value={data.name}
            onChange={(event) => changeValueInput(event, "name")}
            required
          ></input>
          <input
            placeholder="Введите фамилию"
            type="text"
            className={styles.inputForm}
            value={data.surname}
            onChange={(event) => changeValueInput(event, "surname")}
            required
          ></input>
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
            Регистрация
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
