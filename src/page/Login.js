import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default function Login() {
    return (
        <Container className="loginContainer">
            <div className="loginHead">
                <h1>Login</h1>
            </div>
            <Form className="form">
                <Form.Group controlId="formBasicEmail" className="email">
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email here" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
                <div className="btnDiv">
                    <Button variant="primary" type="submit" className="loginBtn">
                        Login
                    </Button>
                </div>
            </Form>
        </Container>
    )
}
