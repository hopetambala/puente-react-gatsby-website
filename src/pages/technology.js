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
        dividerTextLong{
          childMarkdownRemark {
            html
          }
        }
        sectionOneGif {
          title
          resize (height: 1000) {
            src            
          }
        }
        sectionOneHeader
        sectionOneHeaderOne
        sectionOneParagraphOne {
          childMarkdownRemark {
            html
          }
        }
        sectionOneHeaderTwo
        sectionOneParagraphTwo {
          childMarkdownRemark {
            html
          }
        }
        sectionOneHeaderThree
        sectionOneParagraphThree {
          childMarkdownRemark {
            html
          }
        }
        sectionOneKeyFeatures
        sectionOneKeyFeaturesList
        sectionTwoGif {
          title
          resize (height: 1000) {
            src            
          }
        }
        sectionTwoHeader
        sectionTwoHeaderOne
        sectionTwoParagraphOne {
          childMarkdownRemark {
            html
          }
        }
        sectionTwoHeaderTwo
        sectionTwoParagraphTwo {
          childMarkdownRemark {
            html
          }
        }
        sectionTwoHeaderThree
        sectionTwoParagraphThree {
          childMarkdownRemark {
            html
          }
        }
        sectionTwoKeyFeatures
        sectionTwoKeyFeaturesList
        testimonialOne {
          childMarkdownRemark {
            html
          }
        }
        testimonialTwo {
          childMarkdownRemark {
            html
          }
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
          {/* <p>{data.contentfulTechnologyPage.dividerText}</p> */}
          <div
            dangerouslySetInnerHTML={{
              __html: data.contentfulTechnologyPage.dividerTextLong.childMarkdownRemark.html,
            }}
          />
        </div>
        <div id="mobile-data-collection" className={styles.sectionOne}>
          <h2>{data.contentfulTechnologyPage.sectionOneHeader}</h2>
          <div className={styles.collectionContent}>
            <div className={styles.collectionImage}>
              <div className={styles.placeholder}>
                <img alt={data.contentfulTechnologyPage.sectionOneGif.title} src={data.contentfulTechnologyPage.sectionOneGif.resize.src} fluid />
              </div>
            </div>
            <div className={styles.collectionText}>
              <h3>{data.contentfulTechnologyPage.sectionOneHeaderOne}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.contentfulTechnologyPage.sectionOneParagraphOne.childMarkdownRemark.html,
                }}
              />
              <h3>{data.contentfulTechnologyPage.sectionOneHeaderTwo}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.contentfulTechnologyPage.sectionOneParagraphTwo.childMarkdownRemark.html,
                }}
              />
              <h3>{data.contentfulTechnologyPage.sectionOneHeaderThree}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.contentfulTechnologyPage.sectionOneParagraphThree.childMarkdownRemark.html,
                }}
              />
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
                <img alt={data.contentfulTechnologyPage.sectionTwoGif.title} src={data.contentfulTechnologyPage.sectionTwoGif.resize.src} fluid />
              </div>
            </div>
            <div className={styles.analysisText}>
              <h3>{data.contentfulTechnologyPage.sectionTwoHeaderOne}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.contentfulTechnologyPage.sectionTwoParagraphOne.childMarkdownRemark.html,
                }}
              />
              <h3>{data.contentfulTechnologyPage.sectionTwoHeaderTwo}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.contentfulTechnologyPage.sectionTwoParagraphTwo.childMarkdownRemark.html,
                }}
              />
              <h3>{data.contentfulTechnologyPage.sectionTwoHeaderThree}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.contentfulTechnologyPage.sectionTwoParagraphThree.childMarkdownRemark.html,
                }}
              />
              <h3>{data.contentfulTechnologyPage.sectionTwoKeyFeatures}</h3>
              {data.contentfulTechnologyPage.sectionTwoKeyFeaturesList.map((feature) => {
                return (
                  <p>{feature}</p>
                )
              })}
            </div>
          </div>
        </div>
        <div id="testimonials" className={styles.testimonials}>
          <div className={styles.testimonial}>
            <h3 className={styles.openQuote}>"</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: data.contentfulTechnologyPage.testimonialOne.childMarkdownRemark.html,
              }}
            />
            <h3 className={styles.closeQuote}>"</h3>
          </div>
          <div className={styles.testimonial}>
            <h3 className={styles.openQuote}>"</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: data.contentfulTechnologyPage.testimonialTwo.childMarkdownRemark.html,
              }}
            />
            <h3 className={styles.closeQuote}>"</h3>
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
