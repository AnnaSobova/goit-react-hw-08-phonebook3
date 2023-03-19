import {
    Container,
    Header,
    NavigationLink,
    AutorizationLink,
    LoginInfo,
  } from './SharedLayout.styled';
  import { Outlet } from 'react-router-dom';
  import { useSelector } from 'react-redux';
  import UserMenu from 'components/UserMenu/UserMenu';
  
  const SharedLayout = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    return (
      <Container>
        <Header>
          <nav>
            <NavigationLink to="/">Home</NavigationLink>
            {isLoggedIn && (
              <NavigationLink to="/contacts">Contacts</NavigationLink>
            )}
          </nav>
          <LoginInfo>
            {isLoggedIn ? (
              <UserMenu />
            ) : (
              <>
                <AutorizationLink to="/register">Sign up</AutorizationLink>
                <AutorizationLink to="/login">Log In</AutorizationLink>
              </>
            )}
          </LoginInfo>
        </Header>
        <Outlet />
      </Container>
    );
  };
  
  export default SharedLayout;