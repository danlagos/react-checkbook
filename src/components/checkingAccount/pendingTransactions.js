import React from 'react';

function PendingTransactions(props) {
  console.log(props.pendingTransData)
  return (
    <div className="App">
      <div>
        <p>Date: {props.date} </p>
        <p>transaction {props.transaction}</p>
        <p>Amount: {props.amount}</p>
      </div>
    </div>
  );
}

export default PendingTransactions;
