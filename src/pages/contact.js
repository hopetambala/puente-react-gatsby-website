import React from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"
import Img from "gatsby-image"

// Component Imports
import Layout from "../components/layout"

// Style Imports
import contactStyles from "./contact.module.scss"

const ContactPage = () => {
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
        <div className={contactStyles.container}>
          <div className={contactStyles.banner}>
            <div className={contactStyles.bannerImage}>
              <Img fluid={data.image.childImageSharp.fluid} />
            </div>
            <div className={contactStyles.title}>
              <h1>Get In Touch</h1>
            </div>
          </div>
          <div className={contactStyles.body}>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ContactPage
