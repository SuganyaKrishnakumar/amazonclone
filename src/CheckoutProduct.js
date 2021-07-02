import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({image, title, price, rating, id}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = ()=>{
        
            dispatch({
                type: 'REMOVE_FROM_BASKET',
                id: id
            })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProductt__price"> 
                 <small>$</small>{price}
                 </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map(
                            (_,i) => {
                        return <p>⭐</p>
                        })}
                </div>
                <button onClick={removeFromBasket}>Remove item from card</button>

            </div>
        </div>
    )
}

export default CheckoutProduct
