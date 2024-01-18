import React from "react";

const AmountBtns = ({ increase, decrease, amount }:any) => {
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