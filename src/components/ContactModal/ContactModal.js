import s from './ContactModal.module.css';

export default function ContactModal({ contactData, onCloseModal }) {
  const {
    contact: { name, number },
    id,
  } = contactData;

  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <form className={s.form}>
          <div className="inputWrapper">
            <label htmlFor="editName"></label>

            <input
              className="input"
              type="text"
              name="name"
              id="editName"
              value={name}
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="editNumber"></label>
            <input
              className="input"
              type="text"
              name="number"
              id="editNamber"
              value={number}
            />
          </div>
          <button
            className={s.close}
            type="button"
            onClick={() => onCloseModal(false)}
          >
            Закрыть
          </button>
        </form>
      </div>
    </div>
  );
}
