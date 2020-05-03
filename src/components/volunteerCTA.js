import React from "react"
import {
  Link,
  // graphql,
  // useStaticQuery,
} from "gatsby"

// Style Imports
import styles from './volunteerCTA.module.scss'

const VolunteerCTA = () => {
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
      <h2>Interested in Volunteering?</h2>
      <Link className={styles.button} to="/contact">
        <div className={styles.buttonBackground}>
          <p>Get Started</p>
        </div>
      </Link>
    </div>
  )
}

export default VolunteerCTA