import React, {useEffect, createRef} from "react"
import lottie from "lottie-web"
import heroAnimation from '../animations/puente_hero.json'
import bridgeAnimation from '../animations/bridge.json'
import dataAnimation from '../animations/data.json'
import serviceAnimation from '../animations/service.json'
import {
  Link,
  graphql,
  useStaticQuery,
} from "gatsby"
// import Img from "gatsby-image"
import Carousel from 'react-bootstrap/Carousel'

// Component Imports
import Layout from "../components/layout"
// import HomeBanner from '../components/homeBanner'

// Style Imports
import styles from "./index.module.scss"

import { LANGUAGESETTINGS } from '../constants/language'

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
      enUS_contentfulLandingPage: contentfulLandingPage(node_locale: { eq: "en-US" }) {
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
          resize (height: 200) {
            src
          }
        }
      }

      enDO_contentfulLandingPage: contentfulLandingPage(node_locale: { eq: "es-DO" }) {
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
          resize (height: 200) {
            src
          }
        }
      }
      enUS_contentfulProjectTypes: contentfulProjectTypes(node_locale: { eq: "en-US" }) {
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
      esDO_contentfulProjectTypes: contentfulProjectTypes(node_locale: { eq: "es-DO" }) {
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
    }
  `)
  
  let animationContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: heroAnimation
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
      animationData: bridgeAnimation
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
      animationData: dataAnimation
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
      animationData: serviceAnimation
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []); // eslint-disable-line

  let contentfulLandingPage = LANGUAGESETTINGS.contentfulLandingPage
  let contentfulProjectTypes = LANGUAGESETTINGS.contentfulProjectTypes

  return (
    <div>
      <Layout>
        <div className={styles.container}>
          <div className={styles.banner}>
            <div className = {styles.heroImage}>
              <div className="animation-container" ref={animationContainer} />
            </div>
            <div className={styles.hero}>
              <h1>{data[contentfulLandingPage].hero}</h1>
            </div>
          </div>
          <div className={styles.sectionOdd}>
            <div className={styles.sectionText}>
              <h2>{data[contentfulLandingPage].firstSectionTitle}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data[contentfulLandingPage].firstSectionParagraph.childMarkdownRemark.html,
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
              <h2>Impact Numbers</h2>
            </div>
            <div className={styles.sectionText}>
              <h2>{data[contentfulLandingPage].secondSectionTitle}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data[contentfulLandingPage].secondSectionParagraph.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
          <div className={styles.sectionBlue}>
            <Carousel controls={false} indicators={false}>
              <Carousel.Item>
                <h2>{data[contentfulProjectTypes].projectTypeOne}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data[contentfulProjectTypes].projectOneLongDescription.childMarkdownRemark.html,
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <h2>{data[contentfulProjectTypes].projectTypeTwo}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data[contentfulProjectTypes].projectTwoLongDescription.childMarkdownRemark.html,
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <h2>{data[contentfulProjectTypes].projectTypeThree}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data[contentfulProjectTypes].projectThreeLongDescription.childMarkdownRemark.html,
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <h2>{data[contentfulProjectTypes].projectTypeFour}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data[contentfulProjectTypes].projectFourLongDescription.childMarkdownRemark.html,
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <h2>{data[contentfulProjectTypes].projectTypeFive}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data[contentfulProjectTypes].projectFiveLongDescription.childMarkdownRemark.html,
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
              <h2>{data[contentfulLandingPage].thirdSectionTitle}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data[contentfulLandingPage].thirdSectionParagraph.childMarkdownRemark.html,
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
              <h2>{data[contentfulLandingPage].fourthSectionTitle}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data[contentfulLandingPage].fourthSectionParagraph.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
          <div className={styles.sectionPartners}>
            <h2>Our Partners</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data[contentfulLandingPage].ourPartnersText.childMarkdownRemark.html,
              }}
            />
            <div className={styles.partnerImages}>
              {data[contentfulLandingPage].partnerships.map((partnerships) => {
                return (
                  <img alt={partnerships.title} src={partnerships.resize.src} />
                )
              })}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage
