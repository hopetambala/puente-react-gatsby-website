import React from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"
import Img from "gatsby-image"

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
        <div className={volunteerStyles.container}>
          <div className={volunteerStyles.banner}>
            <div className={volunteerStyles.bannerImage}>
              <Img fluid={data.image.childImageSharp.fluid} />
              <div className={volunteerStyles.title}>
                <h1>Voluneer With Puente</h1>
              </div>
            </div>
          </div>
          <div className={volunteerStyles.body}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className={volunteerStyles.section}>
              <div className={volunteerStyles.sectionText}>
                <h2>Volunteer Roles</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className={volunteerStyles.sectionImage}>
                <Img fluid={data.image.childImageSharp.fluid} />
              </div>
            </div>
            <VolunteerCTA />
            <div className={volunteerStyles.sectionEven}>
              <div className={volunteerStyles.sectionImage}>
                <Img fluid={data.image.childImageSharp.fluid} />
              </div>
              <div className={volunteerStyles.sectionText}>
                <h2>Volunteer Process</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className={volunteerStyles.volunteer}>
              <div className={volunteerStyles.volunteerBio}>
                <h2>Volunteer Name</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className={volunteerStyles.section}>
              <div className={volunteerStyles.sectionText}>
                <h2>Volunteer Impact</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
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