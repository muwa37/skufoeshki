import React from 'react';
import {useNavigate} from 'react-router-dom';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import classes from './ProductCard.module.css'

interface IProps {
    props: any
    card: any
}

const ProductCard:React.FC<IProps> = (props:IProps) => {
    const router = useNavigate();

    return (
        <div
            className={classes.ProductCard}
            onClick={() => {
                router(`/products/${props.card.id}`)
            }}
        >
            <div
                className={classes.ProductCardContent}
            >
                <div
                    className={classes.ProductCardImg}
                >
                    {props.card.img}
                    pic
                </div>
                <div
                    className={classes.ProductCardName}
                >
                    name
                    {props.card.title}
                </div>
                <div
                    className={classes.ProductCardPrice}
                >
                    price
                    {props.card.price}
                </div>
                <CustomBtn
                    onClick={(e:any) => {
                        e.stopPropagation();
                        console.log('v korzinu');
                    }}
                >
                    add to cart
                </CustomBtn>
            </div>
        </div>
    )
}

export default ProductCard;