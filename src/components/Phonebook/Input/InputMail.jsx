import React from 'react';
import Input from './Input.styled';
import PropTypes from 'prop-types';

const InputMail = ({ onChange, value }) => (
  <Input
    type="email"
    name="email"
    required
    placeholder="Enter e-mail"
    onChange={onChange}
    value={value}
  />
);

export default InputMail;

InputMail.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
