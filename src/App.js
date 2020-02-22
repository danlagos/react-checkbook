import React from 'react';
import Navbar from './components/navbar.js';
import CheckingAccount from './components/checkingAccount/checkingAccount.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1> entry point </h1>
      <CheckingAccount />
    </div>
  );
}

export default App;
