import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from '../redux/contacts/operations';
import { selectLoading } from '../redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <ContactForm />
      <div>{loading && 'Loading contacts...'}</div>
      <ContactList />
    </>
  );
}
