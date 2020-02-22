import React from 'react';
import TransactionSearch from './transactionSearch.js';
import PendingTransactions from './pendingTransactions.js';
import Transactions from './transactions.js';

function CheckingAccount() {
  return (
    <div className="App">
      <h1> Checking Account </h1>
      <TransactionSearch />
      <PendingTransactions />
      <Transactions />
    </div>
  );
}

export default CheckingAccount;