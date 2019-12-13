import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home/Home"
const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `react`, `bootstrap`, `Forest Carter`, `portfolio`]}
    />
    <Home />
  </Layout>
)

export default IndexPage
