import React from 'react';
import { Link } from 'react-router-dom';
import CustomBtn from '../../components/ui/CustomBtn/CustomBtn';
import classes from './Home.module.css';

const Home: React.FC = () => {
	return (
		<div className={classes.Home}>
			<div className={classes.HomeContainer}>
				<h2 className={classes.HomeSubTitle}>ЛУЧШАЯ НЯМКА ВЕКА</h2>
				<h1 className={classes.HomeTitle}>
					Проникая в животик - <br />
					проникаем в сердечко.
				</h1>
				<CustomBtn>
					<Link to={'/products'}>За покупочками!</Link>
				</CustomBtn>
			</div>
			<div className={classes.HomeImage}>
				<img
					src={require('../../assets/images/others/SkufShrek.png')}
					alt='skuf'
				/>
			</div>
		</div>
	);
};

export default Home;
