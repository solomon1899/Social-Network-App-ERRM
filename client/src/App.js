import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route className="container">
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
