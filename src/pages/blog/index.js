import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
    return (
      <Layout pageTitle="My Blog Posts">
        {
          data.allMdx.nodes.map((node) => (
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
          ))
        }
      </Layout>
    )
  }

export const query = graphql`
  query MyQuery {
    allMdx(sort: {fields: frontmatter___datePublished, order: DESC}) {
      nodes {
        frontmatter {
          datePublished(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage