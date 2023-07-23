import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Filter } from 'components/Filter/Filter';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { selectContacts, selectLoading, selectError } from '../../redux/contacts/selectors';
import {selectFilter} from '../../redux/filter/selectors';
import { fetchContacts } from 'redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const loading = useSelector(selectLoading);
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
      {list.length > 0 && <Filter />}
      {list.length > 0 && <h2>Contacts</h2>}
      {loading && <p>Loading contacts...</p>}
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <ContactListItem contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};