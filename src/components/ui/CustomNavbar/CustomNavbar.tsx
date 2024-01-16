import React from "react";
import {Link} from 'react-router-dom'
import classes from './CustomNavbar.module.css'

const CustomNavbar = () => {
    return (
        <div className={classes.CustomNavbar}>
            <div className={classes.CustomNavbarLinks}>
                <Link 
                    className={classes.CustomNavbarLink}
                    to='/home'
                >
                    home
                </Link>
                <Link 
                    className={classes.CustomNavbarLink}
                    to='/products'
                >
                    products
                </Link>
                <Link 
                    className={classes.CustomNavbarLink}
                    to='/contacts'
                >
                    contacts
                </Link>
            </div>
            <Link 
                className={classes.CustomNavbarCart}
                to='/cart'
            >
                cart
            </Link>
        </div>
    )
}

export default CustomNavbar;