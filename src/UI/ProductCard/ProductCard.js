import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import style from './ProductCard.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductCard = (props) => {
    const notify = (msg) => toast.success(msg, { position: toast.POSITION.BOTTOM_CENTER, autoClose: 500 });

    const [countAddedItem, setCountAddedItem] = useState(0);
    const [isCount, setCount] = useState(props.staticCount);

    useEffect(() => {
        if (props.item.count >= 0) {
            props.addToCart(props.item);
        }
    }, [countAddedItem]);

    const sendCartData = (event) => {
        if (event.target.textContent.includes('Add to cart')) {
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

    return (
        <React.Fragment >
            <div className={style.card_column}>
                < div
                    className={style.card}
                    style={{ backgroundImage: `url(${props.item.imageURL})` }} >
                </div >
                <h4>
                    {props.item.name}
                </h4>
                <h4>
                    {props.item.currency} {props.item.price}
                </h4>

                <div
                    className={style.footer} >
                    {/* {countAddedItem > 0 ?
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
                        : */}
                    <button
                        type='button'
                        onClick={sendCartData}
                        data-testid={`prodId${props.item.id}`}
                    >Add to cart</button>
                    {/* } */}
                    <label
                        className={style.leftItem}
                        data-testid={`quantId${props.item.id}`}
                    >
                        {props.item.quantity - countAddedItem} left.
                    </label>
                    <ToastContainer />
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProductCard;