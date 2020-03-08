import React, { Component } from 'react';

import transactionData from './data/transactionData.json';

import Navbar from './components/navbar.js';
import CheckingAccount from './components/checking/checkingAccount.js';
import Footer from './components/footer.js'


class App extends Component {
  render() {
    return (
      <div className="App" >
        <Navbar />
        <CheckingAccount />
        <Footer />
      </div>
    );
  }
}

export default App;
