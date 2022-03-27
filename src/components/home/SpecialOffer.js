import React, { useState, useEffect } from 'react'
import styles from './styles/SpecialOffer.module.css'
import axios from 'axios'

function SpecialOffer() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get( '/products/')
            .then(res=>setProducts(res.data))
            .catch(error=>console.log(error))
    }, [])


  return (
        <section className={styles.specialOffer} id="blogs">

            <h1 className="heading"> Special <span>Offers</span> </h1>

            <div className={styles.boxContainer}>

                <div className={styles.box}>
                    <img src="image/blog-1.jpg" alt=""/>
                    <div className={styles.content}>
                    <div className={styles.icons}>
                            <a href="#"> Offer ends: </a>
                            <a href="#"> <i className="fas fa-calendar"></i> 1st may, 2021 </a>
                        </div>
                        <h3 className={styles.offer}>green basket</h3>
                        <div className={styles.products}>
                            {
                                  products.map(product=>(
                                    <div key={product.id} className={styles.product}>
                                        <div>5</div><div>{product.unit}</div><div> {product.name} </div><div>$100.00</div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={styles.addBtnContainer}>
                                    <a href="#" className={`${styles.addAll} btn`}>Add All to cart</a>
                        </div>
                    </div>

                    
                </div>

                <div className={styles.box}>
                    <img src="image/blog-1.jpg" alt=""/>
                    <div className={styles.content}>
                    <div className={styles.icons}>
                            <a href="#"> Offer ends: </a>
                            <a href="#"> <i className="fas fa-calendar"></i> 1st may, 2021 </a>
                        </div>
                        <h3 className={styles.offer}>green basket</h3>
                        <div className={styles.products}>
                            {
                                  products.map(product=>(
                                    <div key={product.id} className={styles.product}>
                                        <div>5</div><div>{product.unit}</div><div> {product.name} </div><div>$100.00</div>
                                    </div>
                                ))
                            }
                        </div>
                        <a href="#" className={`${styles.addAll} btn`}>read more</a>
                    </div>

                    
                </div>

                <div className={styles.box}>
                    <img src="image/blog-1.jpg" alt=""/>
                    <div className={styles.content}>
                        <div className={styles.icons}>
                            <a href="#"> Offer ends: </a>
                            <a href="#"> <i className="fas fa-calendar"></i> 1st may, 2021 </a>
                        </div>
                        <h3 className={styles.offer}>green basket</h3>
                        <div className={styles.products}>
                            {
                                  products.map(product=>(
                                    <div key={product.id} className={styles.product}>
                                        <div>5</div><div>{product.unit}</div><div> {product.name} </div><div>$100.00</div>
                                    </div>
                                ))
                            }
                        </div>
                        <a href="#" className={`${styles.addAll} btn`}>read more</a>
                    </div>

                    
                </div>

                
{/* 
                <div className="box">
                    <img src="image/blog-2.jpg" alt=""/>
                    <div className="content">
                        <div className="icons">
                            <a href="#"> <i className="fas fa-user"></i> by user </a>
                            <a href="#"> <i className="fas fa-calendar"></i> 1st may, 2021 </a>
                        </div>
                        <h3>fresh and organic vegitables and fruits</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, expedita.</p>
                        <a href="#" className="btn">read more</a>
                    </div>
                </div>

                <div className="box">
                    <img src="image/blog-3.jpg" alt=""/>
                    <div className="content">
                        <div className="icons">
                            <a href="#"> <i className="fas fa-user"></i> by user </a>
                            <a href="#"> <i className="fas fa-calendar"></i> 1st may, 2021 </a>
                        </div>
                        <h3>fresh and organic vegitables and fruits</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, expedita.</p>
                        <a href="#" className="btn">read more</a>
                    </div>
                </div> */}

            </div>

        </section>

  )
}

export default SpecialOffer