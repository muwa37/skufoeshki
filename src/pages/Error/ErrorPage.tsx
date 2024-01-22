import React from "react";
import { Link } from "react-router-dom";
import CustomBtn from '../../components/ui/CustomBtn/CustomBtn';
import classes from './ErrorPage.module.css'

const ErrorPage:React.FC = () => {
  return (
    <div>
        <div 
          className={classes.ErrorPageTitle}
        >
            404 <br/>
          Такой странички нету...
        </div>
      <CustomBtn>
        <Link to="/">На главную</Link>
      </CustomBtn>
    </div>
  );
};



export default ErrorPage;