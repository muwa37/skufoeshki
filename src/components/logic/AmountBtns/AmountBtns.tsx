import React from "react";
import { IAmountBtnsProps } from '../../../types/types';


const AmountBtns:React.FC<IAmountBtnsProps> = ({ increase, decrease, amount }:IAmountBtnsProps) => {
  return (
    <div>
        <button
            type='button'
            onClick={decrease}
        >
            minus
        </button>
        <span>{amount}</span>
        <button type='button' onClick={increase}>
            plus
        </button>
    </div>
  );
};

export default AmountBtns;