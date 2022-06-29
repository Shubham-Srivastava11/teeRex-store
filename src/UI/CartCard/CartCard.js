import { useEffect, useState } from 'react';
import EachCartCard from '../EachCartCard/EachCartCard';
import style from './CartCard.module.css';

const CartCard = (props) => {

    const [cartItemCount, setCartItemCount] = useState();
    const [itemsInCart, setItemsInCart] = useState(props.products);
    useEffect(() => {
        var count = 0;
        for (let val of props.products) {
            count += val.count;
        }
        setCartItemCount(count);
        props.cartCount(count);
    }, [props.products])

    const cartCount = (event) => {
        if (event.target.textContent.includes('+')) {
            console.log(event.target);
        }
        // if (event.target.textContent.includes('+')) {
        //     if (countAddedItem === props.item.quantity)
        //         alert('Product out of stock');
        //     else {
        //         setCountAddedItem(countAddedItem + 1);
        //         props.item['count'] = countAddedItem + 1;
        //     }
        // } else if (event.target.textContent.includes('-')) {

        //     setCountAddedItem(countAddedItem - 1);
        //     props.item['count'] = countAddedItem - 1;

        // } else {
        //     setCountAddedItem(countAddedItem + 1);
        //     props.item['count'] = countAddedItem + 1;
        // }

    }
    return (
        <div className={style.card_container}>
            {props.products.length > 0 ?
                props.products.map(data =>
                    data.count > 0 &&

                    <EachCartCard
                        item={data}>

                    </EachCartCard>
                    // <div
                    //     className={style.card_column}
                    //     key={data.id}>
                    //     < div
                    //         className={style.card}
                    //         style={{ backgroundImage: `url(${data.imageURL})` }} >
                    //         {/* <img className={style.prodImage} src={data.imageURL} /> */}

                    //     </div >
                    //     <div
                    //         className={style.footer} >
                    //         <h4>{data.name}</h4>
                    //         <h4>
                    //             {data.currency} {data.price}
                    //         </h4>
                    //     </div>
                    //     <div className={style.btns} >
                    //         <button className={style.del}
                    //             type='button'>
                    //             Delete
                    //         </button>
                    //         <button className={style.qty}
                    //             disabled>
                    //             <label style={{ cursor: 'pointer' }} onClick={cartCount}>-</label>
                    //             <label>
                    //                 Qty : </label>
                    //             <label>{data.count <= data.quantity ?
                    //                 data.count : alert('No more quantity left.')}</label>
                    //             <label style={{ cursor: 'pointer' }} onClick={cartCount}>+</label>
                    //         </button>

                    //     </div>

                    // </div>

                )
                :
                <div className={style.noData}>Nothing added to Cart</div>
            }
        </div>
    );
}

export default CartCard;