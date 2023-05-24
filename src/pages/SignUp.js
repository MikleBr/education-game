import {
  createUserWithEmailAndPassword,
  updateCurrentUser,
  updateProfile,
} from 'firebase/auth';
import SignUpForm from '../components/Auth/SignUpForm';
import { auth, db } from '../firebase/init';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
const SignUp = () => {
  const navigate = useNavigate();
  const handleCreate = async data => {
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
      console.log(error);
    }
  };
  return <SignUpForm onSubmit={handleCreate} />;
};

export default SignUp;
