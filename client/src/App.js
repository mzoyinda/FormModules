import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Dashboard from './views/Dashboard';

function App() {
  return (
    <div className="App">
 <Router>
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="register" element={<SignUp />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
  </Router>
    </div>
  );
}

export default App;
