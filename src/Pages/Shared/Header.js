import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/DriveSkye-icon-yellow.png';
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider';

const Header = () => {
  const { user , logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.error(error))
  }

  return (
    
  );
};

export default Header;
