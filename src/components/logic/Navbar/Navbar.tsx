import React from "react";
import {NavLink} from 'react-router-dom'
import classes from './Navbar.module.css'
import CartNavBtn from '../CartNavBtn/CartNavBtn';

const Navbar:React.FC = () => {
    return (
        <nav className={classes.Navbar}>
            <NavLink 
                className={classes.NavbarAppName}
                to='/'
            >
                сКуФоЕшКи
            </NavLink>
            <nav className={classes.NavbarLinks}>
                <NavLink 
                    className={({ isActive }) => {
                        const linkClasses = [classes.NavbarLink];
                        if (isActive) linkClasses.push(classes.active);
                            return linkClasses.join(" "); 
                    }}
                    to='/home'
                >
                    home
                </NavLink>
                <NavLink 
                    className={({ isActive }) => {
                        const linkClasses = [classes.NavbarLink];
                        if (isActive) linkClasses.push(classes.active);
                            return linkClasses.join(" "); 
                    }}
                    to='/products'
                >
                    products
                </NavLink>
                <NavLink 
                    className={({ isActive }) => {
                        const linkClasses = [classes.NavbarLink];
                        if (isActive) linkClasses.push(classes.active);
                            return linkClasses.join(" "); 
                    }}
                    to='/contacts'
                >
                    contacts
                </NavLink>
            </nav>
            <NavLink 
                className={classes.NavbarCart}
                to='/cart'
            >
                <CartNavBtn/>
            </NavLink>
        </nav>
    )
}

export default Navbar;