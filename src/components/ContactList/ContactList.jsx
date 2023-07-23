import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Filter } from 'components/Filter/Filter';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { selectContacts, selectFilter, selectLoading, selectError } from '../redux/selectors';
import { fetchContacts } from 'components/redux/operations';

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
    elem.fullname.toLowerCase().includes(filter.toLowerCase())
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