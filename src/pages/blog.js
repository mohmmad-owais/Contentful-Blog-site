import React , { useContext,useState }  from "react"
import { useStaticQuery, graphql,Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"


import { Card, Button, Alert } from "react-bootstrap"
import { AuthContext } from "../contexts/AuthContext"
import firebase from 'gatsby-plugin-firebase';
import {navigate} from 'gatsby'



const Blog = () => {
  const data = useStaticQuery(
    graphql`
    query myquery {
      allContentfulBlogPost(sort: {fields: spaceId, order: DESC}) {
        edges {
          node {
            title
            id
            slug
            createdAt(formatString: "Do MMMM, YYYY", fromNow: false)
            featuredImages {
              file{
								url
              }
            }
            excerpt {
              childMarkdownRemark {
                excerpt(pruneLength: 150)
              }
            }
          }
        }
      }
    }
    
    `
  )


  const [error, setError] = useState("")
  const { currentUser } = useContext(AuthContext)
  
  async function handleLogout() {
    setError("")
    try {
      await firebase.auth().signOut()
      navigate("/login")
      
    } catch(err) {
        
        setError(err.message)
        
    }
  }


  
  return (

    
  <>
    <Layout>
      <SEO title="Blog" />

      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Welcome</h2>
          {error && <Alert variant="danger">{error}</Alert>}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>

      <ul className="posts">
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              <div className="meta">
                <span>Posted on {edge.node.createdAt}</span>
              </div>

                <img  className="featured" src={edge.node.featuredImages.file.url} />
              {/* {edge.node.featuredImages && (
                <GatsbyImage
                  className="featured"
                  fluid={edge.node.featuredImages}
                
                /> */}
            
              <p className="excerpt">
                {edge.node.excerpt.childMarkdownRemark.excerpt}
              </p>
              <div className="button">
                <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
              </div>
            </li>
          )
        })}
      </ul>
      </Layout>
    </>
  )
}

export default Blog