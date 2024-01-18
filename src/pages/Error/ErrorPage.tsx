import React from "react";
import { Link } from "react-router-dom";
import CustomBtn from '../../components/ui/CustomBtn/CustomBtn';

const ErrorPage = () => {
  return (
    <div>
        <div>
            404 page don't exist
        </div>
      <CustomBtn>
        <Link to="/">back to home</Link>
      </CustomBtn>
    </div>
  );
};



export default ErrorPage;