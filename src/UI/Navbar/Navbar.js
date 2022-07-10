import style from './Navbar.module.css';
import { BsCart2 } from "react-icons/bs";

const Navbar = (props) => {
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
                    <BsCart2
                        data-testid="cartIcon"
                        className={`${style.cartIcon} ${props.cartCount > 0 ? style.navBack : ''}`}>
                    </BsCart2>
                    <p
                        className={`${props.cartCount > 0 ? style.cartCount : style.hidden} `}>
                        {props.cartCount}
                    </p>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;