import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import ProductList from '../home/ProductList'
import styles from './styles/Search2.module.css'

function Search2({active, hide}) {

    const [query, setQuery] = useState('')
    const [products, setProducts] = useState([])

    useEffect(()=>{

        axios.get('products/search?query='+query.trim())
        .then(response=>{
            setProducts(response.data)
        })
        .catch(error=>{
          toast.error('There was an error while searching for products')
        })
    
    },[query])

    
  return (
    <div className={`${styles.search} ${active.searchForm?styles.active:''}`}> 
            <div className={styles.searchHeader}>
            <i onClick={()=>{hide()}} className={`${styles.exit} fas fa-times`}></i>
                <form action="" className={styles.searchForm}>
                        <input 
                                type="search"  
                                placeholder="search here..."
                                value={query}
                                onChange={e=>setQuery(e.target.value)}
                        />
                        <label  className="fas fa-search"></label>
                </form>
            </div>
            <div className={styles.searchBody}>
                     <ProductList products={products} heading={'Search Results'}/>
            </div>
    </div>
  )
}

export default Search2