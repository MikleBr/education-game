import honors from "../../data/honors";
import WrapperHonorForMainPage from "./WrapperHonorMainPage";

const HonorsMainPage = () => {
  return (
    <div>
      {honors.map((honor) => {
        return <WrapperHonorForMainPage {...honors} key={honor.numberHonor} />;
      })}
    </div>
  );
};

export default HonorsMainPage;
