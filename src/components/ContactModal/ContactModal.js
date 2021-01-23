import s from './ContactModal.module.css';

export default function ContactModal({ name, number, onIsOpen }) {
  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <span>{name}</span>
        <span>{number}</span>
        <button
          className={s.close}
          type="button"
          onClick={() => onIsOpen(false)}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}
