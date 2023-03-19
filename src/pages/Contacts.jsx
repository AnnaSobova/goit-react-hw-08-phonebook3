import Phonebook from '../components/Phonebook/Phonebook';
import Main from '../components/container/Container';
import Contacts from '../components/Phonebook/Contacts/Contacts';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import contactsOperation from 'redux/contacts/contactsOperation';
import { EmptyPhonebookText } from 'components/Phonebook/Contacts/Contacts.styled';

const ContactsPage = () => {
  const data = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperation.fetchContacts());
  }, [dispatch]);

  return (
    <Main title="Phonebook">
      <Phonebook />
      {data.length > 0 ? (
        <Contacts name="Contacts" />
      ) : (
        <EmptyPhonebookText>Phonebook empty</EmptyPhonebookText>
      )}
    </Main>
  );
};

export default ContactsPage;