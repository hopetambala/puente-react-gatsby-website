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
import * as styles from "./index.module.scss"

const ProgramsPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulProjectTypes {
          nodes {
            projectTypeOne
            projectOneLongDescription {
              childMarkdownRemark {
                html
              }
            }
            projectOneImage {
              title
              file {
                url
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
              file {
                url
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
              file {
                url
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
              file {
                url
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
              file {
                url
              }
            }
          }
        }
        contentfulProjectPage {
          heroImage {
            title
            file {
              url
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
          signatureProgramsHeader
          signatureProgramsParagraph {
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
            file {
              url
            }
          }
          puenteModelText {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    `
  );
  const [key, setKey] = useState('one');

    const { nodes: projectTypes } = data.allContentfulProjectTypes;
    const programsData = projectTypes[0];
    const projectsData = projectTypes[1];

  return (
    <div>
      <Layout>
        <div className={styles.container}>
          <div className={styles.banner}>
            <div className={styles.bannerImage}>
              <img
                alt={data.contentfulProjectPage.heroImage.title}
                src={`${data.contentfulProjectPage.heroImage.file.url}?h=1000`}
                fluid
              />
              <div id="model" className={styles.title}>
                <h1>{data.contentfulProjectPage.heroText}</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      data.contentfulProjectPage.heroSubText.childMarkdownRemark
                        .html,
                  }}
                />
                <div className={styles.puenteModel}>
                  <img
                    alt={data.contentfulProjectPage.puenteModelImage.title}
                    src={`${data.contentfulProjectPage.puenteModelImage.file.url}?h=1000`}
                    fluid
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        data.contentfulProjectPage.puenteModelText
                          .childMarkdownRemark.html,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="signature-projects" className={styles.projects}>
            <h2>{data.contentfulProjectPage.signatureProjectsHeader}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  data.contentfulProjectPage.signatureProjectsParagraph
                    .childMarkdownRemark.html,
              }}
            />
            <Tabs
              className={styles.tabs}
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab
                eventKey="one"
                title={projectsData.projectTypeOne}
              >
                <div className={styles.project}>
                  <div className={styles.projectInfo}>
                    <h2>{projectsData.projectTypeOne}</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          projectsData.projectOneLongDescription
                            .childMarkdownRemark.html,
                      }}
                    />
                  </div>
                  <div className={styles.projectImage}>
                    <img
                      alt={projectsData.projectOneImage.title}
                      src={
                        `${projectsData.projectOneImage.file.url}?h=1000`
                      }
                      fluid
                    />
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="two"
                title={projectsData.projectTypeTwo}
              >
                <div className={styles.project}>
                  <div className={styles.projectInfo}>
                    <h2>{projectsData.projectTypeTwo}</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          projectsData.projectTwoLongDescription
                            .childMarkdownRemark.html,
                      }}
                    />
                  </div>
                  <div className={styles.projectImage}>
                    <img
                      alt={projectsData.projectTwoImage.title}
                      src={
                        `${projectsData.projectTwoImage.file.url}?h=1000`
                      }
                      fluid
                    />
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="three"
                title={projectsData.projectTypeThree}
              >
                <div className={styles.project}>
                  <div className={styles.projectInfo}>
                    <h2>{projectsData.projectTypeThree}</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          projectsData
                            .projectThreeLongDescription.childMarkdownRemark
                            .html,
                      }}
                    />
                  </div>
                  <div className={styles.projectImage}>
                    <img
                      alt={projectsData.projectThreeImage.title}
                      src={
                        `${projectsData.projectThreeImage.file.url}?h=1000`
                      }
                      fluid
                    />
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="four"
                title={projectsData.projectTypeFour}
              >
                <div className={styles.project}>
                  <div className={styles.projectInfo}>
                    <h2>{projectsData.projectTypeFour}</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          projectsData.projectFourLongDescription
                            .childMarkdownRemark.html,
                      }}
                    />
                  </div>
                  <div className={styles.projectImage}>
                    <img
                      alt={projectsData.projectFourImage.title}
                      src={
                        `${projectsData.projectFourImage.file.url}?h=1000`
                      }
                      fluid
                    />
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="five"
                title={projectsData.projectTypeFive}
              >
                <div className={styles.project}>
                  <div className={styles.projectInfo}>
                    <h2>{projectsData.projectTypeFive}</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          projectsData.projectFiveLongDescription
                            .childMarkdownRemark.html,
                      }}
                    />
                  </div>
                  <div className={styles.projectImage}>
                    <img
                      alt={projectsData.projectFiveImage.title}
                      src={
                        `${projectsData.projectFiveImage.file.url}?h=1000`
                      }
                      fluid
                    />
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
                  __html:
                    data.contentfulProjectPage.sectionParagraph
                      .childMarkdownRemark.html,
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
          <div id="signature-programs" className={styles.projects}>
            <h2>{data.contentfulProjectPage.signatureProgramsHeader}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  data.contentfulProjectPage.signatureProgramsParagraph
                    .childMarkdownRemark.html,
              }}
            />
            <Tabs
              className={styles.tabs}
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab
                eventKey="one"
                title={programsData.projectTypeOne}
              >
                <div className={styles.project}>
                  <div className={styles.projectInfo}>
                    <h2>{programsData.projectTypeOne}</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          programsData.projectOneLongDescription
                            .childMarkdownRemark.html,
                      }}
                    />
                  </div>
                  <div className={styles.projectImage}>
                    <img
                      alt={programsData.projectOneImage.title}
                      src={
                        `${programsData.projectOneImage.file.url}?h=1000`
                      }
                      fluid
                    />
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="two"
                title={programsData.projectTypeTwo}
              >
                <div className={styles.project}>
                  <div className={styles.projectInfo}>
                    <h2>{programsData.projectTypeTwo}</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          programsData.projectTwoLongDescription
                            .childMarkdownRemark.html,
                      }}
                    />
                  </div>
                  <div className={styles.projectImage}>
                    <img
                      alt={programsData.projectTwoImage.title}
                      src={
                        `${programsData.projectTwoImage.file.url}?h=1000`
                      }
                      fluid
                    />
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="three"
                title={programsData.projectTypeThree}
              >
                <div className={styles.project}>
                  <div className={styles.projectInfo}>
                    <h2>{programsData.projectTypeThree}</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          programsData
                            .projectThreeLongDescription.childMarkdownRemark
                            .html,
                      }}
                    />
                  </div>
                  <div className={styles.projectImage}>
                    <img
                      alt={programsData.projectThreeImage.title}
                      src={
                        `${programsData.projectThreeImage.file.url}?h=1000`
                      }
                      fluid
                    />
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default ProgramsPage