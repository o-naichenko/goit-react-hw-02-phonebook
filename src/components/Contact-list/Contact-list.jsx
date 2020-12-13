import React from 'react';
import PropTypes from 'prop-types';
import s from './Contact-list.module.css';

const ContactList = ({ contacts, onClick }) => {
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li className={s.item} key={contact.id}>
          <p className={s.text}>{contact.name + ': ' + contact.number}</p>
          <button
            className={s.deleteBtn}
            type="button"
            id={contact.id}
            onClick={onClick}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactList;
