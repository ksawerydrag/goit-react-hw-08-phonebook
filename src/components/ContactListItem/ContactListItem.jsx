import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  }

  return (
    <div className={css.elemStyle}>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button className={css.btnStyle} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
