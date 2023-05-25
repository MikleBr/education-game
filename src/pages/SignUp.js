import { createUserWithEmailAndPassword } from 'firebase/auth';
import SignUpForm from '../components/Auth/SignUpForm';
import { auth, db } from '../firebase/init';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';

const firebaseErrors = {
  'auth/weak-password': 'Пароль должен быть больше 5 символов',
  'auth/invalid-email': 'Некорректный email',
  'auth/email-already-in-use': 'Этот email занят',
};

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleCreate = async data => {
    setIsLoading(true);
    console.log('data :', data);
    try {
      const newUserData = await createUserWithEmailAndPassword(
        auth,
        data.login,
        data.password
      );
      await setDoc(doc(db, 'users', newUserData.user.uid), {
        rating: 0,
        name: data.name,
        surname: data.surname,
        completedTests: [],
      });
      navigate('/auth/signin', {
        replace: true,
      });
    } catch (error) {
      const errorCode = error.code;
      setError(firebaseErrors[errorCode] || 'Произошла ошибка');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <SignUpForm error={error} isLoading={isLoading} onSubmit={handleCreate} />
  );
};

export default SignUp;
