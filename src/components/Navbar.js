import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import SearchBar from './SearchBar';

function Navbar() {
  return (
    <div className="navbar">
        <div className='logo'>
            <NavLink to="/home" className="first-link">
            Logo
            </NavLink>
        </div>
        <div className='search-bar'>
                <SearchBar/>
        </div>
    </div>
  )
}

export default Navbar
