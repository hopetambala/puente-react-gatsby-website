import React from "react"
import {
  Link,
  // graphql,
  // useStaticQuery,
} from "gatsby"

// Style Imports
import styles from './volunteerCTA.module.scss'

const VolunteerContactCTA = () => {
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
      <h2>Questions about volunteering?</h2>
      <Link className={styles.button} to="/contact">
        <div className={styles.buttonBackground}>
          <p>Contact Us</p>
        </div>
      </Link>
    </div>
  )
}

export default VolunteerContactCTA