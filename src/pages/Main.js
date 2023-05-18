import MainStartGame from '../components/Main/MainHeaderStartGame';
import MainInfoPersonal from '../components/Main/MainInfoPersonal';
import HonorsMainPage from '../components/Main/HonorsMainPage';
import MainFooterStartGame from '../components/Main/MainFooterStartGame';
import { tests } from '../data/tests';
import { useEffect, useState } from 'react';
import userInfo from '../data/userInfo';
const Main = () => {
  const [user, setUser] = useState({
    ...userInfo,
  });
  useEffect(() => {
    const rating = window.localStorage.getItem('rating') || 0;
    console.log('rating :', rating);
    setUser(prev => ({ ...prev, rating }));
    // window.localStorage.getItem('finishedTests');
  }, []);

  return (
    <>
      <MainStartGame />

      <MainInfoPersonal userCountPoint={user.rating} username={user.name}>
        <HonorsMainPage tests={tests} />
      </MainInfoPersonal>

      <MainFooterStartGame />
    </>
  );
};

export default Main;
