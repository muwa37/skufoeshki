import React from "react";
import { Link } from 'react-router-dom';
import classes from './Home.module.css'
import CustomBtn from '../../components/ui/CustomBtn/CustomBtn';

const Home:React.FC = () => {
    return (
        <div 
            className={classes.Home}
        >
            <div
                className={classes.HomeContainer}
            >
                <h2 className={classes.HomeSubTitle}>
                    ЛУЧШАЯ НЯМКА ВЕКА
                </h2>
                <h1 
                    className={classes.HomeTitle}
                >
                Проникая в животик - <br/>
                проникаем в сердечко.
                </h1>
                <CustomBtn>
                    <Link
                        to={'/products'}
                    >
                        За покупочками!
                    </Link>
                </CustomBtn>
            </div>
            <div
                className={classes.HomeImage}
            >
                <img 
                    className={classes.HomeImageImg}
                    src={require('../../assets/SkufShrek2.png')}
                    alt="skuf" 
                    
                />
                <div
                    className={classes.HomeImageDop}
                >
                <img 
                    src={require('../../assets/Kirieshki.png')}
                    alt="skuf" 
                    
                />
                </div>
            </div>
        </div>
    )
}

export default Home;