import PropTypes from 'prop-types';
import s from './Contacts.module.css';

const ContactsEl = ({name, number, onDeleteContact }) => {
  return (
    <div className={s.item}>
      <p className={s.discription}>{name}</p>
      <p className={s.discription}>{number}</p>
      <button className={s.button} onClick={onDeleteContact}>
        Delete
      </button>
    </div>
  );
};

ContactsEl.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsEl;
