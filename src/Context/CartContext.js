import React from 'react'

const CartContext = React.createContext({
    items:[],
    totalAmount: 0,
    addItem: (item) =>{},
    removeItem:(id) =>{},
    empty: () => {},
    token: "",
    isLoggedIn: false,
    login: (token) =>{},
    logout: ()=>{},
});

export default CartContext
