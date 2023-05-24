import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import SignInForm from '../components/Auth/SignInForm';
import { firebaseApp } from '../firebase/init';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const handleSignin = async data => {
    try {
      const auth = getAuth(firebaseApp);
      await signInWithEmailAndPassword(auth, data.login, data.password);
      navigate('/', {
        replace: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return <SignInForm onSubmit={handleSignin} />;
};

export default SignIn;
