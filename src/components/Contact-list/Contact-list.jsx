import React from "react";
import PropTypes from "prop-types"
import "./Contact-list.css";

const ContactList = ({ contacts, onClick }) => {
    return (
        <ul className="Contacts__list">
            {contacts.map((contact) => (
                <li className="Contacts__item" key={contact.id}>
                    <p>{contact.name + ": " + contact.number}</p>
                    <button
                        className="Contacts__delete-btn"
                        type="button"
                        id={contact.id}
                        onClick={onClick}>Delete
                    </button>
                </li>
                
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
};

export default ContactList;