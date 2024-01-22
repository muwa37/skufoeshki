import React from "react";
import {Link} from 'react-router-dom'
import classes from './Navbar.module.css'
import CartNavBtn from '../CartNavBtn/CartNavBtn';

const Navbar:React.FC = () => {
    return (
        <div className={classes.Navbar}>
            <div className={classes.NavbarLinks}>
                <Link 
                    className={classes.NavbarLink}
                    to='/'
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
                <CartNavBtn/>
            </Link>
        </div>
    )
}

export default Navbar;