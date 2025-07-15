import { useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { useTheme } from '../../lib/theme/useTheme';

type ModalProps = {
   isOpen: boolean;
   onClose: () => void;
   children?: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
   const { theme } = useTheme();

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
      <div className={styles.overlay} data-theme={theme}>
         <div className={styles.content}>
            {children}
         </div>
      </div>,
      portalRoot,
   );
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
