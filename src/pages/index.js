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

// Style Imports
import styles from "./index.module.scss"

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
      contentfulLandingPage {
        hero
        firstSectionTitle
        firstSectionParagaph {
          content {
            content {
              value
            }
          }
        }
        secondSectionTitle
        secondSectionParagraph {
          content {
            content {
              value
            }
          }
        }
        thirdSectionTitle
        thirdSectionParagraph {
          content {
            content {
              value
            }
          }
        }
        fourthSectionTitle
        fourthSectionParagraph {
          content {
            content {
              value
            }
          }
        }
        partnerships {
          title
          resize (height: 200) {
            src
          }
        }
      }
      contentfulProjectTypes {
        projectTypeOne
        projectOneShortDescription {
          projectOneShortDescription
        }
        projectTypeTwo
        projectTwoShortDescription {
          projectTwoShortDescription
        }
        projectTypeThree
        projectThreeShortDescription {
          projectThreeShortDescription
        }
        projectTypeFour
        projectFourShortDescription {
          projectFourShortDescription
        }
        projectTypeFive
        projectFiveShortDescription {
          projectFiveShortDescription
        }
        projectTypeSix
        projectSixShortDescription {
          projectSixShortDescription
        }
        projectTypeSeven
        projectSevenShortDescription {
          projectSevenShortDescription
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
  }, []);

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
  }, []);
  
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
  }, []);
  
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
  }, []);
  return (
    <div>
      <Layout>
        <div className={styles.container}>
          <div className={styles.banner}>
            <div className = {styles.heroImage}>
              {/* <Img fluid={data.image.childImageSharp.fluid} /> */}
              <div className="animation-container" ref={animationContainer} />
            </div>
            <div className={styles.hero}>
              <h1>{data.contentfulLandingPage.hero}</h1>
            </div>
          </div>
          <div className={styles.sectionOdd}>
            <div className={styles.sectionText}>
              <h2>{data.contentfulLandingPage.firstSectionTitle}</h2>
              <p>{data.contentfulLandingPage.firstSectionParagaph.content[0].content[0].value}</p>
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
              <h2>{data.contentfulLandingPage.secondSectionTitle}</h2>
              <p>{data.contentfulLandingPage.secondSectionParagraph.content[0].content[0].value}</p>
            </div>
          </div>
          <div className={styles.sectionBlue}>
            <Carousel controls={false} indicators={false}>
              <Carousel.Item>
                <h2>{data.contentfulProjectTypes.projectTypeOne}</h2>
                <p>{data.contentfulProjectTypes.projectOneShortDescription.projectOneShortDescription}</p>
              </Carousel.Item>
              <Carousel.Item>
                <h2>{data.contentfulProjectTypes.projectTypeTwo}</h2>
                <p>{data.contentfulProjectTypes.projectTwoShortDescription.projectTwoShortDescription}</p>
              </Carousel.Item>
              <Carousel.Item>
                <h2>{data.contentfulProjectTypes.projectTypeThree}</h2>
                <p>{data.contentfulProjectTypes.projectThreeShortDescription.projectThreeShortDescription}</p>
              </Carousel.Item>
              <Carousel.Item>
                <h2>{data.contentfulProjectTypes.projectTypeFour}</h2>
                <p>{data.contentfulProjectTypes.projectFourShortDescription.projectFourShortDescription}</p>
              </Carousel.Item>
              <Carousel.Item>
                <h2>{data.contentfulProjectTypes.projectTypeFive}</h2>
                <p>{data.contentfulProjectTypes.projectFiveShortDescription.projectFiveShortDescription}</p>
              </Carousel.Item>
              <Carousel.Item>
                <h2>{data.contentfulProjectTypes.projectTypeSix}</h2>
                <p>{data.contentfulProjectTypes.projectSixShortDescription.projectSixShortDescription}</p>
              </Carousel.Item>
              <Carousel.Item>
                <h2>{data.contentfulProjectTypes.projectTypeSeven}</h2>
                <p>{data.contentfulProjectTypes.projectSevenShortDescription.projectSevenShortDescription}</p>
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
              <p>{data.contentfulLandingPage.thirdSectionParagraph.content[0].content[0].value}</p>
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
              <p>{data.contentfulLandingPage.fourthSectionParagraph.content[0].content[0].value}</p>
            </div>
          </div>
          <div className={styles.sectionPartners}>
            <h2>Our Partners</h2>
            <div className={styles.partnerImages}>
              {data.contentfulLandingPage.partnerships.map((partnerships) => {
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
