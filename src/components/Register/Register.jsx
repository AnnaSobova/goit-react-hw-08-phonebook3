import FormStyled from './Register.styled';
import InputName from '../Phonebook/Input/InputName';
import InputMail from '../Phonebook/Input/InputMail';
import InputPassword from 'components/Phonebook/Input/InputPassword';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperation from 'redux/auth/authOperation';
import Button from '@mui/material/Button';
// import { TailSpin } from 'react-loader-spinner';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoad = useSelector(state => state.auth.isLoad);

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'email':
        setEmail(e.currentTarget.value);
        break;
      case 'password':
        setPassword(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  // const resetForm = () => {
  //   setName('');
  //   setEmail('');
  //   setPassword('');
  // };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperation.register({ name, email, password }));
    
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <label>
        <p>Name</p>
        <InputName value={name} onChange={handleChange} />
      </label>
      <label>
        <p>E-mail</p>
        <InputMail value={email} onChange={handleChange} />
      </label>
      <label>
        <p>Password</p>
        <InputPassword value={password} onChange={handleChange} />
      </label>
      <Button
        variant="contained"
        size="medium"
        type="submit"
        className="button-signup"
        disabled={isLoad}
      >
        Sign up
      </Button>
    </FormStyled>
  );
};

export default Register;