import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles/DropDown.module.css'

function DropDown({show, active, setActive}) {

    const dropDown = useRef()

    const remove = (ev)=>{            
            if (!dropDown.current.contains(ev.target)) {
            //   dropDown.current.style.display = "none"
            setActive({...active, dropDown:false})
            }
            
            
    }

    // const display = (ev)=>{
    //     if(ev.target.id === 'mobile'){
    //         refMobile.current.style.display = 'initial'
    //         return
    //     }
    //     ev.target.firstElementChild.style.display = "initial"
    // }

    useEffect(()=>{
            document.addEventListener('click',  remove, true)
    },[])

  return (
    <div ref={dropDown} className={`${styles.dropDown} ${active.dropDown?styles.active:''}`}>
            <div ><NavLink to='/'>Home</NavLink></div>
            <div><NavLink to='/categories'>Categories</NavLink></div>
            <div><NavLink to='/about'>About</NavLink></div>
            <div onClick={e=>show(e)} data-name='searchForm'>Search</div>
            <div onClick={e=>show(e)} data-name='shoppingCart'>Cart</div>
            <div onClick={e=>show(e)} data-name='signUpForm'>Signup</div>
            <div onClick={e=>show(e)} data-name='loginForm'>Login</div>
    </div>
  )
}

export default DropDown