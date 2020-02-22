import React from 'react';

function TransactionSearch() {
  return (
    <div >
      <h1>Transaction Search</h1>
      <form>
        <label>
          Keywords:
          <br />
          <input type="text" name="Keywords" value='Keywords' />
        </label>
        <br />
        <label>
          Date Range:
          <br />
          <input type="text" name="start date" value='start date' />
          <input type="text" name="end date" value='end date' />
        </label>
        <br />
        <label>
          Amount Range:
          <br />
          <input type="text" name="min" value='min' />
          <input type="text" name="max" value='max' />
        </label>
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default TransactionSearch;