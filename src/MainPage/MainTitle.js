import { Link } from "react-router-dom";
import "../styles/MainPage/MainTitle.scss";

const MainTitle = () => {
  return (
    <div className="header">
      <h1>MBTI</h1>
      <Link to="/admin">
        <button>관리자 페이지</button>
      </Link>
    </div>
  );
};

export default MainTitle;
