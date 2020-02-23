import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function Transactions() {
  const classes = useStyles();
  return (
    <div className="App">
      <h1> transactions component </h1>
      <div>
        <p>Date</p> <p>add date props</p>
        <p>transaction</p> <p>add pendingTransaction props</p>
        <p>Amount</p> <p>add amount props</p>
        <p>Amount</p> <p>add runningTotal output</p>
      </div>
      <div className={classes.root}>
        <Pagination count={10} />
      </div>
    </div>
  );
}

export default Transactions;