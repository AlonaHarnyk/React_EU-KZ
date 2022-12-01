import { Component } from 'react';
import styles from './Modal.module.css'

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEsc);
  }

  closeByEsc = ({ code }) => {
    if (code === 'Escape') {
      this.props.closeModal();
    }
  };


  render() {
    const {
      image: { src, alt },
      closeModal,
    } = this.props;

    return (
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <button className={styles.close} onClick={closeModal}>Close</button>
          <img src={`https://image.tmdb.org/t/p/w500${src}`} alt={alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
