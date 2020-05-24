import React from "react"
import {
  Link,
  graphql,
  useStaticQuery,
} from "gatsby"
import Img from "gatsby-image"
import Carousel from 'react-bootstrap/Carousel'

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
          fluid(maxWidth: 1000) {
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
      contentfulProjectTypes {
        projectTypeOne
        projectOneShortDescription {
          projectOneShortDescription
        }
        projectTypeTwo
        projectTwoShortDescription {
          projectTwoShortDescription
        }
        projectTypeThree
        projectThreeShortDescription {
          projectThreeShortDescription
        }
        projectTypeFour
        projectFourShortDescription {
          projectFourShortDescription
        }
        projectTypeFive
        projectFiveShortDescription {
          projectFiveShortDescription
        }
        projectTypeSix
        projectSixShortDescription {
          projectSixShortDescription
        }
        projectTypeSeven
        projectSevenShortDescription {
          projectSevenShortDescription
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
            <Carousel controls={false} indicators={false}>
              <Carousel.Item>
                <h2>{data.contentfulProjectTypes.projectTypeOne}</h2>
                <p>{data.contentfulProjectTypes.projectOneShortDescription.projectOneShortDescription}</p>
              </Carousel.Item>
              <Carousel.Item>
                <h2>{data.contentfulProjectTypes.projectTypeTwo}</h2>
                <p>{data.contentfulProjectTypes.projectTwoShortDescription.projectTwoShortDescription}</p>
              </Carousel.Item>
              <Carousel.Item>
                <h2>{data.contentfulProjectTypes.projectTypeThree}</h2>
                <p>{data.contentfulProjectTypes.projectThreeShortDescription.projectThreeShortDescription}</p>
              </Carousel.Item>
              <Carousel.Item>
                <h2>{data.contentfulProjectTypes.projectTypeFour}</h2>
                <p>{data.contentfulProjectTypes.projectFourShortDescription.projectFourShortDescription}</p>
              </Carousel.Item>
              <Carousel.Item>
                <h2>{data.contentfulProjectTypes.projectTypeFive}</h2>
                <p>{data.contentfulProjectTypes.projectFiveShortDescription.projectFiveShortDescription}</p>
              </Carousel.Item>
              <Carousel.Item>
                <h2>{data.contentfulProjectTypes.projectTypeSix}</h2>
                <p>{data.contentfulProjectTypes.projectSixShortDescription.projectSixShortDescription}</p>
              </Carousel.Item>
              <Carousel.Item>
                <h2>{data.contentfulProjectTypes.projectTypeSeven}</h2>
                <p>{data.contentfulProjectTypes.projectSevenShortDescription.projectSevenShortDescription}</p>
              </Carousel.Item>
            </Carousel>
            <Link className={styles.button} to="/programs">
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
