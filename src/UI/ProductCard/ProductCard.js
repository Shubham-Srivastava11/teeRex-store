import React, { useState } from 'react';
import style from './ProductCard.module.css';

const ProductCard = (props) => {
    // console.log(props.products);

    const [countAddedItem, setCountAddedItem] = useState(0);
    // const [eachCount, setEachCount] = useState({});

    const sendCartData = (event) => {

        if (event.target.textContent.includes('+')) {
            if (countAddedItem === props.item.quantity)
                alert('Product out of stock');
            else {
                setCountAddedItem(countAddedItem + 1);
                // props.item['count'] = countAddedItem;
                // props.addToCart(props.item);
            }
        } else if (event.target.textContent.includes('-')) {
            setCountAddedItem(countAddedItem - 1);
            // props.item['count'] = countAddedItem;
            // props.addToCart(props.item);
        } else {
            setCountAddedItem(countAddedItem + 1);
            // props.item['count'] = countAddedItem;
            // props.addToCart(props.item);
        }

        props.item['count'] = countAddedItem + 1;
        props.addToCart(props.item);

    }
    // console.log(cartItems);
    return (
        <React.Fragment >
            <div className={style.card_column}>
                < div
                    className={style.card}
                    style={{ backgroundImage: `url(${props.item.imageURL})` }} >
                    {/* <img className={style.prodImage} src={data.imageURL} /> */}
                </div >
                <div
                    className={style.footer} >
                    <h4>
                        {props.item.currency} {props.item.price}
                    </h4>
                    {/* <button
                        type='button'
                        onClick={sendCartData}
                    > */}
                    {countAddedItem > 0 ?
                        <button
                            type='button'>
                            <label onClick={sendCartData}> - </label>
                            <label style={{ cursor: 'auto' }}> {countAddedItem} </label>
                            <label onClick={sendCartData}> + </label>
                        </button>
                        :
                        <button
                            type='button'
                            onClick={sendCartData}
                        >Add to cart</button>}

                    {/* </button> */}


                </div>
                <h4>
                    {props.item.name}
                </h4>
            </div>
        </React.Fragment>
    );
}

export default ProductCard;