import React from 'react';

function PendingTransactions(props) {
  return (
    <tr>
      <td>{props.date} </td>
      <td>{props.transaction}</td>
      <td>{props.amount}</td>
    </tr>
  );
}

export default PendingTransactions;
