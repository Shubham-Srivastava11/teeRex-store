import style from './Navbar.module.css';
import { BsCart2 } from "react-icons/bs";

const Navbar = (props) => {
    console.log(props.cartCount);
    const pageHandler = (event) => {
        if (event.target.textContent === 'Products')
            props.urlHandler('products');
        else
            props.urlHandler('cart');
    }
    return (
        <nav className={style.navbar}>

            <label>TeeRex Store</label>

            <div className={style.navigation}>
                <a onClick={pageHandler}>Products</a>
                <a onClick={pageHandler}>
                    <BsCart2 className={style.cartIcon}></BsCart2>
                    <p className={style.cartCount}>{props.cartCount}</p>
                </a>
                {/* <p className={style.cartCount}>{props.cartCount}</p> */}
            </div>
        </nav>
    );
}

export default Navbar;