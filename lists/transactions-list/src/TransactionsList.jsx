import React from "react";
import RenderTransaction from "./Transaction.jsx";

const Transaction = ({ transactions }) => {
  return (
    <ul className="transactions">
      {transactions.map(transaction => <RenderTransaction key={transaction.id} transaction={transaction} />)}
    </ul>
  );
}

export default Transaction;
