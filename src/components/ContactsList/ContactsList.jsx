import PropTypes from 'prop-types';
import ContactsEl from './ContactsEl';
import { removeContacts } from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import { useSelector, useDispatch } from 'react-redux';
import s from './Contacts.module.css';

const ContactsList = () => {
  const contactsList = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return contactsList.length ? (
    <ul>
      {contactsList.map(contacts => (
        <li key={contacts.id} className={s.item}>
          <ContactsEl
            name={contacts.name}
            number={contacts.number}
            onDeleteContact={() => dispatch(removeContacts(contacts.id))}
          />
        </li>
      ))}
    </ul>
  ) : (
    <p>You have no contacts</p>
  );
};

ContactsList.propTypes = {
  contactEl: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      onDeleteContact: PropTypes.func.isRequired,
    })
  ),
};

export default ContactsList;
