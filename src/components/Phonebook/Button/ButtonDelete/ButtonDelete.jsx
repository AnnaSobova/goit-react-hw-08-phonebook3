import React from 'react';
import ButtonDeleteStyle from './ButtonDelete.styled';
import PropTypes from 'prop-types';
import contactsOperation from 'redux/contacts/contactsOperation';
import { useSelector } from 'react-redux';
import { IoTrashBinSharp} from "react-icons/io5"
import { useDispatch } from 'react-redux';

const ButtonDelete =({id})=> {
   const dispatch = useDispatch();
   const isLoad = useSelector(state => state.contacts.isLoad);

    return (
        <ButtonDeleteStyle 
        type = "button"
        disabled= {isLoad}
        onClick = {()=> dispatch(contactsOperation.deleteContact(id))}
        >
        <IoTrashBinSharp/>
        </ButtonDeleteStyle>
    );
};
  export default ButtonDelete;

ButtonDelete.propTypes = {
    id: PropTypes.string.isRequired,
  };
  