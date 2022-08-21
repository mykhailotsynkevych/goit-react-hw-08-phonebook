import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux/contacts/contacts-operations';
import { useEffect } from 'react';

import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';

const App = () => {
  const contacts = useSelector(state => state.contacts.items.length);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  });

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts: {contacts}</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
