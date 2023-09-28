import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Lupa_Password from "./Components/Lupa_Password";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lupa_password" element={<Lupa_Password />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
