import React from 'react';
import Input from './Input.styled';
import PropTypes  from 'prop-types';

const InputPassword = ({ onChange, value }) => (
    <Input
      type="password"
      name="password"
      required
      placeholder="Enter password"
      onChange={onChange}
      value={value}
      pattern="\w{4,8}"
      title="Password requires 4-8 characters"
    />
  );
  
  export default InputPassword;
  
  InputPassword.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };