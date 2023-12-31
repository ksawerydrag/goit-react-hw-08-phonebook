import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Filter } from 'components/Filter/Filter';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import {
  selectContacts,
  selectError,
} from '../../redux/contacts/selectors';
import { selectFilter } from '../../redux/filter/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = list.filter(elem =>
    elem.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {error && <p>{error}</p>}
      {list.length > 0 && <h2 className={css.listTitle}>Contacts</h2>}
      {list.length > 0 && <Filter />}
      <ul className={css.contactList}>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <ContactListItem contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};
