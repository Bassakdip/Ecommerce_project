import React, {useContext} from 'react'
import classess from './Header.module.css';
import { Dropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import Cart from '../cart/Cart';
import CartContext from '../../Context/CartContext';


const Header = () => {
    const cartCtx = useContext(CartContext);
  const numberOfCartItem = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);
    return (
        <div>
            <header className={classess.header}>
                <ul className={classess.ul}>
                    <li className={classess.li} to={"/home"}>Home</li>
                    <li className={classess.li} to={"/"}>Store</li>
                    <li className={classess.li} to={"/about"}>About Us</li>
                    <li className={classess.li} to={"/contact"}>Contact</li>
                    <div className={classess.cart}>
                        <Dropdown>
                            <Dropdown.Toggle variant="success">
                                <FaShoppingCart
                                    color="white"
                                    fontSize={"25px"}
                                ></FaShoppingCart>
                                <Badge color="white">{numberOfCartItem}</Badge>
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{ minWidth: 400 }}>
                                <Cart></Cart>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </ul>
                <h1>The Genesis</h1>
            </header>
        </div>
    )
}

export default Header
