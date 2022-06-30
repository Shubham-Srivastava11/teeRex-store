import React, { useState, useEffect } from 'react';
import style from './EachCartCard.module.css';

const EachCartCard = (props) => {

    const [itemsInCart, setItemsInCart] = useState([]);
    const [eachCartCount, setEachCartCount] = useState(props.item.count);

    useEffect(() => {
        props.setEdited(props.item);
    }, [eachCartCount]);


    const cartCount = (event) => {
        if (event.target.textContent.includes('+')) {
            if (eachCartCount === props.item.quantity)
                alert('Product out of stock');
            else {
                setEachCartCount(eachCartCount + 1);
                props.item.count = eachCartCount + 1;
            }

        } else if (event.target.textContent.includes('-')) {
            setEachCartCount(eachCartCount - 1);
            props.item.count = eachCartCount - 1;

        }
    }
    return (
        <React.Fragment>
            {eachCartCount > 0 &&
                <div
                    className={style.card_column}
                    key={props.item.id}>
                    <div
                        className={style.card}
                        style={{ backgroundImage: `url(${props.item.imageURL})` }} >
                    </div>
                    <div
                        className={style.footer} >
                        <h4>
                            {props.item.name}
                        </h4>
                        <h4>
                            {props.item.currency} {props.item.price}
                        </h4>
                    </div>
                    <div
                        className={style.btns} >
                        <button
                            className={style.del}
                            type='button'>
                            Delete
                        </button>
                        <button
                            className={style.qty}
                            disabled>
                            <label
                                style={{ cursor: 'pointer' }}
                                onClick={cartCount}>-</label>
                            <label>
                                Qty : </label>
                            <label>
                                {props.item.count <= props.item.quantity ?
                                    props.item.count : alert('No more quantity left.')}
                            </label>
                            <label
                                style={{ cursor: 'pointer' }}
                                onClick={cartCount}>+</label>
                        </button>

                    </div>

                </div>
            }
        </React.Fragment>
    )
}

export default EachCartCard;