import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarPage from './components/NavbarPage'
import Meme from './container/Meme'

function App() {
  return (
    <div className="App">
      <NavbarPage />
      <Meme />
    </div>
  );
}

export default App;
