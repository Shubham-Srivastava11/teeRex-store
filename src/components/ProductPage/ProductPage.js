import ProductCard from '../../UI/ProductCard/ProductCard';
import style from './ProductPage.module.css';
import { useState } from 'react';
import FilterCard from '../../UI/FilterCard/FilterCard';

const ProductPage = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [filterItems, setFilterItems] = useState([]);
    // console.log(props.isFilterBtn);

    const productPageFilter = (data) => {

        setFilterItems(data);
        props.filterChecked(filterItems);
    }
    const addItem = (item) => {

        // console.log(item);
        setCartItems([...cartItems, item]);
        const temp = Array.from(new Set(cartItems));
        console.log(temp);
        props.sendCartItems(temp);
        // console.log(item);
        // if (cartItems.length === 0)
        //     setCartItems([item]);
        // else {
        //     var flag = 0;
        //     const localItems = [...cartItems];
        //     for (let value of localItems) {
        //         var count = value.count;
        //         if (value.id === item.id) {
        //             count++;
        //             // value.count;
        //             const index = localItems.indexOf(value);
        //             localItems[index].count = count;


        //             console.log(localItems);
        //             flag = 1;

        //             break;

        //         }
        //     } setCartItems(localItems);
        //     // setCartItems(cartItems);
        //     if (flag !== 1)
        //         setCartItems([...cartItems, item]);
        // }

    }

    // props.sendCartItems(cartItems);
    return (
        <div style={{ display: 'flex' }} >
            <div className={`${style.card_container_left} {${props.isFilterBtn && style.show}}`} >
                <FilterCard
                    filter={productPageFilter}
                />
            </div>
            <div
                className={style.card_container_right}>
                {
                    props.products.map(data =>
                        <ProductCard
                            key={data.id}
                            item={data}
                            addToCart={addItem} />
                    )
                }
            </div>
        </div>
    );
}

export default ProductPage;