import React, { useState } from 'react';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';

const CartTotal = () => {
    const [totalCount, setTotalCount] = useState(0);

    return(
        <div>
            <div>
                total count: $ {totalCount}
            </div>
            <CustomBtn>
                purchase
            </CustomBtn>
        </div>
    )
}

export default CartTotal;