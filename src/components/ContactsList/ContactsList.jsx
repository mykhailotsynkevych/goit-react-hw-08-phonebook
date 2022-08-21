import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import ContactsEl from './ContactsEl';
import { removeContacts } from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

import React from 'react';
import {useSelector, useDispatch } from 'react-redux';


const ContactsList = () => {
    const contactsList = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <div className={s.wrap}>
      <ol className={s.list}>
        {contactsList.map((contacts) => (
          <li key={contacts.id}>
            <ContactsEl
              name={contacts.name}
              number={contacts.number}
              onDeleteContact={() => dispatch(removeContacts(contacts.id))}
            />
          </li>
        ))}
      </ol>
    </div>
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
