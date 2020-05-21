import React from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"
import Img from "gatsby-image"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

// Component Imports
import Layout from "../components/layout"
import FaqCTA from "../components/faqCTA"

// Style Imports
import faqStyles from "./faq.module.scss"

const FAQPage = () => {
  const data = useStaticQuery(
    graphql`
    query {
      image: file(relativePath: { eq: "placeholder-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <Layout>
        <div className={faqStyles.container}>
          <div className={faqStyles.banner}>
            <div className={faqStyles.bannerImage}>
              <Img fluid={data.image.childImageSharp.fluid} />
              <div className={faqStyles.title}>
                <h1>Frequently Asked Questions</h1>
              </div>
            </div>
          </div>
          <div className={faqStyles.body}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
              anim id est laborum.
            </p>
            <div className={faqStyles.accordion}>
              <Accordion>
                <Card>
                  <Accordion.Toggle className={faqStyles.accordionHeader} as={Card.Header} eventKey="0">
                    <h2>
                      Technology FAQs
                    </h2>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <h3>FAQ Question</h3>
                      <p>FAQ answer</p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle className={faqStyles.accordionHeader} as={Card.Header} eventKey="1">
                    <h2>
                      Volunteer Program FAQs
                    </h2>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <h3>FAQ Question</h3>
                      <p>FAQ answer</p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle className={faqStyles.accordionHeader} as={Card.Header} eventKey="2">
                    <h2>
                      General FAQs
                    </h2>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <h3>FAQ Question</h3>
                      <p>FAQ answer</p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </div>
        </div>
        <FaqCTA />
      </Layout>
    </div>
  )
}

export default FAQPage