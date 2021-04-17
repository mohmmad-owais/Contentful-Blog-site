import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {Container} from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Login from "./Login"
import Blog from "./blog"
import PrivateRoute from "./PrivateRoute"
import App from "../components/App"


const IndexPage = () => (
          <App />

)

export default IndexPage
