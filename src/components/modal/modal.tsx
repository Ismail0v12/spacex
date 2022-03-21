import React, {useLayoutEffect} from 'react';
import CancelIcon from "../../assets/icons/cancel-icon";
import CheckIcon from "../../assets/icons/check-icon";
import './modal.css';

interface ModalProps {
  readonly setModal: (isOpen: boolean) => void;
}

function Modal({setModal}: ModalProps) {
  useLayoutEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === "Escape") {
        setModal(false);
      }
    });
  }, []);
  return (
    <div className="modal">
      <div className="modal__wrapper">
        <div className="modal__close" onClick={() => setModal(false)}><CancelIcon/></div>
        <div className="modal__body">
          <span><CheckIcon/></span>
          <h3>Dropped :)</h3>
        </div>
      </div>
    </div>
  );
}

export default Modal;