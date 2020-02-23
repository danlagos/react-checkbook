import React from 'react';

function Transactions(props) {
  return (
    <tr>
      <td>{props.date} </td>
      <td>{props.transaction}</td>
      <td>{props.amount}</td>
      <td>{props.runningTotal}</td>
    </tr>

  );
}

export default Transactions;