import MainApp from "./MainPage/MainApp";
import AdminApp from "./AdminPage/AdminApp";
import ResultApp from "./ResultPage/ResultApp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/admin" element={<AdminApp />} />
        <Route path="/result/:mbti" element={<ResultApp />} />
      </Routes>
    </div>
  );
}

export default App;
