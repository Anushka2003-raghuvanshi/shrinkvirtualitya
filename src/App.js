import './App.css';
import Navbar from './component/Navbar';
import Loweranimation from './component/Loweranimation';
import React, { useState } from 'react';
import About from './component/About';
import Alert from './component/Alert';


import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState("white");
  const [alert, setAlert] = useState(null);
  
  const [color, setColor] = useState("white");

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "white") {
      setMode("dark");
      showAlert("Dark mode has been enabled", "warning");
    } else {
      setMode("white");
      showAlert("White mode has been enabled", "warning");
    }
  };

  const colorHandle = (color2) => {
    setColor(color2);
  };

  return (
    <>
    <Navbar
          Title="Choose the Best"
          mode={mode}
          toggleMode={toggleMode}
          first="Home"
          colorHandle={colorHandle}
          link="AboutUs"
          anythingelse="ContactUs"
        />
         <Alert alert={alert} />
     
     <Router>
     
        
      <Routes>
      <Route path="/loweranimation" element={<Loweranimation mode={mode} color={color} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
