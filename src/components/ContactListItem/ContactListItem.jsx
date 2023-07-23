import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/operations';
import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  }

  return (
    <div className={css.elemStyle}>
      <p>
        {contact.fullname}: {contact.phone}
      </p>
      <button className={css.btnStyle} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    fullname: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};