//external libraries
import React, {useState, useEffect} from 'react'
import axios from 'axios'
//stylesheets
import styles from './styles/Home.module.css';

//components
import ProductList from './ProductList';
import SpecialOffer from './SpecialOffer';
import Banner from './Banner';
import Reviews from './Reviews';
import About from './About';



function Home() {

  const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get( '/products/')
            .then(res=>setProducts(res.data))
            .catch(error=>console.log(error))
    }, [])

  return (

    <div className={styles.home}>
              <Banner/>
              <About/>
              {/* <SpecialOffer/> */}
              {/* <Feature/> */}
               <ProductList products={products} heading={'Popular Products'}/>
               <Reviews/>
    </div>

   

  )
}

export default Home