import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/Home.page";
import "./assets/styles/main.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
