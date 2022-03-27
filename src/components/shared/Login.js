import React,{useContext, useState} from 'react'
import querystring from 'querystring'
import axios from 'axios'
import Cookies from 'js-cookie'
import {toast} from 'react-toastify'

import styles from './styles/Login.module.css'
import { request } from '../../util/APICall'
import { Context } from '../../context_store/ContextAPI'
import { NavLink } from 'react-router-dom'


function Login({hide, active, show}) {

  const setIsAuth = useContext(Context).auth.setIsAuth
  const setUser = useContext(Context).user.setUser

  const [credentials, setCredentials] = useState({
    username:"",
    password:""
  })

  const updateCredentials = (event)=>{
    const newData = {...credentials}
    newData[event.target.dataset.name] = event.target.value
    setCredentials(newData)
    console.log(newData)
  }

  const authenticate = (event)=>{
    event.preventDefault()
    axios.post('user/login',querystring.stringify(credentials))
    .then((response)=>{
            const {accessToken, refreshToken} = response.data
            Cookies.set("accessToken",accessToken)
            Cookies.set("refreshToken",refreshToken)
            return request("GET", 'user/user', {}, {})
   })
   .then(response=>{
          setIsAuth(true)
          setUser(response.data)
          console.log(response.data)
          toast.success(`Welcome ${response.data.firstName}! You have successfully logged in`,{position:toast.POSITION.TOP_CENTER})
          hide()
        })
   .catch(error=>{
    toast.error('Incorrect Credentials Provided',{position:toast.POSITION.TOP_CENTER})
   })
  }

  return (
    <form
            action="" 
            className={`${styles.loginForm} ${active.loginForm?styles.active:''}`}>
                <i onClick={()=>{hide()}} className={`${styles.exit} fas fa-times`}></i>
            <h3>login now</h3>
            <input 
                    onChange={(e)=>updateCredentials(e)} 
                    data-name="username" 
                    type="email" 
                    placeholder="your email"
                    value={credentials.username} 
                    className={styles.formField}
              />

            <input 
                    onChange={(e)=>updateCredentials(e)} 
                    data-name="password" 
                    type="password" 
                    placeholder="your password" 
                    value={credentials.password}
                    className={styles.formField}
              />
            <p>don't have an account <a href='#' onClick={e=>show(e)} data-name="signUpForm">create now</a></p>
            <input onClick={(e)=>authenticate(e)} type="submit" value="login now" className='btn'/>
    </form>
  )
}

export default Login