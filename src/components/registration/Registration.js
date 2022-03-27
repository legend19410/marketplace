import React, { useState } from 'react'
import axios from 'axios'
import styles from './styles/Registration.module.css'
import { toast } from 'react-toastify'

function Registration({active, hide}) {

  const [accountData, setAccountData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    passwordConfirmation:"",
  })

  const updateData = (event)=>{
    const newData = {...accountData}
    newData[event.target.dataset.name] = event.target.value
    setAccountData(newData)
    console.log(newData)
  }

  const submit = (event)=>{
    event.preventDefault()
    if(accountData.password == accountData.passwordConfirmation){
      let data = {...accountData}
      delete data.passwordConfirmation
      axios.post('user/save', data)
      .then((response)=>{
            toast.success('Your account was successfully created. You may now login')
     }).catch(error=>toast.error('There was an error while creating you accont'))
    }
    else{
      toast.error('Your password must match the confirmed password')
    }
   
  }

  return (
    <div className={`${styles.registration} ${active.signUpForm?styles.active:''}`}>
        <form action="" className={styles.form}>
                <i  onClick={()=>hide()}  className={`${styles.exit} fas fa-times`}></i>
                <h3 className={styles.header}>Sign Up</h3>
                <div className={styles.formField}>
                        <label>First Name:</label>
                        <input 
                                type='text'
                                onChange={(e)=>updateData(e)} 
                                data-name="firstName" 
                                value={accountData.firstName}
                          />
                </div>
                <div className={styles.formField}>
                        <label>Last Name:</label>
                        <input 
                                type='text'
                                onChange={(e)=>updateData(e)} 
                                data-name="lastName" 
                                value={accountData.lastName}
                          />
                </div>
                <div className={styles.formField}>
                        <label>Email:</label>
                        <input 
                                type='email'
                                onChange={(e)=>updateData(e)} 
                                data-name="email" 
                                value={accountData.email}
                          />
                </div>
                <div className={styles.formField}>
                        <label>Password:</label>
                        <input 
                                type='password'
                                onChange={(e)=>updateData(e)} 
                                data-name="password" 
                                value={accountData.password}
                          />
                </div>
                <div className={styles.formField}>
                        <label>Confirm Password:</label>
                        <input 
                                type='password'
                                onChange={(e)=>updateData(e)} 
                                data-name="passwordConfirmation" 
                                value={accountData.passwordConfirmation}
                          />
                </div>
                <div className={`${styles.formField} ${styles.buttonGroup}`}>
                        <button onClick={e=>submit(e)} className='btn'>Submit</button>
                        <p onClick={()=>hide()} className='btn'>Cancel</p>
                </div>
            </form>
    </div>
  )
}

export default Registration