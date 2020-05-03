import React from "react"
import {
  Link,
  // graphql,
  // useStaticQuery,
} from "gatsby"

// Style Imports
import styles from './aboutCTA.module.scss'

const AboutCTA = () => {
  // const data = useStaticQuery(
  //   graphql`
  //   query {
  //     contentfulLandingPage {
  //       hero
  //       firstSectionTitle
  //       secondSectionTitle
  //     }
  //   }
  // `)
  return (
    <div className={styles.container}>
      <h2>Learn About What We Have Been Up To</h2>
      <Link className={styles.button} to="/report">
        <div className={styles.buttonBackground}>
          <p>Annual Report</p>
        </div>
      </Link>
    </div>
  )
}

export default AboutCTA