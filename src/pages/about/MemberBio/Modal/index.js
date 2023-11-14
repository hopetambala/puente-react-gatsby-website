import React from "react"
import Modal from 'react-bootstrap/Modal'

const BioModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        {props.children}
      </Modal.Body>
    </Modal>
  );
}

export default BioModal