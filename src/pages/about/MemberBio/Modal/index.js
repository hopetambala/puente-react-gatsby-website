import React from "react"
// import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

// import styles from "./bioModule.module.scss"

const BioModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton/> */}
      <Modal.Body>
        {props.children}
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default BioModal