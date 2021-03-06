import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Login() {
  let history = useHistory();
  let email;
  let password;

  let dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();

    let user = { email: email, password: password };

    dispatch({
      type: "login",
      payload: user,
    });

    history.goBack();
  };

  return (
    <Container className="loginContainer">
      <div className="loginBox">
        <div className="loginHead">
          <h1>Login</h1>
        </div>
        <Form className="form" onSubmit={(e) => login(e)}>
          <Form.Group controlId="formBasicEmail" className="email">
            <Form.Label>Email Address:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email here"
              onChange={(e) => (email = e.target.value)}
            />
            <Form.Text className="text-muted">
              Enter a random email to login or click "Login" to continue
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              onChange={(e) => (password = e.target.value)}
            />
            <Form.Text className="text-muted">
              Enter a random password to login or click "Login" to continue
            </Form.Text>
          </Form.Group>
          <div className="btnDiv">
            <Button variant="primary" type="submit" className="loginBtn">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}
