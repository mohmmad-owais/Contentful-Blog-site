import React, { useContext } from "react"
import { navigate, Router } from "@reach/router"
import { AuthContext } from "../contexts/AuthContext"


export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useContext(AuthContext)

  return (
    <Router
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : navigate('/login')
      }}
    ></Router>
  )
}