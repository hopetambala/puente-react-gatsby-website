import React from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"
import Img from "gatsby-image"

// Component Imports
import Layout from "../components/layout"
import DonateForm from "../components/donateForm"

// Style Imports
import donateStyles from "./donate.module.scss"

const DonatePage = () => {
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
        <div className={donateStyles.container}>
          <div className={donateStyles.banner}>
            <div className={donateStyles.bannerImage}>
              <Img fluid={data.image.childImageSharp.fluid} />
            </div>
            <div className={donateStyles.title}>
              <h1>Make a Donation</h1>
            </div>
          </div>
          <div className={donateStyles.body}>
            <p>
              Puente is a 501(c)(3) nonprofit. All donations are  deemed tax-deductible under IRC Section 170. Our EIN  is 82-4237540 and Puente’s 
              IRS confirmation letter is  available upon request. No goods or services were provided in exchange for your contribution.
              <br /><br />
              Checks and cash donations may be mailed to:
              <br /><br />
              Puente Desarrollo Internacional
              <br />
              51181 Whitewater Lane
              <br />
              South Bend, IN 46628
            </p>
            <div className={donateStyles.donateSection}>
              <h2>Donation Amount</h2>
              <DonateForm />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default DonatePage
