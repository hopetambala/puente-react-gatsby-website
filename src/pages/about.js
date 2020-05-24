import React from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"
import Img from "gatsby-image"

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
      hero: file(relativePath: { eq: "placeholder-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image: file(relativePath: { eq: "1200x800.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contentfulAboutPage {
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
      }
    }
  `)
  return (
    <div>
      <Layout>
        <div className={aboutStyles.container}>
          <div className={aboutStyles.banner}>
            <div className={aboutStyles.bannerImage}>
              <Img fluid={data.hero.childImageSharp.fluid} />
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
                    <Img fluid={data.image.childImageSharp.fluid} />
                  </div>
                  <div className={aboutStyles.employeeInfo}>
                    <h2>Scott Coppa</h2>
                    <h3>Co Founder / CEO</h3>
                    <a href="https://www.linkedin.com/company/18499313/admin/"><Icon className={aboutStyles.icon} size={32} color icon={linkedin} /></a>
                  </div>
                </div>
                <div className={aboutStyles.employee}>
                  <div className={aboutStyles.employeeImage}>
                    <Img fluid={data.image.childImageSharp.fluid} />
                  </div>
                  <div className={aboutStyles.employeeInfo}>
                    <h2>Paul Anthony</h2>
                    <h3>Co Founder / CFO</h3>
                    <a href="https://www.linkedin.com/company/18499313/admin/"><Icon className={aboutStyles.icon} size={32} icon={linkedin} /></a>
                  </div>
                </div>
              </div>
              <div className={aboutStyles.employeeRow}>
                <div className={aboutStyles.employee}>
                  <div className={aboutStyles.employeeImage}>
                    <Img fluid={data.image.childImageSharp.fluid} />
                  </div>
                  <div className={aboutStyles.employeeInfo}>
                    <h2>Hope Tambala</h2>
                    <h3>Co Founder / CTO</h3>
                    <a href="https://www.linkedin.com/company/18499313/admin/"><Icon className={aboutStyles.icon} size={32} icon={linkedin} /></a>
                  </div>
                </div>
                <div className={aboutStyles.employee}>
                  <div className={aboutStyles.employeeImage}>
                    <Img fluid={data.image.childImageSharp.fluid} />
                  </div>
                  <div className={aboutStyles.employeeInfo}>
                    <h2>Crismary Gutierrez</h2>
                    <h3>Community Outreach Coordinator</h3>
                    <a href="https://www.linkedin.com/company/18499313/admin/"><Icon className={aboutStyles.icon} size={32} icon={linkedin} /></a>
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
