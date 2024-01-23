import React from "react";
import { IAmountBtnsProps } from '../../../types/types';
import classes from './AmountBtns.module.css'

const AmountBtns:React.FC<IAmountBtnsProps> = ({ increase, decrease, amount }:IAmountBtnsProps) => {
  return (
    <div
      className={classes.AmountBtns}
    >
        <button
          className={classes.AmountBtnsDecrease}
          type='button'
          onClick={decrease}
        >
          -
        </button>
        <span
          className={classes.AmountBtnsAmount}
        >
          {amount}
        </span>
        <button 
          className={classes.AmountBtnsIncrease}
          type='button' 
          onClick={increase}
        >
          +
        </button>
    </div>
  );
};

export default AmountBtns;