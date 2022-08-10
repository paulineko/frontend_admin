import React from 'react';
import './App.css';
import Authorization from "./pages/authorization.js";
import Header from './pages/header';
import Registration from './pages/registration';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authorization />} exact />
        <Route path="/registration" element={<Registration />} />
        <Route path="/authorization" element={<Authorization />} />
      </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
