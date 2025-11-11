import React from 'react';
import clsx from 'clsx';

const overlayStyles = 'fixed inset-0 z-40 bg-black/50';
const panelStyles = 'fixed inset-0 z-50 flex items-center justify-center p-4';

const Modal = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null;

  return (
    <div className={overlayStyles} onClick={onClose} role="presentation">
      <div
        className={clsx('max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg bg-white p-6 shadow-xl', className)}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
