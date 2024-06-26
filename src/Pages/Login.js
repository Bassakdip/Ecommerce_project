import React,{ useContext, useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import CartContext from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const ctx = useContext(CartContext);
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passRef = useRef("");
  const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC1729ykiSi-o6Ofyp3QnpkKQYPHUj08Z8';

  const loginHander = async(e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    const res = await fetch(url,{
      method: "POST",
      body: JSON.stringify({
        email : email,
        Password : pass,
        returnSecureToken: true,
      }),
      headers:{
        "Content-Type":"application/json",
      },
    });

    const data = res.json();
    if (res.ok) {
      console.log("login successfully");
      data.then((data) => {
        ctx.login(data.idToken);
      });
      navigate("/store");
    }
    if (!res.ok) {
      data.then((data) => {
        console.log(data);
        alert(data.error.message);
      });
    }
  }

  return (
    <Container style={{ marginTop: "90px" }}>
      <Form onSubmit={loginHander}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            ref={emailRef}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            ref={passRef}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  )
}

export default Login
