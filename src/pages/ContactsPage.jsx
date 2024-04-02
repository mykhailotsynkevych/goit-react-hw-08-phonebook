import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux/contacts/contacts-operations';
import { useEffect } from 'react';

import Form from '../components/Form/Form';
import Filter from '../components/Filter/Filter';
import ContactsList from '../components/ContactsList/ContactsList';
import UserMenu from '../components/UserMenu/UserMenu';

import { selectIsContacts } from '../redux/contacts/contacts-selectors';

const ContactsPage = () => {
  const isContacts = useSelector(selectIsContacts);

  const contacts = useSelector(state => state.contacts.items.length);
  const dispatch = useDispatch();

  useEffect(() => {
    !isContacts && dispatch(getContacts());
  }, [dispatch, isContacts]);

  return (
    <>      
      <UserMenu />
      <h1 className="secondTitle">Contacts</h1>
      <Form className="form"/>
      <h2 className="secondTitle">Contacts: {contacts}</h2>
      <Filter />
      <ContactsList />
    </>
  );
};

export default ContactsPage;
