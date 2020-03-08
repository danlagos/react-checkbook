import React, { Component } from 'react';

import TransactionSearch from './transactionSearch.js';
import PendingTransactions from './pendingTransactions.js';
import Transactions from './transactions.js';

class CheckingAccount extends Component {
  state = {
    startBal: 1000,
    pendingTransData: [
      { id: 0, date: '1/1/2020', transaction: "gas", amount: -25.45 },
      { id: 1, date: '1/2/2020', transaction: "cell phone", amount: -127.35 },
      { id: 2, date: '1/3/2020', transaction: "car payment", amount: -303.97, },
    ],
    transactionData: [
    ]
  }

  sortByDate() {
    let { transactionData } = this.state
    let newTransactionData = transactionData

    newTransactionData.sort((a, b) => a.date > b.date)

    this.setState({transactionData: newTransactionData})
  };

  addRunningTotal() {
    let { transactionData, startBal } = this.state
    let prevAmount, running;

    transactionData.map((el, i) => {
      if (i === 0) {
        running = el.runningTotal = el.amount + startBal;
        prevAmount = el.runningTotal;

        return running;
      } else if (i > 0) {
        running = el.runningTotal = prevAmount + el.amount;
        prevAmount = el.runningTotal;

        return running;
      }
    });

    this.setState({ transactionData: transactionData, startBal: startBal });
  };

  componentDidMount() {
    this.sortByDate()
    this.addRunningTotal()
  };

  render() {
    let pendTransData = (
      <div>
        <h1>PendingTransactions</h1>
        <table>
          <tr>
            <th>Date</th>
            <th>Transaction</th>
            <th>Amount</th>
          </tr>
        </table>
        {this.state.pendingTransData.map((pendingTransData, index) => {
          return <PendingTransactions
            key={pendingTransData.id}
            date={pendingTransData.date}
            transaction={pendingTransData.transaction}
            amount={pendingTransData.amount} />
        })}
      </div>
    );

    let transData = (
      <div>
        <h1>Transaction Component</h1>
        <table>
          <tr>
            <th>Date</th>
            <th>Transaction</th>
            <th>Amount</th>
            <th>Running Total</th>
          </tr>
        </table>
        {this.state.transactionData.map((transactionData, index) => {
          return <Transactions
            key={transactionData.id}
            date={transactionData.date}
            transaction={transactionData.transaction}
            amount={transactionData.amount}
            runningTotal={transactionData.runningTotal} />
        })}
      </div>
    );

    return (
      <div className="App" >
        <h1> Checking Account</h1>
        <TransactionSearch />
        {pendTransData}
        {transData}
      </div>
    );
  };
};

export default CheckingAccount;