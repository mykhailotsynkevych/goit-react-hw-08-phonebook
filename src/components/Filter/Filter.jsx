import PropTypes from 'prop-types';
import s from './Filter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilter  } from '../../redux/contacts/contacts-selectors';


const Filter = () => {
  const value = useSelector(getFilter );
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    dispatch(changeFilter(value));
  };
  return (
    <>
      <label className={s.filtr}>
        <span className={s.inputTitle}> Filtr by Name </span>
        <input
          className={s.input}
          type="text"
          name="value"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={value}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};

export default Filter;