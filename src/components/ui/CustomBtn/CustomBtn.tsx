import React from 'react';
import classes from './CustomBtn.module.css';

interface IBtnProps {
	children?: React.ReactNode;
	props?: object;
	onClick?: React.MouseEventHandler;
}

const CustomBtn: React.FC<IBtnProps> = ({ children, ...props }: IBtnProps) => {
	return (
		<button {...props} className={classes.CustomBtn}>
			{children}
		</button>
	);
};

export default CustomBtn;
