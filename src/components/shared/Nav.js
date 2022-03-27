import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './styles/Nav.module.css'

function Nav({active}) {
  return (
        <nav
                className={`${styles.navBar} ${active.navBar?styles.active:''}`}
        >
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/categories'>Categories</NavLink>
            <NavLink to='/about'>About</NavLink>
        </nav>
  )
}

export default Nav