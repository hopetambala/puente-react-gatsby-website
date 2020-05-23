import React from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"
import Img from "gatsby-image"

// Component Imports
import Layout from "../components/layout"
import VolunteerCTA from "../components/volunteerCTA"
import VolunteerContactCTA from "../components/volunteerContactCTA"

// Style Imports
import volunteerStyles from "./volunteer.module.scss"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const VolunteerPage = () => {
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
        <div className={volunteerStyles.container}>
          <div className={volunteerStyles.banner}>
            <div className={volunteerStyles.bannerImage}>
              <Img fluid={data.image.childImageSharp.fluid} />
              
            </div>
          </div>
          <Container fluid className={volunteerStyles.body}>
            <div className={volunteerStyles.title}>
              <h1>Volunteer With Puente</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Row className={volunteerStyles.section}>
              <Col lg={true} className={volunteerStyles.sectionText}>
                <h2>Volunteer Roles</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </Col>
              <Col lg={true} className={volunteerStyles.sectionImage}>
                <Img fluid={data.image.childImageSharp.fluid} />
              </Col>
            </Row>
            <VolunteerCTA />
            <Row className={volunteerStyles.sectionEven}>
              <Col lg={true} className={volunteerStyles.sectionImage}>
                <Img fluid={data.image.childImageSharp.fluid} />
              </Col>
              <Col lg={true} className={volunteerStyles.sectionText}>
                <h2>Volunteer Process</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </Col>
            </Row>
            <div className={volunteerStyles.volunteer}>
              <div className={volunteerStyles.volunteerBio}>
                <h2>Volunteer Name</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <Row className={volunteerStyles.section}>
              <Col lg={true} className={volunteerStyles.sectionText}>
                <h2>Volunteer Impact</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </Col>
              <Col lg={true} className={volunteerStyles.sectionImpactNumbers}>
                <h2>Impact Numbers</h2>
              </Col>
            </Row>
            <VolunteerContactCTA />
          </Container>
        </div>
      </Layout>
    </div>
  )
}

export default VolunteerPage