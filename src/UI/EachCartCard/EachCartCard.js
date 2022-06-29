import React from 'react';
import style from './EachCartCard.module.css';

const EachCartCard = (props) => {

    const cartCount = (event) => {
        if (event.target.textContent.includes('+')) {
            console.log(event.target);
        }
    }
    return (
        <React.Fragment>
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

        </React.Fragment>
    )
}

export default EachCartCard;