import React from 'react'
import styles from './styles/Logo.module.css'

function Logo({fontSize}) {
  return (
    <a href="#" className={styles.logo} style={{fontSize: fontSize}}> <i className="fa fa-warehouse"></i> market<span>PLACE</span></a>
  )
}

export default Logo