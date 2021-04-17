import React from 'react';
import { Container } from 'react-bootstrap';
import Signup from '../pages/Signup';

import Blog from '../pages/blog';
import Login from '../pages/Login';
import PrivateRoute from '../pages/PrivateRoute';
import SEO from './seo';
import { Router } from "@reach/router"


function App() {
  return (
    <>
<SEO title="Home" />
       <div className="App">
     
         
    <Router >
  
          <Blog path="/" default />
          
          <Signup path="/signup"  />
          <Login path="/login"  />
          
 
    </Router>
       
       
    </div>
</>  
  );
}

export default App;
