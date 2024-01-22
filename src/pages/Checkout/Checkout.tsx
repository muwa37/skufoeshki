import React from "react";
import { Link } from "react-router-dom";
import CustomBtn from '../../components/ui/CustomBtn/CustomBtn';

const Checkout:React.FC = () => {
  return (
      <div>
        <div>
            ty a lot!
        </div>
        <CustomBtn>
          <Link to='/products'>Back to shop</Link>
        </CustomBtn>
      </div>
  );
};
export default Checkout;