import React, { useState } from 'react';

import TransactionSearch from './transactionSearch.js';
import PendingTransactions from './pendingTransactions.js';
import Transactions from './transactions.js';

function CheckingAccount() {
  // to be passed to pendingTransactions component

  const [pendingTransDataState, setPendingTransDataState] = useState({
    pendingTransData: [
      { id: 0, date: 1 / 1 / 2020, income: false, transaction: "gas", amount: 25.45 },
      { id: 1, date: 1 / 2 / 2020, income: false, transaction: "cell phone", amount: 127.35 },
      { id: 2, date: 1 / 3 / 2020, income: false, transaction: "car payment", amount: 303.97 },
    ]
  })

  return (
    <div className="App">
      <h1> Checking Account </h1>
      <TransactionSearch />
      <PendingTransactions
        pendingTransData={pendingTransDataState.pendingTransData}
      />
      <Transactions />
    </div>
  );
}

export default CheckingAccount;