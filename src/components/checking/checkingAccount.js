import React, { Component } from 'react';

import TransactionSearch from './transactionSearch.js';
import PendingTransactions from './pendingTransactions.js';
import Transactions from './transactions.js';

class CheckingAccount extends Component {
  state = {
    startBal: 0,
    pendingTransData: [
      { id: 0, date: '1/1/2020', transaction: "gas", amount: -25.45 },
      { id: 1, date: '1/2/2020', transaction: "cell phone", amount: -127.35 },
      { id: 2, date: '1/3/2020', transaction: "car payment", amount: -303.97, },
    ],
    transactionData: [
      { id: 0, date: '1/1/2020', transaction: "gas", amount: -35.45, runningTotal: -35.45 },
      { id: 1, date: '1/2/2020', transaction: "cell phone", amount: -227.35, runningTotal: -152.8 },
      { id: 2, date: '1/3/2020', transaction: "car payment", amount: -403.97, runningTotal: -456.77 },
    ]
  }
  render() {
    let pendTransData = null;
    let transData = null;

    pendTransData = (
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
    )

    transData = (
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
    )

    return (
      <div className="App" >
        <h1> Checking Account</h1>
        <TransactionSearch />
        {pendTransData}
        {transData}
      </div>
    );
  }
}

export default CheckingAccount;