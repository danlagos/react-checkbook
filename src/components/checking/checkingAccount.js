import React, { Component } from 'react';

import TransactionSearch from './transactionSearch.js';
import PendingTransactions from './pendingTransactions.js';
import Transactions from './transactions.js';

class CheckingAccount extends Component {
  state = {
    pendingTransData: [
      { id: 0, date: '1 / 1 / 2020', income: false, transaction: "gas", amount: 25.45 },
      { id: 1, date: '1 / 2 / 2020', income: false, transaction: "cell phone", amount: 127.35 },
      { id: 2, date: '1 / 3 / 2020', income: false, transaction: "car payment", amount: 303.97, },
    ]
  }
  render() {
    let transData = null;

    transData = (
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
            income={pendingTransData.income}
            transaction={pendingTransData.transaction}
            amount={pendingTransData.amount} />
        })}
      </div>
    )

    return (
      <div className="App" >
        <h1> Checking Account</h1>
        <TransactionSearch />
        {transData}
        <Transactions />
      </div>
    );
  }
}

export default CheckingAccount;