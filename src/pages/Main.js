import MainStartGame from "../components/Main/MainStartGame";
import MainInfoPersonal from "../components/Main/MainInfoPersonal";
import userInfo from "../data/userInfo";
import HonorsMainPage from "../components/Main/HonorsMainPage";
const Main = () => {
  return (
    <>
      {/* <MainStartGame />

      <div>
        <MainInfoPersonal
          userCountPoint={userInfo.userCountPoint}
          username={userInfo.username}
          userLevel={userInfo.userLevel}

          //создать папку data, создать в доке userInfo.js массив объектов со свойствами username, userCountPoint, userLevel */}
      {/* /> */}
      {/* </div> */}
      <HonorsMainPage />
    </>
  );
};

export default Main;
