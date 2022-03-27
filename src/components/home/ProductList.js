import React from 'react'
import styles from './styles/ProductList.module.css'

import Card from './Card'


function ProductList({products, heading}) {

  return (
    <section className={styles.productList} id='popularProducts'>

    <h1 className="heading"> {heading}</h1>

    <div className={styles.productContainer}>

        {
            products.map((product)=>(
                <Card key={product.id} product={product}/>
            ))
        }

    </div>

</section>

  )
}

export default ProductList