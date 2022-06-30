import React, { useEffect, useState } from 'react';
import style from './ProductCard.module.css';

const ProductCard = (props) => {

    // console.log(props.item);
    const [countAddedItem, setCountAddedItem] = useState(props.staticCount);
    // const [eachCount, setEachCount] = useState({});
    // useEffect(() => {
    //     if ('count' in props.item) {
    //         setCountAddedItem(props.item.count);
    //     }

    // }, [props.item]);

    useEffect(() => {
        if (props.item.count > 0) {
            props.addToCart(props.item);
        }
    }, [countAddedItem]);

    const sendCartData = (event) => {
        // console.log(event.target.textContent);


        if (event.target.textContent.includes('+')) {
            if (countAddedItem === props.item.quantity)
                alert('Product out of stock');
            else {
                setCountAddedItem(countAddedItem + 1);
                props.item['count'] = countAddedItem + 1;
            }
        } else if (event.target.textContent.includes('-')) {

            setCountAddedItem(countAddedItem - 1);
            props.item['count'] = countAddedItem - 1;

        } else {
            setCountAddedItem(countAddedItem + 1);
            props.item['count'] = countAddedItem + 1;
        }
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
                <h4>
                    {props.item.name}
                </h4>
                <h4>
                    {props.item.currency} {props.item.price}
                </h4>
                <div
                    className={style.footer} >

                    {/* <button
                        type='button'
                        onClick={sendCartData}
                    > */}
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

                    {/* </button> */}


                </div>
                {/* <h4>
                    {props.item.name}
                </h4>
                <h4>
                    {props.item.currency} {props.item.price}
                </h4> */}
            </div>
        </React.Fragment>
    );
}

export default ProductCard;