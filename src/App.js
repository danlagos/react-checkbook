import React, { Component } from 'react';
import Navbar from './components/navbar.js';
// import CheckingAccount from './components/checkingAccount/checkingAccount.js';
import CheckingAccount2 from './components/checkingAccount/checkingAccount2.js'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Navbar />
        <h1> entry point </h1>
        <CheckingAccount2 />

      </div>
    );
  }
}

export default App;
