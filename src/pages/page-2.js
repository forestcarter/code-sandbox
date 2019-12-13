import React from "react"
import { Link } from "gatsby"
import SSL from "../components/linkedList/SLL"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <SSL />
  </Layout>
)

export default SecondPage
