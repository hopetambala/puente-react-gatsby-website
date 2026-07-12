import React, { useEffect, createRef } from "react";
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
            file {
              url
            }
          }
        }
        allContentfulProject(
          filter: { node_locale: { eq: "en-US" } }
          sort: { order: ASC }
        ) {
          nodes {
            name
            category
            longDescription {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    `
  );

  let animationContainer = createRef();

  useEffect(() => {
    let anim;
    import("lottie-web").then((lottie) => {
      anim = lottie.default.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: heroAnimation,
      });
    });
    return () => anim && anim.destroy();
  }, []); // eslint-disable-line

  let bridgeContainer = createRef();
  useEffect(() => {
    let anim;
    import("lottie-web").then((lottie) => {
      anim = lottie.default.loadAnimation({
        container: bridgeContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: bridgeAnimation,
      });
    });
    return () => anim && anim.destroy();
  }, []); // eslint-disable-line

  let dataContainer = createRef();
  useEffect(() => {
    let anim;
    import("lottie-web").then((lottie) => {
      anim = lottie.default.loadAnimation({
        container: dataContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: dataAnimation,
      });
    });
    return () => anim && anim.destroy();
  }, []); // eslint-disable-line

  let serviceContainer = createRef();
  useEffect(() => {
    let anim;
    import("lottie-web").then((lottie) => {
      anim = lottie.default.loadAnimation({
        container: serviceContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: serviceAnimation,
      });
    });
    return () => anim && anim.destroy();
  }, []); // eslint-disable-line

  const { nodes: projects } = data.allContentfulProject;
  const carouselItems = [
    ...projects.filter((p) => p.category === "signature-project"),
    ...projects.filter((p) => p.category === "program"),
  ];

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
              {carouselItems.map((project) => (
                <Carousel.Item key={`${project.category}-${project.name}`}>
                  <h2>{project.name}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        project.longDescription.childMarkdownRemark.html,
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <Link className={styles.button} to="/model">
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
                    src={`${partnerships.file.url}?h=150`}
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
