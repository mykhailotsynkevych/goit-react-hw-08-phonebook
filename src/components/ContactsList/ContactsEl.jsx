import { IoIosContact } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa6';
import { FaUser } from "react-icons/fa";


import PropTypes from 'prop-types';
import s from './Contacts.module.css';

const ContactsEl = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <div>
        <div className={s.wrapper}>
        <FaUser size={16}/>
          <p className={s.name}>{name}</p>
        </div>
        <div className={s.wrapper}>
          <FaPhone size={16} />

          <p className={s.number}>{number}</p>
        </div>
      </div>
      <button className="button" onClick={onDeleteContact}>
        Delete
      </button>
    </>
  );
};

ContactsEl.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsEl;
