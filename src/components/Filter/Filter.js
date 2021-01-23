import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <form className="form">
      <div className="inputWrapper">
        <label
          className="label"
          name="filter"
          htmlFor="filter"
          value={filter}
        ></label>
        <input
          style={{ marginBottom: '30px' }}
          className="input"
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
