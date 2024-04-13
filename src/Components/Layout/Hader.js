import React, { Fragment } from 'react'
import classess from './Hader.module.css';

const Hader = () => {
    return (
        <Fragment>
            <header className={classess.header}>
                <ul className={classess.ul}>
                    <li className={classess.li}>Home</li>
                    <li className={classess.li}>Store</li>
                    <li className={classess.li}>About Us</li>
                    
                    <button className={classess.cart}> Cart
                        <span className={classess.cart_number}>0</span>
                    </button>
                </ul>
                <h1>The Genesis</h1>
            </header>
        </Fragment>
    )
}

export default Hader
