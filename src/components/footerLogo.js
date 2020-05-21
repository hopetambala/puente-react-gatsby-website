import React from "react"
import {
  // Link,
  useStaticQuery,
  graphql
} from "gatsby"
import Img from "gatsby-image"

// Style Imports
import '../styles/styles.scss'
import styles from './footer.module.scss'

const Logo = () => {
  const logo = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo-black.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Img className={styles.logo} fluid={logo.logo.childImageSharp.fluid} />
  )
}

export default Logo