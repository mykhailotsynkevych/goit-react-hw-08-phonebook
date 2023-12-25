import React, { useState } from 'react';
import { addContacts } from '../../redux/contacts/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

let initialForm = {
  name: '',
  number: '',
};

const Form = () => {
  const [form, setForm] = useState(initialForm);
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === form.name.toLowerCase()
      )
    )
      return alert(`${form.name} is already in contacts.`);
    dispatch(addContacts(form));

    setForm({ name: '', number: '' });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <label className="label">
          <span className="inputTitle">Name</span>
          <input
            className="input"
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label className="label">
          <span className="inputTitle">Number</span>
          <input
            className="input"
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={form.number}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="button">
          Add
        </button>
      </form>
    </>
  );
};

export default Form;
