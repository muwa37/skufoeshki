import React, { useState } from 'react';

const CartBtn = () => {
    const [cartItemsCount, setCartItemsCount] = useState(0)

    return(
        <div>
            <div>
                cart
            </div>
            <div>
                {cartItemsCount}
            </div>
        </div>
        
    )
}

export default CartBtn;