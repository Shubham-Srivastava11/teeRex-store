import { useEffect, useState } from 'react';
import EachCartCard from '../EachCartCard/EachCartCard';
import style from './CartCard.module.css';

const CartCard = (props) => {

    const [cartItemCount, setCartItemCount] = useState();
    const [cartEditList, setCartEditList] = useState([...props.products]);
    const [totalPrice, setTotalPrice] = useState([]);

    useEffect(() => {
        var count = 0;
        for (let val of props.products) {
            count += val.count;
        }
        setCartItemCount(count);
        props.cartCount(count);
    }, [props.products]) //instead of ------ props.products


    useEffect(() => {
        const temp = Array.from(new Set(cartEditList));
        props.sendEditedCartItems(temp);

    }, [cartEditList])

    const setEditedFunc = (item) => {
        setCartEditList([...cartEditList, item]);
        var sum = 0;
        for (let val of props.products) {
            sum += val.price * val.count;
        }
        setTotalPrice(sum);
    }
    if (props.products.length > 0) {
        return (
            <div>
                <label className={style.totalPrice}> Checkout Price : {totalPrice}</label>
                <div className={style.card_container}>
                    {
                        props.products.map(data =>
                            data.count > 0 &&

                            <EachCartCard

                                item={data}
                                total={cartItemCount}
                                className={style.eachCart}
                                setEdited={setEditedFunc}
                            >
                            </EachCartCard>
                        )
                    }

                </div>

            </div>

        );
    } else {
        return (
            <div className={style.noData}>Nothing added to Cart</div>
        );
    }
}

export default CartCard;