import React from 'react'
import { useContext } from 'react'
import { toast } from 'react-toastify'
import { Context } from '../../context_store/ContextAPI'
import { request } from '../../util/APICall'
import styles from './styles/Product.module.css'

function Product({product}) {

  const {user, setUser} = useContext(Context).user

  const addToCart = () =>{
    request('GET', `cart/add-to-cart?user=${user.id}&product=${product.id}&quantity=1`, {}, {})
    .then(response=>setUser(response.data))
    .catch(error=>toast.error("Could not add item to cart. Please login", {position: toast.POSITION.TOP_CENTER}))
}

  return (
    <div  className={styles.product}>
        
        <div className={styles.imageContainer}>
                 <img className={styles.productImg} src={`image/${product.image}`} alt=''/>
        </div>
       
        <div className={styles.productDetails}>
                <h1 className={styles.productName}>{product.name}</h1>
                <p className={styles.available}>5 lbs in stock</p>
                <p className={styles.price}>${product.price}</p>
                <p className={styles.description}>
                        Syrup is a condiment that is a thick, viscous liquid consisting 
                        primarily of a solution of sugar in water, containing a large amount of dissolved sugars but showing little tendency to deposit crystals.
                </p>
                <button onClick={()=>addToCart()} className={styles.addCart}>Add To Cart</button>
        </div>

    </div>
  )
}

export default Product