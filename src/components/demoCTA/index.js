import React, { useState } from "react"
import Button from 'react-bootstrap/Button'

// Style Imports
import styles from './index.module.scss'

// Component Imports
import ContactModal from '../contactModule'

const DemoCTA = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className={styles.container}>
      <h2>Ready to Empower Your Community?</h2>
      <div className={styles.button}>
        <Button onClick={() => setModalShow(true)} className={styles.buttonBackground}>
          Request a Demo
        </Button>
        <ContactModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  )
}

export default DemoCTA