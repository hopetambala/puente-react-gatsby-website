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
        firstSectionParagaph {
          content {
            content {
              value
            }
          }
          firstSectionParagaph
        }
        secondSectionTitle
        secondSectionParagraph {
          content {
            content {
              value
            }
          }
          secondSectionParagraph
        }
        thirdSectionTitle
        thirdSectionParagraph {
          content {
            content {
              value
            }
          }
          thirdSectionParagraph
        }
      }
    }
  `)
  return (
    <div>
      <Layout>
        <h1>{data.contentfulLandingPage.hero}</h1>
        <h1>{data.contentfulLandingPage.firstSectionTitle}</h1>
        <p>{data.contentfulLandingPage.firstSectionParagaph.content[0].content[0].value}</p>
        <h1>{data.contentfulLandingPage.secondSectionTitle}</h1>
        <h1>{data.contentfulLandingPage.thirdSectionTitle}</h1>
        {/* <p>{data.contentfulLandingPage.secondSectionParagraph}</p> */}
      </Layout>
    </div>
  )
}

export default IndexPage
