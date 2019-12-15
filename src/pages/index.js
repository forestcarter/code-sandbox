import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home/Home"
const IndexPage = () => (
  <Layout>
<<<<<<< HEAD
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great with changes Auto-deploy? Let's try.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
=======
    <SEO
      title="Home"
      keywords={[`gatsby`, `react`, `bootstrap`, `Forest Carter`, `portfolio`]}
    />
    <Home />
>>>>>>> dev
  </Layout>
)

export default IndexPage
