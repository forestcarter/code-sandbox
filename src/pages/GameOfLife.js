import React from "react"
import GOL from "../components/gameoflife/GOL"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GameOfLife = () => (
  <Layout>
    <SEO title="Game Of Life" />
    <GOL />
  </Layout>
)

export default GameOfLife
