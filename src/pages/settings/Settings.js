import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

import Check from '../../assets/images/modal/check.svg'

function Settings() {

  const [showSuccessModal, setShowSuccessModal] = useState(false)

  return (
    <>
      <div className="container">
        <div className="title mb-60">
          Settings
        </div>
        <div className="w-md-50 m-auto">
          <div className="detail_label">
            Current Password
          </div>
          <div className="detail_input">
            <input type="text" placeholder="*********" />
          </div>
        </div>
        <div className="w-md-50 m-auto">
          <div className="detail_label">
            New Password
          </div>
          <div className="detail_input">
            <input type="text" placeholder="*********" />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-100 mb-100">
          <button className="main_btn" onClick={() => setShowSuccessModal(true)}>Save</button>
        </div>
      </div>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter main_modal"
        centered
        contentClassName="main_modal_body"
        dialogClassName='justify-content-center'
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)} >
        <Modal.Body>
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <img src={Check} alt="" className="mb-40" />
            <div className="main_modal_text">
            Your password has been changed.
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="w-100">
            <button className="main_modal_btn_002" onClick={() => setShowSuccessModal(false)}>
              OK
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Settings