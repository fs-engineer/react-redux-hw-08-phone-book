import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import s from '../../base.module.css';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <form className={s.form}>
      <div className={s.inputWrapper}>
        <label
          className={s.label}
          name="filter"
          htmlFor="filter"
          value={filter}
        ></label>
        <input
          style={{ marginBottom: '30px' }}
          className={s.input}
          value={filter}
          type="text"
          id="filter"
          placeholder="найти контакт по имени"
          onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
        />
      </div>
    </form>
  );
}
