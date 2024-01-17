import React from "react";
import classes from './CustomBtn.module.css'

interface IProps {
    children?:any;
    props?: any;
    onClick?: any;
}

const CustomBtn:React.FC<IProps>= ({children, ...props}:IProps ) => {
    return (
        <button
            {...props}
            className={classes.CustomBtn}
        >
            {children}
        </button>
    )
}

export default CustomBtn;