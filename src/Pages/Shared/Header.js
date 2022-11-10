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
    <div
      style={{ backgroundColor: 'rgb(255 175 52)' }}
      className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="font-bold">
              <Link to="/service">Services</Link>
            </li>
            <li className="font-bold">
              <Link to="/blog">Blog</Link>
            </li>
            {
            user?.uid ?
            <>
            <li className="font-bold"><Link to="/myreviews">My Reviews</Link></li>
            <li className="font-bold"><Link to="/addservice">Add Service</Link></li>
            <li className="font-bold" onClick={handleLogOut}><Link>Logout</Link></li>
            </>
          :
            <li className="font-bold"><Link to="/login">Login</Link></li>
          }
           
          </ul>
        </div>
        <img style={{ width: '40px' }} src={logo} alt="" />
        <Link to="/" style={{ color: 'black' }} className="btn font-bold btn-ghost normal-case text-2xl">
          RENTALCO
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className="font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="font-bold">
              <Link to="/service">Services</Link>
          </li>
          <li className="font-bold">
            <Link to="/blog">Blog</Link>
          </li>
          {
            user?.uid ?
            <>
            <li className="font-bold"><Link to="/myreviews">My Reviews</Link></li>
            <li className="font-bold"><Link to="/addservice">Add Service</Link></li>
            <li className="font-bold" onClick={handleLogOut}><Link>Logout</Link></li>
            </>
          :
            <li className="font-bold"><Link to="/login">Login</Link></li>
          }
          

          {/* <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li> */}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex mr-5">

        {/* {user?.uid ? (
            <button className="ml-2 btn btn-xs btn-outline">Sign Out</button>
          ) : (
            <div className="hidden lg:block ml-2">
              <li>
                <Link to="/login">
                <button className="btn btn-xs btn-outline">Login</button>
              </Link>
              </li>
              
              <Link to="/register">
                <button className="btn btn-xs btn-outline">Register</button>
              </Link>
            </div>
          )} */}


          {user?.photoURL ? (
            <img
              className="rounded-xl"
              alt=""
              style={{ height: '25px' }}
              src={user.photoURL}
            />
          ) : (
            <FaUserAlt className="inline"></FaUserAlt>
          )}

          
        </div>
      </div>
    </div>

  );
};

export default Header;
