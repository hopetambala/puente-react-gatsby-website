import React, {useEffect, createRef} from "react"
import lottie from "lottie-web"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"

import { Form, Button, Card, Row, Col}  from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

// Component Imports
import Layout from "../../components/layout"
import dataAnimation from '../../animations/data.json'

// Styles Import
import styles from './index.module.scss'

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
          resize (height: 750) {
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

  let dataContainer = createRef();
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: dataContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: dataAnimation
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []); // eslint-disable-line

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h1>{data.contentfulTechnologyPage.pageHeroText}</h1>
            <p>{data.contentfulTechnologyPage.heroSubText}</p>
          </div>
          <div className={styles.col}>
            {/* <div>
              <img alt={data.contentfulTechnologyPage.heroImage.title} src={data.contentfulTechnologyPage.heroImage.resize.src} fluid />
            </div> */}
            <div className="data-container" ref={dataContainer} />

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
        <div id="interactive-map" className={styles.sectionTwo}>
          <h2>{data.contentfulTechnologyPage.sectionTwoHeader}</h2>
          <iframe width="100%" height="800px" frameBorder="0" className={styles.analysisContent} src="https://d2k82nkbrja4ga.cloudfront.net" title="Puente Maps"></iframe>
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
        <div id="pricing" className={styles.sectionOne}>
          <div className={styles.pricing}>
            <h2>Pricing Structure</h2>
            <Row>
              <Col>
                <Card className={styles.card}>
                  <Card.Body className={styles.cardBody}>
                    <Card.Title className={[styles.cardTitle,"text-muted text-uppercase text-center"]}>Start</Card.Title>
                    <h6 className={styles.cardPrice}>$50<span className={styles.period}>/month</span></h6>
                    <hr />
                    <ul className="fa-ul">
                      <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Up to <strong>3</strong> active users</li>
                      <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span><strong>Unlimited</strong> Storage</li>
                      <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Access to pre-built out forms</li>
                      <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Offline Capability*</li>
                      <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Excel/CSV exports</li>
                      <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>Custom Forms</li>
                      <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>Dedicated Staff Support</li>
                      <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>On-the-ground training</li>
                      <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>Automated Monthly Status Reports</li>
                      <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>SMS Monitoring and Evaluation</li>
                      <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>Open API Access</li>
                    </ul>
                    <Button href="#" primary block className={[styles.btn,"text-uppercase"]}>Contact for Details</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className={styles.card}>
                  <Card.Body className={styles.cardBody}>
                    <Card.Title className={[styles.cardTitle,"text-muted text-uppercase text-center"]}>Grow</Card.Title>
                    <h6 className={styles.cardPrice}>$150<span className={styles.period}>/month</span></h6>
                    <hr />
                    <Card.Subtitle className={styles.cardTitle}>Everything in "Start" plus!</Card.Subtitle>
                    <ul className="fa-ul">
                      <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Up to <strong>10</strong> active users</li>
                      <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Up to <strong>3</strong> custom forms</li>
                      <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Up to <strong>1 hour</strong> of dedicated staff support</li>
                      <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>On-the-ground training</li>
                      <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>Automated Monthly Status Reports</li>
                      <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>SMS Monitoring and Evaluation</li>
                      <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>Open API Access</li>
                    </ul>
                    <Button href="mailto:info@puente-dr.org" primary block className={[styles.btn,"text-uppercase"]}>Contact for Details</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className={styles.card}>
                    <Card.Body className={styles.cardBody}>
                      <Card.Title className={[styles.cardTitle,"text-muted text-uppercase text-center"]}>Expand</Card.Title>
                      <h6 className={styles.cardPrice}>$350<span className={styles.period}>/month</span></h6>
                      <hr />
                      <Card.Subtitle className={styles.cardTitle}>Everything in "Grow" plus!</Card.Subtitle>
                      <ul className="fa-ul">
                        <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Up to <strong>20</strong> active users</li>
                        <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Up to <strong>6</strong> custom forms</li>
                        <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Up to <strong>3 hours</strong> of dedicated staff support</li>
                        <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>On-the-ground training</li>
                        <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Automated Monthly Status Reports</li>
                        <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>SMS Monitoring and Evaluation</li>
                        <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>Open API Access</li>
                      </ul>
                      <Button href="#" primary block className={[styles.btn,"text-uppercase"]}>Contact for Details</Button>
                    </Card.Body>
                  </Card>
              </Col>
              <Col>
                <Card className={styles.card}>
                    <Card.Body className={styles.cardBody}>
                      <Card.Title className={[styles.cardTitle,"text-muted text-uppercase text-center"]}>Establish</Card.Title>
                      <h6 className={styles.cardPrice}>$750<span className={styles.period}>/month</span></h6>
                      <hr />
                      <Card.Subtitle className={styles.cardTitle}>Everything in "Expand" plus!</Card.Subtitle>
                      <ul className="fa-ul">
                        <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span><strong>Unlimited</strong> active users</li>
                        <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span><strong>Unlimited</strong> custom forms</li>
                        <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Up to <strong>8 hours</strong> of dedicated staff support</li>
                        <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>SMS Monitoring and Evaluation</li>
                        <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Open API Access</li>
                      </ul>
                      <Button href="#" primary block className={[styles.btn,"text-uppercase"]}>Contact for Details</Button>
                    </Card.Body>
                  </Card>
              </Col>
            </Row>
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
