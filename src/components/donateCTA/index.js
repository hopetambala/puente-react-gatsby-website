import React from "react"
import {
  Link,
} from "gatsby"
import Button from 'react-bootstrap/Button'

// Style Imports
import styles from '../volunteerCTA/index.module.scss'

const DonateCTA = () => {
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