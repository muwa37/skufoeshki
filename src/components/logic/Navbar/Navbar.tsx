import React from 'react';
import { NavLink } from 'react-router-dom';
import CartNavBtn from '../CartNavBtn/CartNavBtn';
import classes from './Navbar.module.css';

const Navbar: React.FC = () => {
	return (
		<nav className={classes.Navbar}>
			<NavLink className={classes.NavbarAppName} to='/'>
				сКуФоЕшКи
			</NavLink>
			<nav className={classes.NavbarLinks}>
				<NavLink
					className={({ isActive }) => {
						const linkClasses = [classes.NavbarLink];
						if (isActive) linkClasses.push(classes.active);
						return linkClasses.join(' ');
					}}
					to='/home'
				>
					о нас
				</NavLink>
				<NavLink
					className={({ isActive }) => {
						const linkClasses = [classes.NavbarLink];
						if (isActive) linkClasses.push(classes.active);
						return linkClasses.join(' ');
					}}
					to='/products'
				>
					продукты
				</NavLink>
				<NavLink
					className={({ isActive }) => {
						const linkClasses = [classes.NavbarLink];
						if (isActive) linkClasses.push(classes.active);
						return linkClasses.join(' ');
					}}
					to='/contacts'
				>
					контакты
				</NavLink>
			</nav>
			<NavLink className={classes.NavbarCart} to='/cart'>
				<CartNavBtn />
			</NavLink>
		</nav>
	);
};

export default Navbar;
