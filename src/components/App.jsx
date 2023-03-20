import SharedLayout from './SharedLayout/SharedLayout';
import Home from '../pages/Home';
import ContactsPage from '../pages/Contacts';
import Register from './Register/Register';
import LogIn from './Login/LogIn';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import authOperation from '../redux/auth/authOperation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperation.fetchCurrentUser());
  }, [dispatch]);

  return (
    <BrowserRouter basename="/goit-react-hw-08-phonebook3">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />

          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            restricted
            element={
              <PublicRoute restricted>
                <LogIn />
              </PublicRoute>
            }
          />
        </Route>
        <Route path="*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;