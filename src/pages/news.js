import React from "react"
import {
  // Link,
  graphql,
  useStaticQuery,
} from "gatsby"
import Img from "gatsby-image"

// Component Imports
import Layout from "../components/layout"

// Style/Icon Imports
import styles from "./news.module.scss"

const ReportsPage = () => {
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
        <div className={styles.container}>
          <div className={styles.banner}>
            <div className={styles.bannerImage}>
              <Img fluid={data.image.childImageSharp.fluid} />
              <h1>Puente In The News</h1>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ReportsPage
