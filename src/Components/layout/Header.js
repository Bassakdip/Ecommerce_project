import React, {useContext} from 'react'
import classess from './Header.module.css';
import { Dropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import Cart from '../cart/Cart';
import CartContext from '../../Context/CartContext';
import {NavLink} from "react-router-dom"

const Header = () => {
    const cartCtx = useContext(CartContext);
  const numberOfCartItem = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
    return (
        <div>
            <header className={classess.header}>
                <ul className={classess.ul}>
                    <NavLink className={classess.li} to={"/"}>Home</NavLink>
                    <NavLink className={classess.li} to={"/store"}>Store</NavLink>
                    <NavLink className={classess.li} to={"/about"}>About Us</NavLink>
                    <NavLink className={classess.li} to={"/contact"}>Contact Us</NavLink>
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
                <h1>The Generics</h1>
            </header>
        </div>
    )
}

export default Header