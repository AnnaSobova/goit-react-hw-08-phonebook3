import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperation from 'redux/auth/authOperation';
import FormStyled from 'components/Register/Register.styled';
import Button from '@mui/material/Button';
import { TailSpin } from 'react-loader-spinner';
import InputMail from '../Phonebook/Input/InputMail';
import InputPassword from 'components/Phonebook/Input/InputPassword';

const LogIn = () => {
  const dispatch = useDispatch();
  const isLoad = useSelector(state => state.auth.isLoad);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    switch (e.currentTarget.name) {
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

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperation.logIn({ email, password }));
    resetForm();
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <label>
        <p>Email</p>
        <InputMail
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
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
        {isLoad ? (
          <TailSpin
            height="20"
            width="20"
            color="#ff4500"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          'Log In'
        )}
      </Button>
    </FormStyled>
  );
};
export default LogIn;