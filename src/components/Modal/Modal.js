import React, {useState} from 'react';
import './Modal.sass';
import swal from 'sweetalert';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const Modals = ({video, title}) => {
  const [lgShow, setLgShow] = useState(false);

  return(
    <>
    {video ? ( <> <Button variant="light" onClick={() => setLgShow(true)}>Demo</Button>
      <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg">
          <Modal.Header closeButton><h5>{title}</h5></Modal.Header>
          <Modal.Body>
            <iframe className="video" width="100%" height="400" src={video} 
        title="Video Player" frameBorder="0"
         allow="accelerometer; autoplay;" >
         </iframe>
          </Modal.Body>
        </Modal>  </>) : null}
   
    </>


  );
}
export default Modals;