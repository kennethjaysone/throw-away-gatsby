import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm Kenneth, a techie from Kuala Lumpur</h2>
      <p>
        Need to build something? <Link to="/contact/">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
