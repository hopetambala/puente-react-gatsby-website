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
      image: file(relativePath: { eq: "placeholder-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
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
              <Img fluid={data.image.childImageSharp.fluid} />
            </div>
            <div className={aboutStyles.title}>
              <h1>Who We Are</h1>
            </div>
          </div>
          <div className={aboutStyles.body}>
            <p>
              Puente is a 501(c)(3) nonprofit organization using proprietary 
              technology and community-led development initiatives to improve 
              the standard of living in the Dominican Republic
            </p>
            <div className={aboutStyles.section}>
              <h2>Our Mission</h2>
              <p>Our mission is to connect international development organizations 
                and local institutions with underserved communities more efficiently 
                to make development work more collaborative, impactful and sustainable.
              </p>
              <h2>Our Vision</h2>
              <p>
                Our vision is a world where development organizations collaborate smartly 
                and selflessly to maximize their collective impact on the individuals 
                and communities being served.
              </p>
            </div>
            <AboutCTA />
            <div className={aboutStyles.bioSection}>
              <div className={aboutStyles.flipCard}>
                <div className={aboutStyles.flipCardInner}>
                  <div className={aboutStyles.flipCardFront}>
                    <Img fluid={data.image.childImageSharp.fluid} />
                    <h2>Scott Coppa</h2>
                    <h3>Co Founder / CEO</h3>
                  </div>
                  <div className={aboutStyles.flipCardBack}>
                    <h2>Scott Coppa</h2>
                    <h3>Co Founder / CEO</h3>
                    <a href="https://www.linkedin.com/company/18499313/admin/"><Icon size={40} color icon={linkedin} /></a>
                  </div>
                </div>
              </div>
              <div className={aboutStyles.flipCard}>
                <div className={aboutStyles.flipCardInner}>
                  <div className={aboutStyles.flipCardFront}>
                    <Img fluid={data.image.childImageSharp.fluid} />
                    <h2>Paul Anthony</h2>
                    <h3>Co Founder / CFO</h3>
                  </div>
                  <div className={aboutStyles.flipCardBack}>
                    <h2>Paul Anthony</h2>
                    <h3>Co Founder / CFO</h3>
                    <a href="https://www.linkedin.com/company/18499313/admin/"><Icon size={40} icon={linkedin} /></a>
                  </div>
                </div>
              </div>
              <div className={aboutStyles.flipCard}>
                <div className={aboutStyles.flipCardInner}>
                  <div className={aboutStyles.flipCardFront}>
                    <Img fluid={data.image.childImageSharp.fluid} />
                    <h2>Hope Tambala</h2>
                    <h3>Co Founder / CTO</h3>
                  </div>
                  <div className={aboutStyles.flipCardBack}>
                    <h2>Hope Tambala</h2>
                    <h3>Co Founder / CTO</h3>
                    <a href="https://www.linkedin.com/company/18499313/admin/"><Icon size={40} icon={linkedin} /></a>
                  </div>
                </div>
              </div>
              <div className={aboutStyles.flipCard}>
                <div className={aboutStyles.flipCardInner}>
                  <div className={aboutStyles.flipCardFront}>
                    <Img fluid={data.image.childImageSharp.fluid} />
                    <h2>First Last</h2>
                    <h3>Position</h3>
                  </div>
                  <div className={aboutStyles.flipCardBack}>
                    <h2>First Last</h2>
                    <h3>Position</h3>
                    <a href="https://www.linkedin.com/company/18499313/admin/"><Icon size={40} icon={linkedin} /></a>
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
