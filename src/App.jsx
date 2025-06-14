import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./static/pages/login.jsx";
import Home from "./static/pages/home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
