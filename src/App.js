import logo from './logo.svg';
import './App.css';
import Navbar from './UI/Navbar/Navbar';
import { useState, useEffect } from 'react';
import ProductCard from './UI/ProductCard/ProductCard';
import CartCard from './UI/CartCard/CartCard';
import ProductPage from './components/ProductPage/ProductPage';
import FilterCard from './UI/FilterCard/FilterCard';
import { BiFilterAlt } from "react-icons/bi";
function App() {

  let URL = 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json';

  const [productDetails, setProductDetails] = useState([]);
  const [filteredProductDetails, setFilteredProductDetails] = useState([]);
  const [error, setError] = useState('');
  const [currentUrl, setCurrentUrl] = useState('products');
  const [cart, setCart] = useState([]);
  const [isFilterBtn, setIsFilterBtn] = useState(false);
  const [checkboxFilter, setCheckboxFilter] = useState([]);

  /*
    FETCH DATA FROM API
  */
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    fetch(URL)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('something went wrong while requesting posts');
      })
      .then((response) => {
        // console.log(response);
        setProductDetails(response);
        setFilteredProductDetails(response);

      })
      .catch((error) => setError(error.message));

  }
  /*
     HANDLE PRODUCT AND CART TABS
   */
  const currentUrlHandler = (url) => {
    setCurrentUrl(url);
  }

  /*
   HANDLE CART DATA
 */
  const cartDataHandler = (data) => {
    setCart(data)
  }

  /*
   RESPONSIVE FILTER BUTTON
 */
  const filterCardHandler = () => {
    if (isFilterBtn)
      setIsFilterBtn(false);
    else
      setIsFilterBtn(true);
  }

  /*
   SEARCH FILTER HANDLER
 */
  const searchFilterHandler = (event) => {
    const filter = productDetails.filter(item => (
      item.color.toLowerCase().includes(event.target.value.toLowerCase()) ||
      item.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
      item.type.toLowerCase().includes(event.target.value.toLowerCase())

    ));
    setFilteredProductDetails(filter);
  }
  /*
    CHECKBOX FILTER HANDLER
  */
  const checkboxHandler = (data) => {
    setCheckboxFilter(data);
    console.log(checkboxFilter);
  }


  return (
    <div className="App">
      <Navbar
        urlHandler={currentUrlHandler}
      />

      <div
        className={currentUrl === 'products' ? '' : 'hidden'} >

        <input
          type='search'
          className='searchBox'
          placeholder='Search for Products..'
          onChange={searchFilterHandler}></input>

        <button
          className='filterBtn'
          onClick={filterCardHandler}>
          <BiFilterAlt />
        </button>

        <ProductPage
          products={filteredProductDetails}
          sendCartItems={cartDataHandler}
          isFilterBtn={isFilterBtn}
          filterChecked={checkboxHandler} />

      </div>
      <div
        className={currentUrl === 'cart' ? '' : 'hidden'} >
        <CartCard
          products={cart}
          ogProducts={productDetails} />
      </div>

    </div >
  );
}

export default App;