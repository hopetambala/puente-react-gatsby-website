import React from "react"
import {
  Link
} from "gatsby"
import Button from 'react-bootstrap/Button'

// Style Imports
import styles from './demoCTA.module.scss'

const DemoCTA = () => {
  return (
    <div className={styles.container}>
      <h2>Ready to Empower Your Community?</h2>
      <Link className={styles.button} to="/contact">
        <Button className={styles.buttonBackground}>
          Request a Demo
        </Button>
      </Link>
    </div>
  )
}

export default DemoCTA