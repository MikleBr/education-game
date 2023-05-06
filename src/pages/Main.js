import MainStartGame from "../components/Main/MainHeaderStartGame";
import MainInfoPersonal from "../components/Main/MainInfoPersonal";
import userInfo from "../data/userInfo";
import HonorsMainPage from "../components/Main/HonorsMainPage";
import MainFooterStartGame from "../components/Main/MainFooterStartGame";
const Main = () => {
  return (
    <>
      <MainStartGame />

      <MainInfoPersonal
        userCountPoint={userInfo.userCountPoint}
        username={userInfo.username}
        userLevel={userInfo.userLevel}
      >
        <HonorsMainPage />
      </MainInfoPersonal>

      <MainFooterStartGame />
    </>
  );
};

export default Main;
