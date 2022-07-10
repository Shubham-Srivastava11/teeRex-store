import ProductCard from '../../UI/ProductCard/ProductCard';
import './ProductPage.css';
import { useState, useEffect } from 'react';
import FilterCard from '../../UI/FilterCard/FilterCard';

const ProductPage = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [filterItems, setFilterItems] = useState([]);

    useEffect(() => {
        props.filterChecked(filterItems);
        console.log(filterItems);
    }, [filterItems]);

    useEffect(() => {
        const temp = Array.from(new Set(cartItems));
        props.sendCartItems(temp);
    }, [cartItems])
    const productPageFilter = (data) => {
        setFilterItems(data);
    }
    const addItem = (item) => {

        setCartItems([...cartItems, item]);
    }

    return (
        <div style={{ display: 'flex', marginTop: '-7rem' }} >
            <div className={`card_container_left ${props.isFilterBtn && 'show'}`} >
                <FilterCard
                    filter={productPageFilter}
                />
            </div>
            <div
                className='card_container_right'>
                {
                    props.products.map(data =>
                        <ProductCard
                            key={data.id}
                            item={data}
                            addToCart={addItem}
                            staticCount={'count' in data ? true : false}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default ProductPage;