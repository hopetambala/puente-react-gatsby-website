import React from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"
import Img from "gatsby-image"

// Component Imports
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

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
      <Container className={styles.container}>
        <Row className={styles.row}>
          <Col lg={true} className={styles.col}>
            <h1>{data.contentfulTechnologyPage.pageHeroText}</h1>
            <p>{data.contentfulTechnologyPage.heroSubText}</p>
          </Col>
          <Col lg={true}>
            <Img fluid={data.image.childImageSharp.fluid} />
          </Col>
        </Row>

      </Container>
    </Layout>
  )
}

export default TechnologyPage
