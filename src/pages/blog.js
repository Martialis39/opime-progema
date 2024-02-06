// src/pages/blog.js

import React from "react"
import { graphql } from "gatsby"

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(({ node }) => (
          <li key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          html
        }
      }
    }
  }
`

export default BlogPage
