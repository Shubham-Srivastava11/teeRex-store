import ProductCard from '../../UI/ProductCard/ProductCard';
import './ProductPage.css';
import { useState, useEffect } from 'react';
import FilterCard from '../../UI/FilterCard/FilterCard';

const ProductPage = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [filterItems, setFilterItems] = useState([]);
    // console.log(props.isFilterBtn);

    useEffect(() => {
        props.filterChecked(filterItems);
    }, [filterItems])
    useEffect(() => {
        const temp = Array.from(new Set(cartItems));
        // console.log(temp);
        props.sendCartItems(temp);
    }, [cartItems])
    const productPageFilter = (data) => {

        setFilterItems(data);
        // props.filterChecked(filterItems);
    }
    const addItem = (item) => {

        // console.log(item);
        setCartItems([...cartItems, item]);
    }

    // props.sendCartItems(cartItems);
    return (
        <div style={{ display: 'flex' }} >
            <div className={`card_container_left ${props.isFilterBtn && 'show'}`} >
                {/* {`lightbox ${hideLightbox ? "hide-lightbox" : ""}`} */}
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
                            staticCount={'count' in data ? data.count : 0} />
                    )
                }
            </div>
        </div>
    );
}

export default ProductPage;