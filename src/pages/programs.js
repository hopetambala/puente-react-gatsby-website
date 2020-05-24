import React, { useState } from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"
import Img from "gatsby-image"
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

// Component Imports
import Layout from "../components/layout"

// Style/Icon Imports
import styles from "./programs.module.scss"

const ProgramsPage = () => {
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
       contentfulProjectTypes {
        projectTypeOne
        projectOneLongDescription {
          projectOneLongDescription
        }
        projectTypeTwo
        projectTwoLongDescription {
          projectTwoLongDescription
        }
        projectTypeThree
        projectThreeLongDescription {
          projectThreeLongDescription
        }
        projectTypeFour
        projectFourLongDescription {
          projectFourLongDescription
        }
        projectTypeFive
        projectFiveLongDescription {
          projectFiveLongDescription
        }
        projectTypeSix
        projectSixLongDescription {
          projectSixLongDescription
        }
        projectTypeSeven
        projectSevenLongDescription {
          projectSevenLongDescription
        }
      }
      contentfulProjectPage {
        heroText
        heroSubText {
          heroSubText
        }
        sectionHeader
        sectionParagraph {
          sectionParagraph
        }
        impactNumbers
        impactDescriptions
      }
    }
  `)
  const [key, setKey] = useState('one');
  return (
    <div>
      <Layout>
        <div className={styles.container}>
          <div className={styles.banner}>
            <div className={styles.bannerImage}>
              <Img fluid={data.image.childImageSharp.fluid} />
              <h1>{data.contentfulProjectPage.heroText}</h1>
            </div>
          </div>
          <div className={styles.divider}>
            <p>{data.contentfulProjectPage.heroSubText.heroSubText}</p>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionText}>
              <h2>{data.contentfulProjectPage.sectionHeader}</h2>
              <p>{data.contentfulProjectPage.sectionParagraph.sectionParagraph}</p>
            </div>
            <div className={styles.sectionImpact}>
              <div className={styles.sectionImpactNumbers}>
                <h2>{data.contentfulProjectPage.impactNumbers[0]}</h2>
                <h3>{data.contentfulProjectPage.impactDescriptions[0]}</h3>
              </div>
              <div className={styles.sectionImpactNumbers}>
                <h2>{data.contentfulProjectPage.impactNumbers[1]}</h2>
                <h3>{data.contentfulProjectPage.impactDescriptions[1]}</h3>
              </div>
              <div className={styles.sectionImpactNumbers}>
                <h2>{data.contentfulProjectPage.impactNumbers[2]}</h2>
                <h3>{data.contentfulProjectPage.impactDescriptions[2]}</h3>
              </div>
              <div className={styles.sectionImpactNumbers}>
                <h2>{data.contentfulProjectPage.impactNumbers[3]}</h2>
                <h3>{data.contentfulProjectPage.impactDescriptions[3]}</h3>
              </div>
            </div>
          </div>
          <div className={styles.projects}>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="one" title={data.contentfulProjectTypes.projectTypeOne}>
                <h2>{data.contentfulProjectTypes.projectTypeOne}</h2>
                <p>{data.contentfulProjectTypes.projectOneLongDescription.projectOneLongDescription}</p>
              </Tab>
              <Tab eventKey="two" title={data.contentfulProjectTypes.projectTypeTwo}>
                <h2>{data.contentfulProjectTypes.projectTypeTwo}</h2>
                <p>{data.contentfulProjectTypes.projectTwoLongDescription.projectTwoLongDescription}</p>
              </Tab>
              <Tab eventKey="three" title={data.contentfulProjectTypes.projectTypeThree}>
                <h2>{data.contentfulProjectTypes.projectTypeThree}</h2>
                <p>{data.contentfulProjectTypes.projectThreeLongDescription.projectThreeLongDescription}</p>
              </Tab>
              <Tab eventKey="four" title={data.contentfulProjectTypes.projectTypeFour}>
                <h2>{data.contentfulProjectTypes.projectTypeFour}</h2>
                <p>{data.contentfulProjectTypes.projectOneLongDescription.projectOneLongDescription}</p>
              </Tab>
              <Tab eventKey="five" title={data.contentfulProjectTypes.projectTypeFive}>
                <h2>{data.contentfulProjectTypes.projectTypeFive}</h2>
                <p>{data.contentfulProjectTypes.projectTwoLongDescription.projectTwoLongDescription}</p>
              </Tab>
              <Tab eventKey="six" title={data.contentfulProjectTypes.projectTypeSix}>
                <h2>{data.contentfulProjectTypes.projectTypeSix}</h2>
                <p>{data.contentfulProjectTypes.projectThreeLongDescription.projectThreeLongDescription}</p>
              </Tab>
              <Tab eventKey="seven" title={data.contentfulProjectTypes.projectTypeSeven}>
                <h2>{data.contentfulProjectTypes.projectTypeSeven}</h2>
                <p>{data.contentfulProjectTypes.projectOneLongDescription.projectOneLongDescription}</p>
              </Tab>
            </Tabs>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ProgramsPage