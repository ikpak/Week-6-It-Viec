import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function Login() {
    let state = useSelector(state => state)

    let history = useHistory()
    let [email, setEmail] = useState(null)
    let [password, setPassword] = useState(null)

    let dispatch = useDispatch()

    const login = (e) => {
        e.preventDefault()

        let user = {email: email, password: password}

        dispatch({
            type: 'login',
            payload: user
        })

        history.goBack()
    }

    return (
        <Container className="loginContainer">
            <div className="loginHead">
                <h1>Login</h1>
            </div>
            <Form className="form" onSubmit={(e) => login(e)}>
                <Form.Group controlId="formBasicEmail" className="email">
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email here" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
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
