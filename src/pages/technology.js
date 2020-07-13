import React from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

// Component Imports
import Layout from "../components/layout"
import Carousel from 'react-bootstrap/Carousel'
// import DemoCTA from "../components/DemoCTA"

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
        heroImage {
          title
          resize (height: 1000) {
            src            
          }
        }
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
      contentfulFeaturedVolunteers {
        volunteerName
        volunteerOneRole
        volunteerOneBio {
          volunteerOneBio
        }
        volunteerTwoName
        volunteerTwoRole
        volunteerTwoBio {
          volunteerTwoBio
        }
        volunteerThreeName
        volunteerThreeRole
        volunteerThreeBio {
          volunteerThreeBio
        } 
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
              <img alt={data.contentfulTechnologyPage.heroImage.title} src={data.contentfulTechnologyPage.heroImage.resize.src} fluid />
            </div>
          </div>
        </div>
        <div className={styles.divider}>
          <p>{data.contentfulTechnologyPage.dividerText}</p>
        </div>
        <div id="mobile-data-collection" className={styles.sectionOne}>
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
        <div id="data-analysis" className={styles.sectionTwo}>
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
        <div id="testimonials" className={styles.volunteer}>
          <div className={styles.volunteerBio}>
            <Carousel controls={false} indicators={false}>
              <Carousel.Item>
                <h2>{data.contentfulFeaturedVolunteers.volunteerName}</h2>
                <p>{data.contentfulFeaturedVolunteers.volunteerOneBio.volunteerOneBio}</p>
              </Carousel.Item>
              <Carousel.Item>
                <h2>{data.contentfulFeaturedVolunteers.volunteerTwoName}</h2>
                <p>{data.contentfulFeaturedVolunteers.volunteerTwoBio.volunteerTwoBio}</p>
              </Carousel.Item>
              <Carousel.Item>
                <h2>{data.contentfulFeaturedVolunteers.volunteerThreeName}</h2>
                <p>{data.contentfulFeaturedVolunteers.volunteerThreeBio.volunteerThreeBio}</p>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div id="request-demo" className={styles.demo} >
          <h2>Request a Demo</h2>
          <Form className={styles.requestForm}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name..." />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email..." />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>What can we do for you?</Form.Label>
              <Form.Control as="textarea" rows="4" placeholder="Message..." />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
          </Button>
          </Form>
        </div>
      </div >
    </Layout>
  )
}

export default TechnologyPage
