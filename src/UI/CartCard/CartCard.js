import { useState } from 'react';
import style from './CartCard.module.css';

const CartCard = (props) => {

    // const [cartItemCount, setCartItemCount] = useState()
    const cartCount = () => {

    }
    return (
        <div className={style.card_container}>
            {
                props.products.map(data =>
                    <div
                        className={style.card_column}
                        key={data.id}>
                        < div
                            className={style.card}
                            style={{ backgroundImage: `url(${data.imageURL})` }} >
                            {/* <img className={style.prodImage} src={data.imageURL} /> */}

                        </div >
                        <div
                            className={style.footer} >
                            <h4>{data.name}</h4>
                            <h4>
                                {data.currency} {data.price}
                            </h4>
                        </div>
                        <div className={style.btns} >
                            <button className={style.del}
                                type='button'>
                                Delete
                            </button>
                            <button className={style.qty}
                                disabled>
                                <label>
                                    Qty : </label>
                                <label>{data.count <= data.quantity ?
                                    data.count : alert('No more quantity left.')}</label>
                                <label style={{ cursor: 'pointer' }} onClick={cartCount}>+</label>
                            </button>

                        </div>

                    </div>
                )
            }
        </div>
    );
}

export default CartCard;