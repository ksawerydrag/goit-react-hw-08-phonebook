import React from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/operations';
import { selectContacts } from '../redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectContacts);

  const handleSubmit = async e => {
    e.preventDefault();
    const formValue = e.currentTarget;
    const fullname = formValue.elements.fullname.value;
    const phone = formValue.elements.phone.value;

    if (list.some(elem => elem.fullname === fullname)) {
      alert(fullname + ' is already in contacts');
    } else {
      dispatch(addContact({ fullname, phone }));
    }

    formValue.reset();
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullname"
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
