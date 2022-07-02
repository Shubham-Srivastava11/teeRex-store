import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import style from './ProductCard.module.css';

const ProductCard = (props) => {

    const [countAddedItem, setCountAddedItem] = useState(0);
    const [isCount, setCount] = useState(props.staticCount);

    useEffect(() => {
        if (props.item.count > 0) {
            props.addToCart(props.item);
        }

    }, [countAddedItem]);

    const sendCartData = (event) => {
        if (event.target.textContent.includes('+')) {
            if (props.item.quantity === countAddedItem) {

                alert('Product out of stock');
            }
            else {
                setCountAddedItem(countAddedItem + 1);
                props.item['count'] = countAddedItem + 1;
            }
        } else if (event.target.textContent.includes('-')) {

            setCountAddedItem(countAddedItem - 1);
            props.item['count'] = countAddedItem - 1;

        } else {
            if (props.item.quantity === 0) {
                props.item['count'] = 0;
                alert('Product out of stock');
            } else {
                setCountAddedItem(countAddedItem + 1);
                props.item['count'] = countAddedItem + 1;
            }
        }
    }
    // console.log(props.item);
    return (
        <React.Fragment >
            <div className={style.card_column}>
                < div
                    className={style.card}
                    style={{ backgroundImage: `url(${props.item.imageURL})` }} >
                    {/* <img className={style.prodImage} src={data.imageURL} /> */}
                </div >
                <h4>
                    {props.item.name}
                </h4>
                <h4>
                    {props.item.currency} {props.item.price}
                </h4>
                <div
                    className={style.footer} >
                    {countAddedItem > 0 ?
                        <button
                            type='button'>
                            <label onClick={sendCartData}
                                className={style.minus}> - </label>
                            <label
                                style={{ cursor: 'auto' }}>
                                {countAddedItem}
                            </label>
                            <label
                                onClick={sendCartData}
                                className={style.plus}> + </label>
                        </button>
                        :
                        <button
                            type='button'
                            onClick={sendCartData}
                        >Add to cart</button>}

                </div>
            </div>
        </React.Fragment>
    );
}

export default ProductCard;