import { useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ image: { src, alt }, closeModal }) => {
  useEffect(() => {
    const closeByEsc = ({ code }) => {
      if (code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', closeByEsc);
    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, [closeModal]);

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={closeModal}>
          Close
        </button>
        <img src={`https://image.tmdb.org/t/p/w500${src}`} alt={alt} />
      </div>
    </div>
  );
};

export default Modal;
