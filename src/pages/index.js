import React, { useEffect, createRef } from "react";
import lottie from "lottie-web";
import heroAnimation from "../animations/puente_hero.json";
import bridgeAnimation from "../animations/bridge.json";
import dataAnimation from "../animations/data.json";
import serviceAnimation from "../animations/service.json";
import { Link, graphql, useStaticQuery } from "gatsby";
import Carousel from "react-bootstrap/Carousel";

// Component Imports
import Layout from "../components/layout";

// Style Imports
import * as styles from "./index.module.scss";

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "placeholder.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        contentfulLandingPage(node_locale: { eq: "en-US" }) {
          hero
          firstSectionTitle
          firstSectionParagraph {
            childMarkdownRemark {
              html
            }
          }
          secondSectionTitle
          secondSectionParagraph {
            childMarkdownRemark {
              html
            }
          }
          impactNumbers
          impactDescriptions
          thirdSectionTitle
          thirdSectionParagraph {
            childMarkdownRemark {
              html
            }
          }
          fourthSectionTitle
          fourthSectionParagraph {
            childMarkdownRemark {
              html
            }
          }
          ourPartnersText {
            childMarkdownRemark {
              html
            }
          }
          partnerships {
            title
            resize(height: 150) {
              src
            }
          }
        }
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
              resize(height: 1000) {
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
              resize(height: 1000) {
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
              resize(height: 1000) {
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
              resize(height: 1000) {
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
              resize(height: 1000) {
                src
              }
            }
          }
        }
      }
    `
  );

  let animationContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: heroAnimation,
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []); // eslint-disable-line

  let bridgeContainer = createRef();
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: bridgeContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: bridgeAnimation,
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []); // eslint-disable-line

  let dataContainer = createRef();
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: dataContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: dataAnimation,
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []); // eslint-disable-line

  let serviceContainer = createRef();
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: serviceContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: serviceAnimation,
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []); // eslint-disable-line

  const { nodes: projectTypes } = data.allContentfulProjectTypes;
  const programsData = projectTypes[0];
  const projectsData = projectTypes[1];

  return (
    <div>
      <Layout>
        <div className={styles.container}>
          <div className={styles.banner}>
            <div className={styles.heroImage}>
              <div className="animation-container" ref={animationContainer} />
            </div>
            <div className={styles.hero}>
              <h1>{data.contentfulLandingPage.hero}</h1>
            </div>
          </div>
          <div className={styles.sectionOdd}>
            <div className={styles.sectionText}>
              <h2>{data.contentfulLandingPage.firstSectionTitle}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.contentfulLandingPage.firstSectionParagraph
                      .childMarkdownRemark.html,
                }}
              />
            </div>
            <div className={styles.sectionImage}>
              {/* <Img fluid={data.image.childImageSharp.fluid} /> */}
              <div className="data-container" ref={dataContainer} />
            </div>
          </div>
          <div className={styles.sectionImpact}>
            <div className={styles.sectionImpactNumbers}>
              <div className={styles.impactNumber}>
                <h2>{data.contentfulLandingPage.impactNumbers[0]}</h2>
                <h3>{data.contentfulLandingPage.impactDescriptions[0]}</h3>
              </div>
              <div className={styles.impactNumber}>
                <h2>{data.contentfulLandingPage.impactNumbers[1]}</h2>
                <h3>{data.contentfulLandingPage.impactDescriptions[1]}</h3>
              </div>
              <div className={styles.impactNumber}>
                <h2>{data.contentfulLandingPage.impactNumbers[2]}</h2>
                <h3>{data.contentfulLandingPage.impactDescriptions[2]}</h3>
              </div>
              <div className={styles.impactNumber}>
                <h2>{data.contentfulLandingPage.impactNumbers[3]}</h2>
                <h3>{data.contentfulLandingPage.impactDescriptions[3]}</h3>
              </div>
              <div className={styles.impactNumber}>
                <h2>{data.contentfulLandingPage.impactNumbers[4]}</h2>
                <h3>{data.contentfulLandingPage.impactDescriptions[4]}</h3>
              </div>
            </div>
            <div className={styles.sectionText}>
              <h2>{data.contentfulLandingPage.secondSectionTitle}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.contentfulLandingPage.secondSectionParagraph
                      .childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
          <div className={styles.sectionBlue}>
            <Carousel interval={2000} controls={false} indicators={false}>
              <Carousel.Item>
                <h2>{projectsData.projectTypeOne}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      projectsData.projectOneLongDescription.childMarkdownRemark
                        .html,
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <h2>{projectsData.projectTypeTwo}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      projectsData.projectTwoLongDescription.childMarkdownRemark
                        .html,
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <h2>{projectsData.projectTypeThree}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      projectsData.projectThreeLongDescription
                        .childMarkdownRemark.html,
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <h2>{projectsData.projectTypeFour}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      projectsData.projectFourLongDescription
                        .childMarkdownRemark.html,
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <h2>{projectsData.projectTypeFive}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      projectsData.projectFiveLongDescription
                        .childMarkdownRemark.html,
                  }}
                />
              </Carousel.Item>
              {/* Programs */}
              <Carousel.Item>
                <h2>{programsData.projectTypeOne}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      programsData.projectOneLongDescription.childMarkdownRemark
                        .html,
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <h2>{programsData.projectTypeTwo}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      programsData.projectTwoLongDescription.childMarkdownRemark
                        .html,
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <h2>{programsData.projectTypeThree}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      programsData.projectThreeLongDescription
                        .childMarkdownRemark.html,
                  }}
                />
              </Carousel.Item>
            </Carousel>
            <Link className={styles.button} to="/programs">
              <div className={styles.buttonBackground}>
                <p>Read More</p>
              </div>
            </Link>
          </div>
          <div className={styles.sectionOdd}>
            <div className={styles.sectionText}>
              <h2>{data.contentfulLandingPage.thirdSectionTitle}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.contentfulLandingPage.thirdSectionParagraph
                      .childMarkdownRemark.html,
                }}
              />
            </div>
            <div className={styles.sectionImage}>
              {/* <Img fluid={data.image.childImageSharp.fluid} /> */}
              <div className="service-container" ref={serviceContainer} />
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionImage}>
              {/* <Img fluid={data.image.childImageSharp.fluid} /> */}
              <div className="bridge-container" ref={bridgeContainer} />
            </div>
            <div className={styles.sectionText}>
              <h2>{data.contentfulLandingPage.fourthSectionTitle}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.contentfulLandingPage.fourthSectionParagraph
                      .childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
          <div className={styles.sectionPartners}>
            <h2>Our Partners</h2>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  data.contentfulLandingPage.ourPartnersText.childMarkdownRemark
                    .html,
              }}
            />
            <div className={styles.partnerImages}>
              {data.contentfulLandingPage.partnerships.map((partnerships) => {
                return (
                  <img
                    url={""}
                    alt={partnerships.title}
                    src={partnerships.resize.src}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default IndexPage;
