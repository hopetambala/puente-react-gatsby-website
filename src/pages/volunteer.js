import React from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"
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
          resize (height: 1000) {
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
          resize (height: 500){
            src
          }
        }
        sectionTwoHeader
        sectionTwoParagraph {
          sectionTwoParagraph
        }
        sectionTwoImage {
          title
          resize (height: 500){
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
      contentfulFeaturedVolunteers {
        volunteerName
        volunteerOneRole
        volunteerOneBio {
          volunteerOneBio
        }
        volunteerTwoName
        volunteerTwoRole
        volunteerTwoBio {
          volunteerTwoBio
        }
        volunteerThreeName
        volunteerThreeRole
        volunteerThreeBio {
          volunteerThreeBio
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
              <img alt={data.contentfulVolunteerPage.heroImage.title} src={data.contentfulVolunteerPage.heroImage.resize.src} fluid />
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
                <img alt={data.contentfulVolunteerPage.sectionOneImage.title} src={data.contentfulVolunteerPage.sectionOneImage.resize.src} fluid />
              </div>
            </div>
            <VolunteerCTA />
            <div className={volunteerStyles.sectionEven}>
              <div className={volunteerStyles.sectionText}>
                <h2>{data.contentfulVolunteerPage.sectionTwoHeader}</h2>
                <p>{data.contentfulVolunteerPage.sectionTwoParagraph.sectionTwoParagraph}</p>
              </div>
              <div className={volunteerStyles.sectionImage}>
                <img alt={data.contentfulVolunteerPage.sectionTwoImage.title} src={data.contentfulVolunteerPage.sectionTwoImage.resize.src} fluid />
              </div>
            </div>
            <div className={volunteerStyles.volunteer}>
              <div className={volunteerStyles.volunteerBio}>
                <Carousel controls={false} indicators={false}>
                  <Carousel.Item>
                    <h2>{data.contentfulFeaturedVolunteers.volunteerName}</h2>
                    <h3>{data.contentfulFeaturedVolunteers.volunteerOneRole}</h3>
                    <p>{data.contentfulFeaturedVolunteers.volunteerOneBio.volunteerOneBio}</p>
                  </Carousel.Item>
                  <Carousel.Item>
                    <h2>{data.contentfulFeaturedVolunteers.volunteerTwoName}</h2>
                    <h3>{data.contentfulFeaturedVolunteers.volunteerTwoRole}</h3>
                    <p>{data.contentfulFeaturedVolunteers.volunteerTwoBio.volunteerTwoBio}</p>
                  </Carousel.Item>
                  <Carousel.Item>
                    <h2>{data.contentfulFeaturedVolunteers.volunteerThreeName}</h2>
                    <h3>{data.contentfulFeaturedVolunteers.volunteerTwoRole}</h3>
                    <p>{data.contentfulFeaturedVolunteers.volunteerThreeBio.volunteerThreeBio}</p>
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