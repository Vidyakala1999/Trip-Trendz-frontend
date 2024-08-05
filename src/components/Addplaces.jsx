import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Addplaces() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
<Button variant="primary" onClick={handleShow}>
       Add place
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-lg-6'>
            <label>
    <input type="file"  style={{display:'none'}}/>
    <img src="https://cdn.pixabay.com/photo/2023/11/01/11/16/lake-8357182_640.jpg"  alt=""  width={'300px'}  />

</label>

            </div>
            <div className='col-lg-6'>
                <div className='mb-3'>
<input type="text" className='form-control'placeholder='Placename' />
                </div>
                <div className='mb-3'>
<input type="text" className='form-control'placeholder='Location' />
                </div>
                <div className='mb-3'>
<input type="text" className='form-control'placeholder='Rating' />
                </div>

            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addplaces