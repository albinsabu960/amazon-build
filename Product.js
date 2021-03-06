import React from 'react';
import "./Product.css";
import { useStateValue } from './Stateprovider';

function Product({id,title,image,price,rating}) {
    const[{basket},dispatch]=useStateValue();
    console.log("im basket",basket);
    const addToBasket =()=>{
        //dispatching item to datalayer
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                image:image,
                price:price,
                rating:rating,
                title:title,
            },
        });

    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i)=>(
                       < p>⭐</p>
                    ))}
                    
                </div>
            </div>
            <img  src={image} alt=""/>
            <button onClick={addToBasket}> Add to Basket</button>
        </div>
    )
}

export default Product
