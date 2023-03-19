
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Notiflix from 'notiflix';

import InputName from './Input/InputName';
import LabelPhoneBook from './Label/Label';
import InputNumber from './Input/InputNumber';
import FormPhonebook from './Form/Form';
import contactsOperation from 'redux/contacts/contactsOperation';
import Button from '@mui/material/Button';


const Phonebook = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const isLoad = useSelector(state => state.contacts.isLoad);


  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setPhone(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  const formSubmitHandle = data => {
    
    if (contacts.filter(contact => contact.name.toLowerCase() === data.name.toLowerCase()).length > 0) {
      Notiflix.Notify.warning(`${data.name} is already in contacts`);
      return;
    }
    dispatch(contactsOperation.addContact(data));
    
  };

  const clickOnBtnSubmit = async e => {
    e.preventDefault();
    formSubmitHandle({ name, number: phone });
    reset();
  };

  return (
    <FormPhonebook onSubmit={clickOnBtnSubmit}>
      <LabelPhoneBook title="Name">
        <InputName value={name} onChange={handleChange} />
      </LabelPhoneBook>
      <LabelPhoneBook title="Number">
        <InputNumber value={phone} onChange={handleChange} />
      </LabelPhoneBook>
      <Button
        variant="contained"
        size="medium"
        type="submit"
        className="button-signup"
        disabled={isLoad}
      >
        Add
        </Button>
    </FormPhonebook>
  );
};

export default Phonebook;
