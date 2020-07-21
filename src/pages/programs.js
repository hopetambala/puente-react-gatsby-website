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
          childMarkdownRemark {
            html
          }
        }
        projectTypeTwo
        projectTwoLongDescription {
          childMarkdownRemark {
            html
          }
        }
        projectTypeThree
        projectThreeLongDescription {
          childMarkdownRemark {
            html
          }
        }
        projectTypeFour
        projectFourLongDescription {
          childMarkdownRemark {
            html
          }
        }
        projectTypeFive
        projectFiveLongDescription {
          childMarkdownRemark {
            html
          }
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
          childMarkdownRemark {
            html
          }
        }
        sectionHeader
        sectionParagraph {
          childMarkdownRemark {
            html
          }
        }
        signatureProjectsHeader
        signatureProjectsParagraph {
          childMarkdownRemark {
            html
          }
        }
        impactNumbers
        impactDescriptions
        sectionTwoHeader
        sectionTwoParagraph {
          childMarkdownRemark {
            html
          }
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
              <div id="model" className={styles.title}>
                <h1>{data.contentfulProjectPage.heroText}</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.contentfulProjectPage.heroSubText.childMarkdownRemark.html,
                  }}
                />
              </div>
            </div>
          </div>
          <div id="signature" className={styles.projects}>
            <h2>{data.contentfulProjectPage.signatureProjectsHeader}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data.contentfulProjectPage.signatureProjectsParagraph.childMarkdownRemark.html,
              }}
            />
            <Tabs
              className={styles.tabs}
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="one" title={data.contentfulProjectTypes.projectTypeOne}>
                <h2>{data.contentfulProjectTypes.projectTypeOne}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.contentfulProjectTypes.projectOneLongDescription.childMarkdownRemark.html,
                  }}
                />
              </Tab>
              <Tab eventKey="two" title={data.contentfulProjectTypes.projectTypeTwo}>
                <h2>{data.contentfulProjectTypes.projectTypeTwo}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.contentfulProjectTypes.projectTwoLongDescription.childMarkdownRemark.html,
                  }}
                />
              </Tab>
              <Tab eventKey="three" title={data.contentfulProjectTypes.projectTypeThree}>
                <h2>{data.contentfulProjectTypes.projectTypeThree}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.contentfulProjectTypes.projectThreeLongDescription.childMarkdownRemark.html,
                  }}
                />
              </Tab>
              <Tab eventKey="four" title={data.contentfulProjectTypes.projectTypeFour}>
                <h2>{data.contentfulProjectTypes.projectTypeFour}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.contentfulProjectTypes.projectFourLongDescription.childMarkdownRemark.html,
                  }}
                />
              </Tab>
              <Tab eventKey="five" title={data.contentfulProjectTypes.projectTypeFive}>
                <h2>{data.contentfulProjectTypes.projectTypeFive}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.contentfulProjectTypes.projectFiveLongDescription.childMarkdownRemark.html,
                  }}
                />
              </Tab>
            </Tabs>
          </div>
          <div id="impact" className={styles.section}>
            <div className={styles.sectionText}>
              <h2>{data.contentfulProjectPage.sectionHeader}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.contentfulProjectPage.sectionParagraph.childMarkdownRemark.html,
                }}
              />
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
              <div
                dangerouslySetInnerHTML={{
                  __html: data.contentfulProjectPage.sectionTwoParagraph.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ProgramsPage