import React, { useRef } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Contact.css";

const Contact = () => {
  const name = useRef('');
  const email = useRef('');
  const contact = useRef('');

  async function submitHandler(e){
    e.preventDefault();
    const contactDetails = {
      name: name.current.value,
      email: email.current.value,
      contact: contact.current.value,
    };
    try{
      const response = await fetch("https://ecomerce-5d1eb-default-rtdb.firebaseio.com/contact.json",
      {
        method: "POST",
        body: JSON.stringify(contactDetails),
        headers:{
          "content-type": "aplication/json",
        },
      })
      if(!response.ok){
        throw new Error("Something is wrong!");
      }
    }
    catch(error){
      console.log(error);
    }
    name.current.value = "";
    email.current.value = "";
    contact.current.value = "";
    alert("submit successfull");
  }

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="Name">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Name" ref={name} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Email">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={email} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="contact">
        <Form.Label>Contact No:</Form.Label>
        <Form.Control type="number" ref={contact} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );

}

export default Contact
