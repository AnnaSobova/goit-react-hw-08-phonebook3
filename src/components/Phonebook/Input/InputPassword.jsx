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
      // pattern="(?=.*\d)(?=.*[a-z]).{4,}"
      // title="Must contain at least one number and one uppercase and lowercase letter, and at least 4 or more characters"
    />
  );
  
  export default InputPassword;
  
  InputPassword.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };