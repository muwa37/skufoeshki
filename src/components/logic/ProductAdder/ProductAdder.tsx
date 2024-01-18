import React, { useState } from "react";

import AmountBtns from '../AmountBtns/AmountBtns';

import { useCartContext } from '../../../context/CartProvider';

import CustomBtn from '../../ui/CustomBtn/CustomBtn';

const AddToCart = ({ product }:any) => {
  const { addToCart }:any = useCartContext();

  //? Local State
  const [amount, setAmount] = useState(1);

  //? Handlers
  const increase = () => {
    setAmount((oldAmount) => oldAmount + 1);
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount - 1;
      if (newAmount < 1) {
        newAmount = 1;
      }
      return newAmount;
    });
  };

  return (
    <>
      <AmountBtns amount={amount} increase={increase} decrease={decrease} />
      <CustomBtn 
        onClick={() => addToCart(product, amount)}
      >
          Add to cart
      </CustomBtn>
    </>
  );
};

export default AddToCart;