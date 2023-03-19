import {Title,LinkIconsList,} from '../components/Home/Home.styled';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Title>Welcome to Phonebook service!</Title>
      <LinkIconsList>
      <h2>
        Want to join us? <Link to="register">Sign Up</Link>
      </h2>
      <h2>
        Already have account? <Link to="login">Sign in</Link>
      </h2>

      </LinkIconsList>
    </>
  );
};

export default Home;