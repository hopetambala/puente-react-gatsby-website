import React from "react"
// import {
//   useStaticQuery,
//   graphql
// } from "gatsby"
// import Img from "gatsby-image"

// Style Imports
import '../styles/styles.scss'
import styles from './footer.module.scss'

const Logo = () => {
  // const logo = useStaticQuery(graphql`
  //   query {
  //     logo: file(relativePath: { eq: "logo-black.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 300) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <img className={styles.logo} src={require('../images/logo-black.png')} alt="Puente Logo" />
  )
}

export default Logo