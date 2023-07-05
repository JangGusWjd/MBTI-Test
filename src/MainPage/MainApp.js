import "../styles/MainPage/MainApp.scss";
import MainTitle from "./MainTitle";
import MbtiCh from "./MbtiCh";
import Footer from "./Footer";

const MainApp = () => {
  return (
    <div className="PageBody">
      <MainTitle />
      <MbtiCh />
      <Footer />
    </div>
  );
};

export default MainApp;
