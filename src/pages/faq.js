import React from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"
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
      contentfulFaqPage {
        heroImage {
          title
          resize (height: 1000) {
            src            
          }
        }
        heroText
        heroSubText {
          heroSubText
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
              <img alt={data.contentfulFaqPage.heroImage.title} src={data.contentfulFaqPage.heroImage.resize.src} fluid />
              <div className={faqStyles.title}>
                <h1>{data.contentfulFaqPage.heroText}</h1>
              </div>
            </div>
          </div>
          <div className={faqStyles.body}>
            <p>{data.contentfulFaqPage.heroSubText.heroSubText}</p>
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