import React from "react"
import {
  Link,
  // graphql,
  // useStaticQuery,
} from "gatsby"

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
        <div className={styles.buttonBackground}>
          <p>Contact Us</p>
        </div>
      </Link>
    </div>
  )
}

export default FaqCTA
