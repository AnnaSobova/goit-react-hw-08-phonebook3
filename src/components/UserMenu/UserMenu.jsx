import { useSelector } from 'react-redux';
import defaultAvatar from '../../images/user.png';
import { useDispatch } from 'react-redux';
import authOperation from 'redux/auth/authOperation';
import { HiOutlineLogout } from 'react-icons/hi';
import { UserMenuStyled } from './UserMenu.styled';

const UserMenu = () => {
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();
  return (
    <UserMenuStyled>
      <span>{name}</span>
      <img src={defaultAvatar} width="40" alt="user avatar" />

      <button type="button" onClick={() => dispatch(authOperation.logOut())}>
        <HiOutlineLogout />
      </button>
    </UserMenuStyled>
  );
};

export default UserMenu;