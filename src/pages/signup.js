import React, { useRef, useState,useContext } from "react"
import { Container,Form, Button, Card, Alert } from "react-bootstrap"
// import {useAuth} from '../contexts/AuthContext'
// import {  useHistory } from "react-router-dom"
import firebase from 'gatsby-plugin-firebase';
import {AuthContext} from '../contexts/AuthContext';
import {navigate,Link} from 'gatsby'

export default function Signup() {

  const {setCurrentUser} = useContext(AuthContext)
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  // const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  // const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      const result = await firebase.auth().createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      navigate("/login")
      // await signup(emailRef.current.value, passwordRef.current.value)
      // history.push("/")
    } catch(err) {
      setError(err.message) 
    }
    
    setLoading(false)
  }

  return (
    <>  
    <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          
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
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login/">Login</Link>
      </div>
      </div>
      </Container>
    </>
  )
}