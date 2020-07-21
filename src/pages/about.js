import React from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"
import ReactPlayer from 'react-player/youtube'
// import Carousel from 'react-bootstrap/Carousel'

// Component Imports
import Layout from "../components/layout"
// import AboutCTA from "../components/aboutCTA"

// Style/Icon Imports
import aboutStyles from "./about.module.scss"
import { Icon } from 'react-icons-kit'
import { linkedin } from 'react-icons-kit/fa/linkedin'

const AboutPage = () => {
  const data = useStaticQuery(
    graphql`
    query {
      contentfulAboutPage {
        heroImage {
          title
          resize (height: 1000) {
            src            
          }
        }
        heroText
        heroSubText{
          childMarkdownRemark {
            html
          }
        }
        missionHeader
        missionText {
          childMarkdownRemark {
            html
          }
        }
        visionHeader
        visionText {
          childMarkdownRemark {
            html
          }
        }
        employeeOneImage {
        title
        resize (height: 250) {
      	  src
        }
      }
      employeeOneName
      employeeOnePosition
      employeeOneLinkedIn
      employeeTwoImage {
        title
        resize (height: 250) {
      	  src
        }
      }
      employeeTwoName
      employeeTwoPosition
      employeeTwoLinkedIn
      employeeThreeImage {
        title
        resize (height: 250) {
      	  src
        }
      }
      employeeThreeName
      employeeThreePosition
      employeeThreeLinkedIn
      employeeFourImage {
        title
        resize (height: 250) {
      	  src
        }
      }
      employeeFourName
      employeeFourPosition
      employeeFourLinkedIn
      annualReport
      annualReportText {
        childMarkdownRemark {
          html
        }
      }
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
    contentfulLandingPage {
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
  }
  `)
  return (
    <div>
      <Layout>
        <div className={aboutStyles.container}>
          <div className={aboutStyles.banner}>
            <div className={aboutStyles.bannerImage}>
              <img alt={data.contentfulAboutPage.heroImage.title} src={data.contentfulAboutPage.heroImage.resize.src} fluid />
              <div id="who-we-are" className={aboutStyles.title}>
                <div className={aboutStyles.about}>
                  <div className={aboutStyles.aboutText}>
                    <h1>{data.contentfulAboutPage.heroText}</h1>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.contentfulAboutPage.heroSubText.childMarkdownRemark.html,
                      }}
                    />
                  </div>
                  <div className={aboutStyles.aboutVideo}>
                    <ReactPlayer width='100%' controls='true' url='https://www.youtube.com/watch?v=0XwQzkQjF1s.' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={aboutStyles.body}>
            <div className={aboutStyles.missionSection}>
              <h2>{data.contentfulAboutPage.missionHeader}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.contentfulAboutPage.missionText.childMarkdownRemark.html,
                }}
              />
            </div>
            <div className={aboutStyles.visionSection}>
              <h2>{data.contentfulAboutPage.visionHeader}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.contentfulAboutPage.visionText.childMarkdownRemark.html,
                }}
              />
            </div>
            <div id="staff" className={aboutStyles.staffSection}>
              <h2>Our Staff</h2>
              <div className={aboutStyles.employeeRow}>
                <div className={aboutStyles.employees}>
                  <div className={aboutStyles.employee}>
                    <div className={aboutStyles.imgContainer}>
                      <img alt={data.contentfulAboutPage.employeeOneImage.title} src={data.contentfulAboutPage.employeeOneImage.resize.src} fluid />
                      <a href={data.contentfulAboutPage.employeeOneLinkedIn}><Icon className={aboutStyles.icon} size={24} icon={linkedin} /></a>
                    </div>
                    <h2>{data.contentfulAboutPage.employeeOneName}</h2>
                    <h3>{data.contentfulAboutPage.employeeOnePosition}</h3>
                  </div>
                  <div className={aboutStyles.employee}>
                    <div className={aboutStyles.imgContainer}>
                      <img alt={data.contentfulAboutPage.employeeTwoImage.title} src={data.contentfulAboutPage.employeeTwoImage.resize.src} fluid />
                      <a href={data.contentfulAboutPage.employeeTwoLinkedIn}><Icon className={aboutStyles.icon} size={24} icon={linkedin} /></a>
                    </div>
                    <h2>{data.contentfulAboutPage.employeeTwoName}</h2>
                    <h3>{data.contentfulAboutPage.employeeTwoPosition}</h3>
                  </div>
                </div>
                <div className={aboutStyles.employees}>
                  <div className={aboutStyles.employee}>
                    <div className={aboutStyles.imgContainer}>
                      <img alt={data.contentfulAboutPage.employeeThreeImage.title} src={data.contentfulAboutPage.employeeThreeImage.resize.src} fluid />
                      <a href={data.contentfulAboutPage.employeeThreeLinkedIn}><Icon className={aboutStyles.icon} size={24} icon={linkedin} /></a>
                    </div>
                    <h2>{data.contentfulAboutPage.employeeThreeName}</h2>
                    <h3>{data.contentfulAboutPage.employeeThreePosition}</h3>
                  </div>
                  <div className={aboutStyles.employee}>
                    <div className={aboutStyles.imgContainer}>
                      <img alt={data.contentfulAboutPage.employeeFourImage.title} src={data.contentfulAboutPage.employeeFourImage.resize.src} fluid />
                      <a href={data.contentfulAboutPage.employeeFourLinkedIn}><Icon className={aboutStyles.icon} size={24} icon={linkedin} /></a>
                    </div>
                    <h2>{data.contentfulAboutPage.employeeFourName}</h2>
                    <h3>{data.contentfulAboutPage.employeeFourPosition}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div id="volunteers" className={aboutStyles.volunteerSection}>
              <h2>Our Volunteers</h2>
              <div className={aboutStyles.employeeRow}>
                <div className={aboutStyles.employees}>
                  <div className={aboutStyles.employee}>
                    <div className={aboutStyles.imgContainer}>
                      <img alt={data.contentfulAboutPage.employeeOneImage.title} src={data.contentfulAboutPage.employeeOneImage.resize.src} fluid />
                      <a href={data.contentfulAboutPage.employeeOneLinkedIn}><Icon className={aboutStyles.icon} size={24} icon={linkedin} /></a>
                    </div>
                    <h2>{data.contentfulFeaturedVolunteers.volunteerName}</h2>
                    <h3>{data.contentfulFeaturedVolunteers.volunteerOneRole}</h3>
                  </div>
                  <div className={aboutStyles.employee}>
                    <div className={aboutStyles.imgContainer}>
                      <img alt={data.contentfulAboutPage.employeeTwoImage.title} src={data.contentfulAboutPage.employeeTwoImage.resize.src} fluid />
                      <a href={data.contentfulAboutPage.employeeTwoLinkedIn}><Icon className={aboutStyles.icon} size={24} icon={linkedin} /></a>
                    </div>
                    <h2>{data.contentfulFeaturedVolunteers.volunteerTwoName}</h2>
                    <h3>{data.contentfulFeaturedVolunteers.volunteerTwoRole}</h3>
                  </div>
                </div>
                <div className={aboutStyles.employees}>
                  <div className={aboutStyles.employee}>
                    <div className={aboutStyles.imgContainer}>
                      <img alt={data.contentfulAboutPage.employeeThreeImage.title} src={data.contentfulAboutPage.employeeThreeImage.resize.src} fluid />
                      <a href={data.contentfulAboutPage.employeeThreeLinkedIn}><Icon className={aboutStyles.icon} size={24} icon={linkedin} /></a>
                    </div>
                    <h2>{data.contentfulFeaturedVolunteers.volunteerThreeName}</h2>
                    <h3>{data.contentfulFeaturedVolunteers.volunteerThreeRole}</h3>
                  </div>
                  <div className={aboutStyles.employee}>
                    <div className={aboutStyles.imgContainer}>
                      <img alt={data.contentfulAboutPage.employeeFourImage.title} src={data.contentfulAboutPage.employeeFourImage.resize.src} fluid />
                      <a href={data.contentfulAboutPage.employeeFourLinkedIn}><Icon className={aboutStyles.icon} size={24} icon={linkedin} /></a>
                    </div>
                    <h2>{data.contentfulFeaturedVolunteers.volunteerName}</h2>
                    <h3>{data.contentfulFeaturedVolunteers.volunteerOneRole}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div id="partners" className={aboutStyles.sectionPartners}>
              <h2>Our Partners</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.contentfulLandingPage.ourPartnersText.childMarkdownRemark.html,
                }}
              />
              <div className={aboutStyles.partnerImages}>
                {data.contentfulLandingPage.partnerships.map((partnerships) => {
                  return (
                    <img alt={partnerships.title} src={partnerships.resize.src} />
                  )
                })}
              </div>
            </div>
            <div className={aboutStyles.sectionReport}>
              <h2 id="reports">{data.contentfulAboutPage.annualReport}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.contentfulAboutPage.annualReportText.childMarkdownRemark.html,
                }}
              />
              <p className={aboutStyles.reportLink}>Read 2019 Report</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default AboutPage
