import { useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

type ModalProps = {
   isOpen: boolean;
   onClose: () => void;
   children?: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
   useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
         if (e.key === 'Escape') onClose();
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
   }, [onClose]);

   if (!isOpen) return null;

   const portalRoot = document.getElementById("portal-root");

   if (!portalRoot) {
      console.error('Элемент c id portal-root не найден');
      return null;
   };

   return createPortal(
      <div className={styles.overlay}>
         <div className={styles.content}>
            {children}
         </div>
      </div>,
      portalRoot,
   );
};