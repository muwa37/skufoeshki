import React from 'react';
import { Link } from 'react-router-dom';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';

const EmptyCart:React.FC = () => {
    return (
        <div>
            <div>
                your cart is empty
            </div>
            <CustomBtn>
                <Link
                    to={'/products'}
                >
                    back to shopping
                </Link>
            </CustomBtn>
        </div>
    )
}

export default EmptyCart;