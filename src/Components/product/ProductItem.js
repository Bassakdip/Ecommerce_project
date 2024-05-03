import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import "./ProductItem.css"
import CartContext from '../../Context/CartContext'
import { useNavigate } from 'react-router-dom';

const ProductItem = (props) => {
    const ctx = useContext(CartContext);
    let navigate = useNavigate();
    const AddItemHandler = (event) => {
        event.preventDefault()
        ctx.addItem({ ...props, amount: 1 })
    }
    function goToProductHandler() {
        let showItems = {
            image: props.image,
            title: props.title,
            price: props.price,
        };
        props.getData(showItems);
        let path = "/productPage";
        navigate(path);
        console.log("click");
    }

    return (
        <div>
            <Card className='card' onClick={goToProductHandler}>
                <Card.Img className="img" src={props.image} alt={props.title} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle>
                        <span>${props.price}</span>
                    </Card.Subtitle>
                </Card.Body>
            </Card>
            <Button onClick={AddItemHandler} >Add to Cart</Button>
        </div>
    )
}

export default ProductItem
