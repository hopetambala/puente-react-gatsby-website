import React, { useState } from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"
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
        sectionHeader
        sectionParagraph {
          sectionParagraph
        }
        impactNumbers
        impactDescriptions
        sectionTwoHeader
        sectionTwoParagraph {
          sectionTwoParagraph
        }
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
              <img alt={data.contentfulProjectPage.heroImage.title} src={data.contentfulProjectPage.heroImage.resize.src} fluid />
              <h1 id="model">{data.contentfulProjectPage.heroText}</h1>
              <p>{data.contentfulProjectPage.heroSubText.heroSubText}</p>
            </div>
          </div>
          <div id="signature" className={styles.projects}>
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
            </Tabs>
          </div>
          <div id="impact" className={styles.section}>
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
          <div id="covid" className={styles.covid}>
            <div className={styles.covidText}>
              <h2>{data.contentfulProjectPage.sectionTwoHeader}</h2>
              <p>{data.contentfulProjectPage.sectionTwoParagraph.sectionTwoParagraph}</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ProgramsPage