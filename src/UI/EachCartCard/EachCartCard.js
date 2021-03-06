import React, { useState, useEffect } from 'react';
import style from './EachCartCard.module.css';

const EachCartCard = (props) => {
    useEffect(() => {
        setEachCartCount(props.item.count);
        // console.log(eachCartCount);
    }, [props]);


    const [eachCartCount, setEachCartCount] = useState(props.item.count);//props.item.count

    useEffect(() => {
        props.setEdited(props.item);
    }, [eachCartCount]);


    const cartCount = (event) => {
        if (event.target.textContent.includes('+')) {
            if (eachCartCount === props.item.quantity)
                alert('Product out of stock');
            else {
                setEachCartCount(props.item.count + 1);
                props.item.count = eachCartCount + 1;
                console.log(eachCartCount);
                console.log(props.item.count);
            }

        } else if (event.target.textContent.includes('-')) {
            // setEachCartCount(eachCartCount - 1);
            setEachCartCount(props.item.count - 1);
            props.item.count = eachCartCount - 1;

        }
    }

    const deleteProduct = () => {
        setEachCartCount(0);
        props.item.count = 0;
    }
    return (
        <React.Fragment >
            {
                eachCartCount > 0 &&
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
                        <h4>
                            Total : {props.item.price * props.item.count}
                        </h4>
                    </div>
                    <div
                        className={style.btns} >
                        <button
                            className={style.del}
                            type='button'
                            onClick={deleteProduct}>
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