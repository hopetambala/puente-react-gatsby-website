import React from "react"
import Button from 'react-bootstrap/Button'

// Style Imports
import styles from './volunteerCTA.module.scss'

const VolunteerCTA = () => {
  return (
    <div className={styles.container}>
      <h2>Interested in Volunteering?</h2>
      <a className={styles.button} target="_blank" rel="noopener noreferrer" href="https://forms.gle/VHTttkLzUeQY23vy6">
        <Button className={styles.buttonBackground}>
          Get Started
        </Button>
      </a>
    </div>
  )
}

export default VolunteerCTA