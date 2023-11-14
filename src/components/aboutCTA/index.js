import React from "react"
import {
  Link,
  // graphql,
  // useStaticQuery,
} from "gatsby"
import Button from 'react-bootstrap/Button'

// Style Imports
import * as styles from './index.module.scss'

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
      <Link className={styles.button} to="/news">
        <Button className={styles.buttonBackground}>
          Annual Report
        </Button>
      </Link>
    </div>
  )
}

export default AboutCTA