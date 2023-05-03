import { useState } from 'react';

import monsterHead from '../../assets/image/monsterHead.svg';
import styles from './SignInForm.module.scss';
import { Link } from 'react-router-dom';

function SignInForm({ onSubmit }) {
  const [data, setData] = useState({
    login: '',
    password: '',
  });

  const handleFormSubmit = event => {
    event.preventDefault();
    onSubmit(data);
  };

  const changeValueInput = (event, name) => {
    setData({ ...data, [name]: event.target.value });
  };

  return (
    <div className={styles.signinContainer}>
      <div className={styles.containerLink}>
        <Link to="/auth/signup" className={styles.link}>
          Регистрация
        </Link>
      </div>

      <div className={styles.containerForm}>
        <img src={monsterHead} className={styles.imgMonsterHead} />
        <form onSubmit={handleFormSubmit} className={styles.formSign}>
          <input
            placeholder="Введите логин"
            type="text"
            className={styles.inputForm}
            value={data.login}
            onChange={event => changeValueInput(event, 'login')}
            required
          ></input>
          <input
            type="password"
            placeholder="Введите пароль"
            className={styles.inputForm}
            value={data.password}
            onChange={event => changeValueInput(event, 'password')}
            required
          ></input>
          <button type="submit" className={styles.submitForm}>
            Вход
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
