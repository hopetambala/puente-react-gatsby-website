import React from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"

// Component Imports
import Layout from "../components/layout"
import AboutCTA from "../components/aboutCTA"

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
        heroSubText {
          heroSubText
        }
        missionHeader
        missionText {
          missionText
        }
        visionHeader
        visionText {
          visionText
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
              <div className={aboutStyles.title}>
                <h1>{data.contentfulAboutPage.heroText}</h1>
              </div>
            </div>
          </div>
          <div className={aboutStyles.body}>
            <p>{data.contentfulAboutPage.heroSubText.heroSubText}</p>
            <div className={aboutStyles.section}>
              <h2>{data.contentfulAboutPage.missionHeader}</h2>
              <p>{data.contentfulAboutPage.missionText.missionText}</p>
              <h2>{data.contentfulAboutPage.visionHeader}</h2>
              <p>{data.contentfulAboutPage.visionText.visionText}</p>
            </div>
            <AboutCTA />
            <div className={aboutStyles.bioSection}>
              <div className={aboutStyles.employeeRow}>
                <div className={aboutStyles.employee}>
                  <div className={aboutStyles.employeeImage}>
                    <img alt={data.contentfulAboutPage.employeeOneImage.title} src={data.contentfulAboutPage.employeeOneImage.resize.src} fluid />
                  </div>
                  <div className={aboutStyles.employeeInfo}>
                    <h2>{data.contentfulAboutPage.employeeOneName}</h2>
                    <h3>{data.contentfulAboutPage.employeeOnePosition}</h3>
                    <a href={data.contentfulAboutPage.employeeOneLinkedIn}><Icon className={aboutStyles.icon} size={32} color icon={linkedin} /></a>
                  </div>
                </div>
                <div className={aboutStyles.employee}>
                  <div className={aboutStyles.employeeImage}>
                    <img alt={data.contentfulAboutPage.employeeTwoImage.title} src={data.contentfulAboutPage.employeeTwoImage.resize.src} fluid />
                  </div>
                  <div className={aboutStyles.employeeInfo}>
                    <h2>{data.contentfulAboutPage.employeeTwoName}</h2>
                    <h3>{data.contentfulAboutPage.employeeTwoPosition}</h3>
                    <a href={data.contentfulAboutPage.employeeTwoLinkedIn}><Icon className={aboutStyles.icon} size={32} icon={linkedin} /></a>
                  </div>
                </div>
              </div>
              <div className={aboutStyles.employeeRow}>
                <div className={aboutStyles.employee}>
                  <div className={aboutStyles.employeeImage}>
                    <img alt={data.contentfulAboutPage.employeeThreeImage.title} src={data.contentfulAboutPage.employeeThreeImage.resize.src} fluid />
                  </div>
                  <div className={aboutStyles.employeeInfo}>
                    <h2>{data.contentfulAboutPage.employeeThreeName}</h2>
                    <h3>{data.contentfulAboutPage.employeeThreePosition}</h3>
                    <a href={data.contentfulAboutPage.employeeThreeLinkedIn}><Icon className={aboutStyles.icon} size={32} icon={linkedin} /></a>
                  </div>
                </div>
                <div className={aboutStyles.employee}>
                  <div className={aboutStyles.employeeImage}>
                    <img alt={data.contentfulAboutPage.employeeFourImage.title} src={data.contentfulAboutPage.employeeFourImage.resize.src} fluid />
                  </div>
                  <div className={aboutStyles.employeeInfo}>
                    <h2>{data.contentfulAboutPage.employeeFourName}</h2>
                    <h3>{data.contentfulAboutPage.employeeFourPosition}</h3>
                    <a href={data.contentfulAboutPage.employeeFourLinkedIn}><Icon className={aboutStyles.icon} size={32} icon={linkedin} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default AboutPage
