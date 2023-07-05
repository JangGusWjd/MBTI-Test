import { Link } from "react-router-dom";

const AdminTitle = () => {
  return (
    <div className="header">
      <h1>MBTI</h1>
      <Link to="/">
        <button>홈</button>
      </Link>
    </div>
  );
};

export default AdminTitle;
