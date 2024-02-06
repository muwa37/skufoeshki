import React from 'react';
import { Link } from 'react-router-dom';
import CustomBtn from '../../components/ui/CustomBtn/CustomBtn';
import classes from './Checkout.module.css';

const Checkout: React.FC = () => {
	return (
		<div className={classes.Checkout}>
			<div className={classes.CheckoutContainer}>
				<h2 className={classes.CheckoutSubTitle}>СПАСИБО ЗА ПОКУПКИ^^</h2>
				<div className={classes.CheckoutTitle}>
					Играя в танки один не скуфей -
					<br />
					возьми с собой альтушку Дель Рей.
				</div>
				<CustomBtn>
					<Link to='/products'>Еще снеков!</Link>
				</CustomBtn>
			</div>
			<img
				className={classes.CheckoutImg}
				src={require('../../assets/images/others/Altushka.jpg')}
				alt='altushka-del-rey'
			/>
		</div>
	);
};
export default Checkout;
