import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import { Link, NavLink } from 'react-router-dom';
import Account from '../Icons/Account';
import Notify from '../Icons/Notify';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger ${isOpen ? 'open' : ''}`}>
        <div className='mobile-logo'>
            <Link to="/" className="logo">
                <Logo />
            </Link>
        </div>  
      <button className="hamburger-button" onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      {isOpen && (
        <div className="hamburger-menu">
            <ul>
                              <li>
                                  <NavLink
                                  to="/"
                                      className={({isActive}) =>
                                        `${isActive ? "secondary" : "primary-text-black"}`
                                      }
                                  >
                                      <span className='secondary-fs'>Home</span>
                                  </NavLink>
                              </li>
                              <li>
                                  <NavLink
                                  to="/lettings"
                                      className={({isActive}) =>
                                        `${isActive ? "secondary" : "primary-text-black"}`
                                      }
                                  >
                                      <span className='secondary-fs'>Lettings</span>
                                  </NavLink>
                              </li>
                              <li>
                                  <NavLink
                                  to="/rent"
                                      className={({isActive}) =>
                                        `${isActive ? "secondary" : "primary-text-black"}`
                                      }
                                  >
                                      <span className='secondary-fs'>Rent</span>
                                  </NavLink>
                              </li>
            </ul>

            <div className='header-icons'>
                        <Link to="/" className="notify">
                          <Notify/>
                        </Link>

                        <Link to="/" className="account">
                          <Account/>
                        </Link>
                      </div>
        </div>
      )}
    </div>
  );
};

export default Hamburger;