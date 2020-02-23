import React from 'react';

function PendingTransactions(props) {
  console.log(props.pendingTransData)
  return (
    <tr>
      <td>{props.date} </td>
      <td>{props.transaction}</td>
      <td>{props.amount}</td>
    </tr>
  );
}

export default PendingTransactions;
