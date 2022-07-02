import { useEffect, useState } from 'react';
import EachCartCard from '../EachCartCard/EachCartCard';
import style from './CartCard.module.css';

const CartCard = (props) => {

    const [cartItemCount, setCartItemCount] = useState();
    const [cartEditList, setCartEditList] = useState([...props.products]);

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
        // console.log(temp);
        props.sendEditedCartItems(temp);
    }, [cartEditList])

    const setEditedFunc = (item) => {
        setCartEditList([...cartEditList, item]);
    }
    if (props.products.length > 0) {
        return (
            <div className={style.card_container}>
                {
                    // props.products.length > 0 ?
                    props.products.map(data =>
                        data.count > 0 &&

                        <EachCartCard
                            // key={Math.random()}
                            item={data}
                            total={cartItemCount}
                            className={style.eachCart}
                            setEdited={setEditedFunc}
                        >
                        </EachCartCard>
                    )
                    //     :
                    //     <div className={style.noData}>Nothing added to Cart</div>
                }
            </div>
        );
    } else {
        return (
            <div className={style.noData}>Nothing added to Cart</div>
        );
    }
}

export default CartCard;