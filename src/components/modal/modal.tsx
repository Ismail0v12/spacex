import React, {useLayoutEffect} from 'react';
import './modal.css';
import CancelIcon from "../../assets/icons/cancel-icon";
import CheckIcon from "../../assets/icons/check-icon";

interface ModalProps {
  readonly setModal: (isOpen: boolean) => void;
}

function Modal({setModal}: ModalProps) {
  useLayoutEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === "Escape") {
        setModal(false);
      }
    })
  }, []);
  return (
    <div className="modal">
      <div className="modal__wrapper">
        <div className="modal__close" onClick={() => setModal(false)}><CancelIcon/></div>
        <div className="modal__body">
          <span><CheckIcon/></span>
          <h3>Booked :)</h3>
        </div>
      </div>
    </div>
  );
}

export default Modal;