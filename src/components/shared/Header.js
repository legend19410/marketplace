import React,{useContext, useState} from 'react'

import styles from './styles/Header.module.css'

import Nav from './Nav';
import Cart from './Cart';
import Search from './Search';
import Login from './Login';
import { Context } from '../../context_store/ContextAPI';
import Registration from '../registration/Registration';
import Search2 from './Search2';
import Cookies from 'js-cookie'
import Logo from './Logo';
import DropDown from './DropDown';


function Header() {

  const {user, setUser} = useContext(Context).user
  const {isAuth, setIsAuth} = useContext(Context).auth

    const initialState = {
        loginForm: false,
        searchForm: false,
        shoppingCart: false,
        navBar: false,
        signUpForm: false,
        dropDown: false
    }
   const [active, setActive] = useState({...initialState})

   const logout = ()=>{
        Cookies.remove('accessToken')
        Cookies.remove('refreshToken')
        setIsAuth(false)
        setUser({})
   }

   const show = (event) => {
       if((event.target.dataset.name === 'loginForm') && isAuth){
           logout()
           return
       }
        const newState = {...initialState}
        if(active[event.target.dataset.name] === true){
            // newState[event.target.dataset.name] = false
        }else{
            newState[event.target.dataset.name] = true
        }
        setActive(newState)
   }

   const hide = ()=>{
       setActive({...initialState})
   }

  return (
        
        <header className={styles.header}>
            <Registration active={active} hide={hide}/>
            <DropDown show={show} active={active} setActive={setActive}/>
            <Logo/>

            <Nav active={active}/>

            <div className={styles.user}>{user.firstName?(<span className={`${styles.userIcon} fas fa-user`}></span>):""} {user.firstName} {user.lastName}</div>

            <div className={styles.icons}>
                <div  onClick={e=>show(e)} data-name="dropDown" className={`${styles.display} fas fa-bars`}></div>
                <div  onClick={e=>show(e)}  data-name="searchForm" className={`${styles.search} fas fa-search`}></div>
                <div  onClick={e=>show(e)} data-name="shoppingCart" className={`${styles.cart} fas fa-shopping-cart`}></div>
                <div onClick={e=>show(e)} data-name="loginForm" className={`${styles.inline} ${styles.login}`}> {isAuth?'Logout':'Login'}</div>
                <div onClick={e=>show(e)} data-name="signUpForm" className={`${styles.inline} ${styles.signup}`}> Signup</div>
            </div>

            {/* <Search active={active}/> */}
            <Search2 active={active} hide={hide}/>
            <Cart hide={hide} active={active}/>
            <Login hide={hide} active={active} show={show}/>

</header>

  )
}

export default Header