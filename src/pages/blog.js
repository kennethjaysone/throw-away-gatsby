import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import BlogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will show up here</p>
      {data.allMarkdownRemark.edges.length ? (
        <ol className={BlogStyles.posts}>
          {data.allMarkdownRemark.edges.map(blog => {
            return (
              <li className={BlogStyles.post} key={blog.node.frontmatter.title}>
                <Link to={`/blog/${blog.node.fields.slug}`}>
                  <h2>{blog.node.frontmatter.title}</h2>
                  <p>{blog.node.frontmatter.date}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      ) : (
        <p>No posts for this user</p>
      )}
    </Layout>
  )
}

export default BlogPage
