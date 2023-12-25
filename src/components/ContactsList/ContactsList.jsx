import PropTypes from 'prop-types';
import ContactsEl from './ContactsEl';
import { removeContacts } from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ContactsList = () => {
  const contactsList = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return contactsList.length ? (
    <ol>
      {contactsList.map(contacts => (
        <li key={contacts.id}>
          <ContactsEl
            name={contacts.name}
            number={contacts.number}
            onDeleteContact={() => dispatch(removeContacts(contacts.id))}
          />
        </li>
      ))}
    </ol>
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
