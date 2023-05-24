import MainInfoPersonal from '../components/Main/MainInfoPersonal';
import HonorsMainPage from '../components/Main/HonorsMainPage';
import MainHeaderStartGame from '../components/Main/MainHeaderStartGame';
import MainFooterStartGame from '../components/Main/MainFooterStartGame';

import { useEffect, useState } from 'react';

import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase/init';
import { collection, getDocs } from 'firebase/firestore';
const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tests, setTests] = useState([]);

  const navigate = useNavigate();
  const { userData } = useAuth();

  const signOut = () => {
    auth.signOut();
    navigate('/auth/signin', {
      replace: true,
    });
  };

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'tests'));
        const testsData = [];
        querySnapshot.forEach(doc => {
          const data = doc.data();
          testsData.push({
            id: doc.id,
            honor: data.honor,
            completed: userData?.completedTests.includes(doc.id),
          });
        });
        setTests(testsData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [userData?.completedTests]);

  return (
    <>
      <MainHeaderStartGame />

      <MainInfoPersonal
        userCountPoint={userData?.rating}
        username={userData?.name}
      >
        {isLoading && <div>Загрузка...</div>}
        {!isLoading && tests.length === 0 && <div>Пока что тестов нет ;(</div>}
        {!isLoading && tests.length !== 0 && <HonorsMainPage tests={tests} />}
      </MainInfoPersonal>

      <MainFooterStartGame />
    </>
  );
};

export default Main;
