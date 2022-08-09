import React from 'react';
import './App.css';
import Authorization from "./pages/authorization.js";
import Header from './pages/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Authorization/>
    </div>
  );
}

export default App;
