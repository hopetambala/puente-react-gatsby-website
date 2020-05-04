import React from "react"
import {
  Link,
  // graphql,
  // useStaticQuery,
} from "gatsby"
import Button from 'react-bootstrap/Button'

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
        <Button className={styles.buttonBackground}>
          Contact Us
        </Button>
      </Link>
    </div>
  )
}

export default VolunteerContactCTA