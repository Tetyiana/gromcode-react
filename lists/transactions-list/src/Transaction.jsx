import React from "react";
import moment from 'moment';

const Transaction = ({ transaction }) => {
  const { time, rate, amount, from, to } = transaction;
  const assets = `${from} → ${to}`;
  const formattedTime = moment(time).format('HH:mm');
  const formattedDate = moment(time).format('DD MMM');
  // const formattedRate = new Intl.NumberFormat('en-GB').format(rate);
  const formattedAmount = new Intl.NumberFormat('en-GB').format(amount);


  return (
    <li className="transaction">
      <span className="transaction__date">{formattedDate}</span>
      <span className="transaction__time">{formattedTime}</span>
      <span className="transaction__assets">{assets}</span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{new Intl.NumberFormat('en-GB').format(amount)}</span>
    </li>
  );
}

export default Transaction;
