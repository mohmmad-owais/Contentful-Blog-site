import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import SEO from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
export const query = graphql`
  query($slug : String ) {
    contentfulBlogPost(slug: {eq:$slug}) {
      title
      createdAt(formatString: "Do MMMM, YYYY")
      featuredImages {
        file{
          url
        }
      }
      body {
        raw
      }
    }
  }
`


const options = {
    renderNode: {
      [INLINES.ENTRY_HYPERLINK]: ({
        data: {
          target: { slug, body },
        },
      }) => <Link to={slug}>{body}</Link>,
      [BLOCKS.EMBEDDED_ASSET]: node => <GatsbyImage {...node.data.target} />,
    },
  }

const BlogPost = props => {
    
    const {body} =props.data.contentfulBlogPost;
 
    return (
    <Layout>
      <SEO title={props.data.contentfulBlogPost.title} />
      <Link to="/blog/">Visit the Blog Page</Link>
      <div className="content">
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <span className="meta">
          Posted on {props.data.contentfulBlogPost.createdAt}
        </span>
          <img src={props.data.contentfulBlogPost.featuredImages.file.url} />

        {/* {props.data.contentfulBlogPost.featuredImages && (
          <GatsbyImage
            className="featured"
            fluid={props.data.contentfulBlogPost.featuredImages.Layout}
            alt={props.data.contentfulBlogPost.title}
          />
        )} */}

        {renderRichText(body,options)}
      </div>
    </Layout>
  )
}

export default BlogPost