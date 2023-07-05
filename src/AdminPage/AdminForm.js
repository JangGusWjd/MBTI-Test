import "../styles/AdminPage/AdminForm.scss";
import { useState } from "react";
import AdminMbtiCh from "./AdminMbtiCh";

const AdminForm = () => {
  const [newInfo, setNewInfo] = useState("");

  const handleInputChange = (e) => {
    setNewInfo(e.target.value);
  };

  return (
    <div className="admin-form">
      <h1>성향 추가</h1>
      <input type="text" value={newInfo} onChange={handleInputChange} />
      <AdminMbtiCh inputValue={newInfo} />
    </div>
  );
};

export default AdminForm;
