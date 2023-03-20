import React from 'react';
import ContactsItem from './Contacts.styled';
import InputFilter from '../Input/InputFilter';
import LabelFilter from '../Label/LabelFilter/LabelFilter';
import ButtonDelete from '../Button/ButtonDelete/ButtonDelete';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {
  ContactName,
  ContactNumber,
  ContactsListItem,
  ContactsButtons,
  PhoneLink,
} from './Contacts.styled';
import { IoCallSharp } from 'react-icons/io5';

const Contacts = ({ name }) => {
  const data = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const normolizeFilter = filter.toLowerCase();
  const visibleContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(normolizeFilter)
  );

  return (
    <ContactsItem>
      <p>{name}</p>
      <LabelFilter title="Find contacts by name">
        <InputFilter />
      </LabelFilter>
      <ul>
        {visibleContacts.map(data => (
          <li key={data.id}>
            <ContactsListItem>
              <ContactName>{data.name}</ContactName>
              <ContactNumber>{data.number}</ContactNumber>
            </ContactsListItem>
            <ContactsButtons>
              <li key="PhoneLink">
                <PhoneLink href={'tel:' + data.number}>
                  <IoCallSharp />
                </PhoneLink>
              </li>
              <li key="ButtonDelete">
                <ButtonDelete id={data.id} />
              </li>
            </ContactsButtons>
          </li>
        ))}
      </ul>
    </ContactsItem>
  );
};

export default Contacts;

Contacts.propTypes = {
  name: PropTypes.string.isRequired,
};
