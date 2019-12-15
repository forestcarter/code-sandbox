import React from "react"
import "../home/Home.css"
import Image from "../image"

export default () => (
  <div className="Home">
    <h2 className="sectionHeader">Forest Carter's Portfolio</h2>
    <div className="homeDescriptionContainer">
      <p className="description">
        This is a place for experimentation with new tools and methods. Each
        link in the NavBar is written in{" "}
        <a href="https://www.typescriptlang.org/">Typescript</a> and tested with
        <a href="https://jestjs.io//"> Jest</a> and{" "}
        <a href="https://airbnb.io/enzyme/">Enzyme</a>. This site was built
        using ReactJS in GatsbyJS. Hosting and CI/CD provided by{" "}
        <a href="https://aws.amazon.com/amplify/">AWS Amplify</a>.
      </p>

      <Image />
    </div>
  </div>
)
