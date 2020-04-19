import React from "react"
import {
  graphql,
  useStaticQuery,
} from "gatsby"

// Component Imports
import Layout from "../components/layout"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
    query {
      contentfulLandingPage {
        hero
        firstSectionTitle
        secondSectionTitle
      }
    }
  `)
  return (
    <div>
      <Layout>
        <h1>{data.contentfulLandingPage.hero}</h1>
        <h1>{data.contentfulLandingPage.firstSectionTitle}</h1>
        <h1>{data.contentfulLandingPage.secondSectionTitle}</h1>
      </Layout>
    </div>
  )
}

export default IndexPage
