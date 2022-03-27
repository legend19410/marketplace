import React from 'react'
import styles from './styles/Search.module.css'

function Search({active}) {
  return (
    <form    
                action=""
                className={`${styles.searchForm} ${active.searchForm?styles.active:''}`}
            >
                    <input type="search" id="search-box" placeholder="search here..."/>
                    <label htmlFor="search-box" className="fas fa-search"></label>
    </form>
  )
}

export default Search