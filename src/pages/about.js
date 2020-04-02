import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About page</h1>
      <p>
        I love technology. <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
