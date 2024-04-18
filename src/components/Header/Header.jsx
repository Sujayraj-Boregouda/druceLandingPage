import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from "../Logo/Logo"
import Account from '../Icons/Account'
import Notify from '../Icons/Notify'
import Hamburger from '../Hamburger/Hamburger'


export default function Header() {
  

  return (
    <>
      <header className="header white-bg hide-on-tab">
        <nav className="header-nav">
            <div className='header-logo'>
              <Link to="/" className="logo">
                  <Logo />
              </Link>
            </div>

            <div className="header-menu">
                          <ul>
                              <li>
                                  <NavLink
                                  to="/"
                                      className={({isActive}) =>
                                        `${isActive ? "secondary" : "primary-text-black"}`
                                      }
                                  >
                                      <span className='secondary-fs'>Home</span>
                                      <span className='icon'>
                                        <svg width="10" height="10" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1.47108 0.527293C1.21073 0.266944 0.788619 0.266944 0.52827 0.527293C0.26792 0.787643 0.267921 1.20975 0.52827 1.4701L4.52827 5.4701C4.78862 5.73045 5.21073 5.73045 5.47108 5.4701L9.47108 1.4701C9.73143 1.20975 9.73143 0.787641 9.47108 0.527292C9.21073 0.266942 8.78862 0.266942 8.52827 0.527292L4.99967 4.05589L1.47108 0.527293Z" fill="#212121"/>
                                        </svg>
                                      </span>
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
                                      <span className='icon'>
                                        <svg width="10" height="10" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1.47108 0.527293C1.21073 0.266944 0.788619 0.266944 0.52827 0.527293C0.26792 0.787643 0.267921 1.20975 0.52827 1.4701L4.52827 5.4701C4.78862 5.73045 5.21073 5.73045 5.47108 5.4701L9.47108 1.4701C9.73143 1.20975 9.73143 0.787641 9.47108 0.527292C9.21073 0.266942 8.78862 0.266942 8.52827 0.527292L4.99967 4.05589L1.47108 0.527293Z" fill="#212121"/>
                                        </svg>
                                      </span>
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
                                      <span className='icon'>
                                        <svg width="10" height="10" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1.47108 0.527293C1.21073 0.266944 0.788619 0.266944 0.52827 0.527293C0.26792 0.787643 0.267921 1.20975 0.52827 1.4701L4.52827 5.4701C4.78862 5.73045 5.21073 5.73045 5.47108 5.4701L9.47108 1.4701C9.73143 1.20975 9.73143 0.787641 9.47108 0.527292C9.21073 0.266942 8.78862 0.266942 8.52827 0.527292L4.99967 4.05589L1.47108 0.527293Z" fill="#212121"/>
                                        </svg>
                                      </span>
                                  </NavLink>
                              </li>
                          </ul>
            </div>

            <div className='header-icons'>
              <Link to="/" className="notify">
                 <Notify/>
              </Link>

              <Link to="/" className="account">
                 <Account/>
              </Link>
            </div>
        </nav>
      </header>
      
      <header className='hide-on-desktop'>
        <Hamburger />
      </header>
    </>
  )
}