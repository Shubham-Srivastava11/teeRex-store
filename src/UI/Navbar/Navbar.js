import style from './Navbar.module.css';

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
                <a onClick={pageHandler}>Cart</a>
            </div>
        </nav>
    );
}

export default Navbar;