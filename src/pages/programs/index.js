import React, { useState } from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

// Component Imports
import Layout from "../../components/layout"

// Style/Icon Imports
import styles from "./index.module.scss"

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
        projectOneImage {
          title
          resize (height: 1000) {
            src            
          }
        }
        projectTypeTwo
        projectTwoLongDescription {
          childMarkdownRemark {
            html
          }
        }
        projectTwoImage {
          title
          resize (height: 1000) {
            src            
          }
        }
        projectTypeThree
        projectThreeLongDescription {
          childMarkdownRemark {
            html
          }
        }
        projectThreeImage {
          title
          resize (height: 1000) {
            src            
          }
        }
        projectTypeFour
        projectFourLongDescription {
          childMarkdownRemark {
            html
          }
        }
        projectFourImage {
          title
          resize (height: 1000) {
            src            
          }
        }
        projectTypeFive
        projectFiveLongDescription {
          childMarkdownRemark {
            html
          }
        }
        projectFiveImage {
          title
          resize (height: 1000) {
            src            
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
        puenteModelImage {
          title
          resize (height: 1000) {
            src            
          }
        }
        puenteModelText {
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
                <div className={styles.puenteModel}>
                  <img alt={data.contentfulProjectPage.puenteModelImage.title} src={data.contentfulProjectPage.puenteModelImage.resize.src} fluid />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.contentfulProjectPage.puenteModelText.childMarkdownRemark.html,
                    }}
                  />
                </div>
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
                <div className={styles.project}>
                  <div className={styles.projectInfo}>
                    <h2>{data.contentfulProjectTypes.projectTypeOne}</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.contentfulProjectTypes.projectOneLongDescription.childMarkdownRemark.html,
                      }}
                    />
                  </div>
                  <div className={styles.projectImage}>
                    <img alt={data.contentfulProjectTypes.projectOneImage.title} src={data.contentfulProjectTypes.projectOneImage.resize.src} fluid />
                  </div>
                </div>
              </Tab>
              <Tab eventKey="two" title={data.contentfulProjectTypes.projectTypeTwo}>
                <div className={styles.project}>
                  <div className={styles.projectInfo}>
                    <h2>{data.contentfulProjectTypes.projectTypeTwo}</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.contentfulProjectTypes.projectTwoLongDescription.childMarkdownRemark.html,
                      }}
                    />
                  </div>
                  <div className={styles.projectImage}>
                    <img alt={data.contentfulProjectTypes.projectTwoImage.title} src={data.contentfulProjectTypes.projectTwoImage.resize.src} fluid />
                  </div>
                </div>
              </Tab>
              <Tab eventKey="three" title={data.contentfulProjectTypes.projectTypeThree}>
                <div className={styles.project}>
                  <div className={styles.projectInfo}>
                    <h2>{data.contentfulProjectTypes.projectTypeThree}</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.contentfulProjectTypes.projectThreeLongDescription.childMarkdownRemark.html,
                      }}
                    />
                  </div>
                  <div className={styles.projectImage}>
                    <img alt={data.contentfulProjectTypes.projectThreeImage.title} src={data.contentfulProjectTypes.projectThreeImage.resize.src} fluid />
                  </div>
                </div>
              </Tab>
              <Tab eventKey="four" title={data.contentfulProjectTypes.projectTypeFour}>
                <div className={styles.project}>
                  <div className={styles.projectInfo}>
                    <h2>{data.contentfulProjectTypes.projectTypeFour}</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.contentfulProjectTypes.projectFourLongDescription.childMarkdownRemark.html,
                      }}
                    />
                  </div>
                  <div className={styles.projectImage}>
                    <img alt={data.contentfulProjectTypes.projectFourImage.title} src={data.contentfulProjectTypes.projectFourImage.resize.src} fluid />
                  </div>
                </div>
              </Tab>
              <Tab eventKey="five" title={data.contentfulProjectTypes.projectTypeFive}>
                <div className={styles.project}>
                  <div className={styles.projectInfo}>
                    <h2>{data.contentfulProjectTypes.projectTypeFive}</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.contentfulProjectTypes.projectFiveLongDescription.childMarkdownRemark.html,
                      }}
                    />
                  </div>
                  <div className={styles.projectImage}>
                    <img alt={data.contentfulProjectTypes.projectFiveImage.title} src={data.contentfulProjectTypes.projectFiveImage.resize.src} fluid />
                  </div>
                </div>
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