
import './App.css';
import Welcome from "./components/Welcome";
import React from "react";
import Login from "./components/Login";
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom'
function App() {
  return (
      <Router>
          <Routes>
              <Route path='/' element={<Login/>} />
              <Route path='/Welcome' element={<Welcome/>} />
          </Routes>
      </Router>

  );
}

export default App;
