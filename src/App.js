import React from 'react';
import './App.css';
import Authorization from "./pages/authorization.js";
import Header from './pages/header';
import Registration from './pages/registration';
import Pagelogin from './pages/page-login';
import Sidebar from './pages/sidebar';
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
        <Route path="/page-login" element={<Pagelogin />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
