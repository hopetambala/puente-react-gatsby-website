import React from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"
import Img from "gatsby-image"

// Component Imports
import Layout from "../components/layout"
import DemoCTA from "../components/DemoCTA"

// Styles Import
import styles from './technology.module.scss'

const TechnologyPage = () => {
  const data = useStaticQuery(
  graphql`
    query {
      image: file(relativePath: { eq: "1650x1165.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contentfulTechnologyPage {
        pageHeroText
        heroSubText
        dividerText
        sectionOneHeader
        sectionOneHeaderOne
        sectionOneParagraphOne {
          sectionOneParagraphOne
        }
        sectionOneHeaderTwo
        sectionOneParagraphTwo {
          sectionOneParagraphTwo
        }
        sectionOneHeaderThree
        sectionOneParagraphThree {
          sectionOneParagraphThree
        }
        sectionOneKeyFeatures
        sectionOneKeyFeaturesList
        sectionTwoHeader
        sectionTwoHeaderOne
        sectionTwoParagraphOne {
          sectionTwoParagraphOne
        }
        sectionTwoHeaderTwo
        sectionTwoParagraphTwo {
          sectionTwoParagraphTwo
        }
        sectionTwoHeaderThree
        sectionTwoParagraphThree {
          sectionTwoParagraphThree
        }
        sectionTwoKeyFeatures
        sectionTwoKeyFeaturesList
      }
    }
  `)
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h1>{data.contentfulTechnologyPage.pageHeroText}</h1>
            <p>{data.contentfulTechnologyPage.heroSubText}</p>
          </div>
          <div className={styles.col}>
            <div>
              <Img fluid={data.image.childImageSharp.fluid} />
            </div>
          </div>
        </div>
        <div className={styles.divider}>
          <p>{data.contentfulTechnologyPage.dividerText}</p>
        </div>
        <div className={styles.sectionOne}>
          <h2>{data.contentfulTechnologyPage.sectionOneHeader}</h2>
          <div className={styles.collectionContent}>
            <div className={styles.collectionImage}>
              <div className={styles.placeholder}>
                gif of cell phone running app
              </div>
            </div>
            <div className={styles.collectionText}>
              <h3>{data.contentfulTechnologyPage.sectionOneHeaderOne}</h3>
              <p>{data.contentfulTechnologyPage.sectionOneParagraphOne.sectionOneParagraphOne}</p>
              <h3>{data.contentfulTechnologyPage.sectionOneHeaderTwo}</h3>
              <p>{data.contentfulTechnologyPage.sectionOneParagraphTwo.sectionOneParagraphTwo}</p>
              <h3>{data.contentfulTechnologyPage.sectionOneHeaderThree}</h3>
              <p>{data.contentfulTechnologyPage.sectionOneParagraphThree.sectionOneParagraphThree}</p>
              <h3>{data.contentfulTechnologyPage.sectionOneKeyFeatures}</h3>
              {data.contentfulTechnologyPage.sectionOneKeyFeaturesList.map((feature) => {
                return (
                  <p>{feature}</p>
                )
              })}
            </div>
          </div>
        </div>
        <div className={styles.sectionTwo}>
          <h2>{data.contentfulTechnologyPage.sectionTwoHeader}</h2>
          <div className={styles.analysisContent}>
            <div className={styles.analysisImage}>
              <div className={styles.placeholder}>
                gif of computer analyzing data
              </div>
            </div>
            <div className={styles.analysisText}>
              <h3>{data.contentfulTechnologyPage.sectionTwoHeaderOne}</h3>
              <p>{data.contentfulTechnologyPage.sectionTwoParagraphOne.sectionTwoParagraphOne}</p>
              <h3>{data.contentfulTechnologyPage.sectionTwoHeaderTwo}</h3>
              <p>{data.contentfulTechnologyPage.sectionTwoParagraphTwo.sectionTwoParagraphTwo}</p>
              <h3>{data.contentfulTechnologyPage.sectionTwoHeaderThree}</h3>
              <p>{data.contentfulTechnologyPage.sectionTwoParagraphThree.sectionTwoParagraphThree}</p>
              <h3>{data.contentfulTechnologyPage.sectionTwoKeyFeatures}</h3>
              {data.contentfulTechnologyPage.sectionTwoKeyFeaturesList.map((feature) => {
                return (
                  <p>{feature}</p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <DemoCTA />
    </Layout>
  )
}

export default TechnologyPage
