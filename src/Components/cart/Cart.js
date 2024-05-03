import React, { useContext } from 'react'
import { Button, Col, Row, Container, Table } from 'react-bootstrap';
import '../cart/Cart.css'
import CartItem from "./CartItem";
import CartContext from '../../Context/CartContext';

const Cart = () => {
    const ctx = useContext(CartContext);
    const TotalAmount = `${ctx.totalAmount.toFixed(2)}`;
    const producst = ctx.items.map((item) => (
        <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            amount={item.amount}
        />
    ));
    function purchaseHandler(e) {
        e.preventDefault();
        console.log(e);
        ctx.items.length === 0
          ? alert("Cart is empty")
          : alert("Order placed succesfully");
        ctx.empty();
      }
    
    return (
        <Container className="cart" >
            <Row>
                <Col className="text-center cart-text">Cart</Col>
            </Row>
            <Row>
                <Col className="text-center">
                    {/* There is no item in this cart click <Navlink to={"store"}>here</Navlink> to
          shope */}
                    <Table responsive="sm">
                        <thead>
                            <tr className="th">
                                <th className="item">ITEM</th>
                                <th className="price">PRICE</th>
                                <th className="quantity">QUANTITY</th>
                            </tr>
                        </thead>
                        <tbody>{producst}</tbody>
                    </Table>
                    <div className='total'>
                        
                        <span>Total</span> <span>$ {TotalAmount}</span>{" "}
                    </div>
                    <div>
                        <Button onClick={purchaseHandler}>PURCHASE</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Cart;

