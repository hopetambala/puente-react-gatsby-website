import React from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"
import Img from "gatsby-image"
import Carousel from 'react-bootstrap/Carousel'

// Component Imports
import Layout from "../components/layout"
import VolunteerCTA from "../components/volunteerCTA"
import VolunteerContactCTA from "../components/volunteerContactCTA"

// Style Imports
import volunteerStyles from "./volunteer.module.scss"

const VolunteerPage = () => {
  const data = useStaticQuery(
    graphql`
    query {
      hero: file(relativePath: { eq: "placeholder-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image: file(relativePath: { eq: "1650x1165.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contentfulVolunteerPage {
        heroImage {
          title
          resize {
            src            
          }
        }
        heroText
        heroSubText {
          heroSubText
        }
        sectionOneHeader
        sectionOneParagraph {
          sectionOneParagraph
        }
        sectionOneImage {
          title
          resize {
            src
          }
        }
        sectionTwoHeader
        sectionTwoParagraph {
          sectionTwoParagraph
        }
        sectionTwoImage {
          title
          resize {
             src
          }
        }
        sectionThreeHeader
        sectionThreeParagraph {
          sectionThreeParagraph
        }
        impactNumbers
        impactDescriptions
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
      }
    }
  `)
  return (
    <div>
      <Layout>
        <div className={volunteerStyles.container}>
          <div className={volunteerStyles.banner}>
            <div className={volunteerStyles.bannerImage}>
              <Img fluid={data.hero.childImageSharp.fluid} />
              <div className={volunteerStyles.title}>
                <h1>{data.contentfulVolunteerPage.heroText}</h1>
              </div>
            </div>
          </div>
          <div className={volunteerStyles.body}>
            <p>{data.contentfulVolunteerPage.heroSubText.heroSubText}</p>
            <div className={volunteerStyles.section}>
              <div className={volunteerStyles.sectionText}>
                <h2>{data.contentfulVolunteerPage.sectionOneHeader}</h2>
                <p>{data.contentfulVolunteerPage.sectionOneParagraph.sectionOneParagraph}</p>
              </div>
              <div className={volunteerStyles.sectionImage}>
                <Img fluid={data.image.childImageSharp.fluid} />
              </div>
            </div>
            <VolunteerCTA />
            <div className={volunteerStyles.sectionEven}>
              <div className={volunteerStyles.sectionText}>
                <h2>{data.contentfulVolunteerPage.sectionTwoHeader}</h2>
                <p>{data.contentfulVolunteerPage.sectionTwoParagraph.sectionTwoParagraph}</p>
              </div>
              <div className={volunteerStyles.sectionImage}>
                <Img fluid={data.image.childImageSharp.fluid} />
              </div>
            </div>
            <div className={volunteerStyles.volunteer}>
              <div className={volunteerStyles.volunteerBio}>
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
                </Carousel>
              </div>
            </div>
            <div className={volunteerStyles.section}>
              <div className={volunteerStyles.sectionText}>
                <h2>{data.contentfulVolunteerPage.sectionThreeHeader}</h2>
                <p>{data.contentfulVolunteerPage.sectionThreeParagraph.sectionThreeParagraph}</p>
              </div>
              <div className={volunteerStyles.sectionImpactNumbers}>
                <h2>Impact Numbers</h2>
              </div>
            </div>
            <VolunteerContactCTA />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default VolunteerPage