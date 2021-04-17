import React, { useRef, useState } from "react"
import { Container,Form, Button, Card, Alert } from "react-bootstrap"
// import { Link, useHistory } from "react-router-dom"
import firebase from 'gatsby-plugin-firebase';

import {AuthContext} from '../contexts/AuthContext';
import {navigate,Link} from 'gatsby'


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  // const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  // const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()


    try {
      setError("")
      setLoading(true)
      const result = await firebase.auth().signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      navigate("/blog")
      // await firebase.auth().signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      // history.push("/")
    } catch(err) {
      setError(err.message)
    }
    console.log(error);
    setLoading(false)
  }

  return (
    <>
    <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
        <h3 className="text-center mb-4">Please Login to view all blogs</h3>
          
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Login 
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup/">Sign Up</Link>
      </div>
      </div>
      </Container>
    </>
  )
}