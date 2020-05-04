import React from "react"
import {
  Link,
  // graphql,
  // useStaticQuery,
} from "gatsby"
import Button from 'react-bootstrap/Button'

// Style Imports
import styles from './faqCTA.module.scss'

const FaqCTA = () => {
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
      <h2>Have a question that's not listed?</h2>
      <Link className={styles.button} to="/contact">
        <Button className={styles.buttonBackground}>
          Contact Us
        </Button>
      </Link>
    </div>
  )
}

export default FaqCTA
