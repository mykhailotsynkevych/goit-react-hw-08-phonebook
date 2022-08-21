import React, { useState  } from 'react';
import {addContacts} from '../../redux/contacts/contacts-operations';
import s from './Form.module.css';
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

    setForm({ name: '', number: ''});
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.form}>
          <span className={s.inputTitle}> Name </span>
          <input
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label className={s.form}>
          <span className={s.inputTitle}> Number </span>
          <input
            className={s.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={form.number}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    </>
      );
}
        
export default Form;