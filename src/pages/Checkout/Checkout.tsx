import React from "react";
import { Link } from "react-router-dom";
import CustomBtn from '../../components/ui/CustomBtn/CustomBtn';
import classes from './Checkout.module.css'

const Checkout:React.FC = () => {
  return (
      <div>
        <div className={classes.CheckoutTitle}>
            Спасибо за покупки^^
        </div>
        <CustomBtn>
          <Link to='/products'>Еще снеков!</Link>
        </CustomBtn>
      </div>
  );
};
export default Checkout;