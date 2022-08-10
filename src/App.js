import React from 'react';
import './App.css';
import Authorization from "./pages/authorization.js";
import Header from './pages/header';
import Registration from './pages/registration';

function App() {
  return (
    <div className="App">
      <Header />
      <Authorization/>
      <Registration/>
    </div>
  );
}

export default App;
