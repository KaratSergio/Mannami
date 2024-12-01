import { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../Button';
import { Icon } from '@shared/icons';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
      <div className="bg-white p-6 rounded-lg max-w-lg w-full relative" onClick={(e) => e.stopPropagation()}>
        <Button onClick={onClose} className="absolute top-3 right-3">
          <Icon id="icon-cross" width="18px" height="18px" fill="#ef2447" />
        </Button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
