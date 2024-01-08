import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Globe, User } from 'react-feather';
import useOutsideDropdown from '../../../../libs/utils/useOutsideDropdown';
import { Auth } from 'aws-amplify';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser } from '../../../../libs/redux-toolkit/reducers/authReducer';
const UserLogin = ({ value }) => {
  // const [AuthUser, setAuthUser] = useState(undefined);
  const authUser = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // handlers
  // logut handler
  const handleLogOut = () => {
    Auth.signOut();
    router.push('/auth/login')
    dispatch(
      setAuthUser({
        name: '',
        loggedIn: false,
        authRole: '',
        id: '',
        email: '',
        role: '',
        first_name: '',
        last_name: '',
        phone_number: '',
        gender: '',
        birthday: '',
        address: '',
        city: '',
        state: '',
      })
    );
  };

  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideDropdown(false);
  const router = useRouter();
  const query = router.query;
  return (
    <li ref={ref} className={`dropdown language ${isComponentVisible && 'active'}`}>
      <a>
        <User
          onClick={() => {
            setIsComponentVisible(!isComponentVisible);
          }}
        />
      </a>
      <ul className={`nav-submenu ${isComponentVisible && 'open'}`}>
        {authUser.loggedIn ? (
          <>
            <li className="text-center cursor link font-weight-bold mb-3">
              <span
                role={'button'}
                onClick={() => router.push('/auth/login')}
              >
                Dashboard
              </span>
            </li>
            <li className="text-center cursor link font-weight-bold" onClick={handleLogOut}>
              <span role={'button'}>Log Out</span>
            </li>
          </>
        ) : (
          <>
            {value.options.map((option, i) => (
              <li key={i}>
                <Link href={option.path}>{option.title}</Link>
              </li>
            ))}
          </>
        )}
      </ul>
    </li>
  );
};

export default UserLogin;
