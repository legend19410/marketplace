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

  function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}


    useEffect(() => {
        axios.get( '/products/')
            .then(res=>{
              setProducts(getRandom(res.data,12))
            })
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