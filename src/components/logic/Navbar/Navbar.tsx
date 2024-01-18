import React from "react";
import {Link} from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = (props:any) => {
    return (
        <div className={classes.Navbar}>
            <div className={classes.NavbarLinks}>
                <Link 
                    className={classes.NavbarLink}
                    to='/home'
                >
                    home
                </Link>
                <Link 
                    className={classes.NavbarLink}
                    to='/products'
                >
                    products
                </Link>
                <Link 
                    className={classes.NavbarLink}
                    to='/contacts'
                >
                    contacts
                </Link>
            </div>
            <Link 
                className={classes.NavbarCart}
                to='/cart'
            >
                cart
            </Link>
        </div>
    )
}

export default Navbar;