import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { FaPlus } from 'react-icons/fa';

function ModalF() {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div className='just_center'>
            {/* <button onClick={onOpenModal}>Open modal</button> */}
            <button className="publish_modal" onClick={onOpenModal}><FaPlus />Заказать звонок</button>
            <Modal open={open} onClose={onCloseModal} center>
                <h2>Simple centered modal</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                    hendrerit risus, sed porttitor quam.
                </p>
            </Modal>
        </div>
    )
}

export default ModalF
