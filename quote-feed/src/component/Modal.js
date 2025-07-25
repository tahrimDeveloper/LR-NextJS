'use client';

import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

function Modal({ children }) {
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function onModalHide() {
    router.back();
  }

  return createPortal(
    <dialog
      onClose={onModalHide}
      ref={modalRef}
      className="shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-2 rounded-md dark:bg-black dark:bg-opacity-95 dark:text-gray-100">
      <span onClick={onModalHide} className="flex justify-end cursor-pointer">
        X
      </span>
      {children}
    </dialog>,
    document.getElementById('modal-root-id')
  );
}

export default Modal;
