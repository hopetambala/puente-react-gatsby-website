import React from "react"
import {
  Link,
  // graphql,
  // useStaticQuery,
} from "gatsby"
import Button from 'react-bootstrap/Button'

// Style Imports
import styles from './volunteerCTA.module.scss'

const DonateCTA = () => {
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
      <h2>You Can Also Support Puente by Donating!</h2>
      <Link className={styles.button} to="/donate">
        <Button className={styles.buttonBackground}>
          Donate
        </Button>
      </Link>
    </div>
  )
}

export default DonateCTA