import React, { useState } from "react"
import Button from 'react-bootstrap/Button'

// Style Imports
import styles from './faqCTA.module.scss'

// Component Imports
import ContactModal from './contactModule'

const FaqCTA = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className={styles.container}>
      <h2>Have a question that's not listed?</h2>
      <div className={styles.button}>
        <Button onClick={() => setModalShow(true)} className={styles.buttonBackground}>
          Contact Us
        </Button>
        <ContactModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  )
}

export default FaqCTA
