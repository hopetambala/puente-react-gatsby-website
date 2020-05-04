import React from "react"
import {
  Link,
  // graphql,
  // useStaticQuery,
} from "gatsby"
import Button from 'react-bootstrap/Button'

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
        <Button className={styles.buttonBackground}>
          Get Started
        </Button>
      </Link>
    </div>
  )
}

export default VolunteerCTA