import React from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"

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
                <p>{data.contentfulVolunteerPage.heroSubText.heroSubText}</p>
              </div>
            </div>
          </div>
          <div className={volunteerStyles.body}>
            <div id="volunteer" className={volunteerStyles.section}>
              <div className={volunteerStyles.sectionText}>
                <h2>{data.contentfulVolunteerPage.sectionOneHeader}</h2>
                <p>{data.contentfulVolunteerPage.sectionOneParagraph.sectionOneParagraph}</p>
              </div>
              <div className={volunteerStyles.sectionImage}>
                <img alt={data.contentfulVolunteerPage.sectionOneImage.title} src={data.contentfulVolunteerPage.sectionOneImage.resize.src} fluid />
              </div>
            </div>
            <VolunteerCTA />
            <div id="partner" className={volunteerStyles.sectionEven}>
              <div className={volunteerStyles.sectionText}>
                <h2>{data.contentfulVolunteerPage.sectionTwoHeader}</h2>
                <p>{data.contentfulVolunteerPage.sectionTwoParagraph.sectionTwoParagraph}</p>
              </div>
              <div className={volunteerStyles.sectionImage}>
                <img alt={data.contentfulVolunteerPage.sectionTwoImage.title} src={data.contentfulVolunteerPage.sectionTwoImage.resize.src} fluid />
              </div>
            </div>
            <VolunteerContactCTA />
            <div className={volunteerStyles.sectionDonate}>
              <div id="newsletter" className={volunteerStyles.sectionText}>
                <h2>{data.contentfulVolunteerPage.sectionThreeHeader}</h2>
                <p>{data.contentfulVolunteerPage.sectionThreeParagraph.sectionThreeParagraph}</p>
              </div>
              <div id="donate" className={volunteerStyles.donateSection}>
                <h2>Donate</h2>
                <iframe title="donate" src="https://givebutter.com/embed/c/8vtwH6" className={volunteerStyles.donateForm} name="givebutter" frameborder="0" scrolling="no" seamless allowpaymentrequest />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default VolunteerPage