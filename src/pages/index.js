import React from "react"
import {
  Link,
  graphql,
  useStaticQuery,
} from "gatsby"
import Img from "gatsby-image"

// Component Imports
import Layout from "../components/layout"

// Style Imports
import styles from "./index.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
    query {
      image: file(relativePath: { eq: "placeholder.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contentfulLandingPage {
        hero
        firstSectionTitle
        firstSectionParagaph {
          content {
            content {
              value
            }
          }
        }
        secondSectionTitle
        secondSectionParagraph {
          content {
            content {
              value
            }
          }
        }
        thirdSectionTitle
        thirdSectionParagraph {
          content {
            content {
              value
            }
          }
        }
        fourthSectionTitle
        fourthSectionParagraph {
          content {
            content {
              value
            }
          }
        }
        partnerships {
          title
          resize (height: 200) {
            src
          }
        }
      }
    }
  `)
  return (
    <div>
      <Layout>
        <div className={styles.container}>
          <div className={styles.banner}>
            <div className = {styles.heroImage}>
              <Img fluid={data.image.childImageSharp.fluid} />
            </div>
            <div className={styles.hero}>
              <h1>{data.contentfulLandingPage.hero}</h1>
            </div>
          </div>
          <div className={styles.sectionOdd}>
            <div className={styles.sectionText}>
              <h2>{data.contentfulLandingPage.firstSectionTitle}</h2>
              <p>{data.contentfulLandingPage.firstSectionParagaph.content[0].content[0].value}</p>
            </div>
            <div className={styles.sectionImage}>
              <Img fluid={data.image.childImageSharp.fluid} />
            </div>
          </div>
          <div className={styles.sectionImpact}>
            <div className={styles.sectionImpactNumbers}>
              <h2>Impact Numbers</h2>
            </div>
            <div className={styles.sectionText}>
              <h2>{data.contentfulLandingPage.secondSectionTitle}</h2>
              <p>{data.contentfulLandingPage.secondSectionParagraph.content[0].content[0].value}</p>
            </div>
          </div>
          <div className={styles.sectionBlue}>
            <h2>Case Studies</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              LINKS TO PROJECTS PAGE
            </p>
            <Link className={styles.button} to="/projects">
              <div className={styles.buttonBackground}>
                <p>Read More</p>
              </div>
            </Link>
          </div>
          <div className={styles.sectionOdd}>
            <div className={styles.sectionText}>
              <h2>{data.contentfulLandingPage.thirdSectionTitle}</h2>
              <p>{data.contentfulLandingPage.thirdSectionParagraph.content[0].content[0].value}</p>
            </div>
            <div className={styles.sectionImage}>
              <Img fluid={data.image.childImageSharp.fluid} />
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionImage}>
              <Img fluid={data.image.childImageSharp.fluid} />
            </div>
            <div className={styles.sectionText}>
              <h2>{data.contentfulLandingPage.fourthSectionTitle}</h2>
              <p>{data.contentfulLandingPage.fourthSectionParagraph.content[0].content[0].value}</p>
            </div>
          </div>
          <div className={styles.sectionPartners}>
            <h2>Our Partners</h2>
            <div className={styles.partnerImages}>
              {data.contentfulLandingPage.partnerships.map((partnerships) => {
                return (
                  <img alt={partnerships.title} src={partnerships.resize.src} />
                )
              })}
              {/* <img alt={data.contentfulLandingPage.partnerships[0].title} src={data.contentfulLandingPage.partnerships[0].resize.src} /> */}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage
