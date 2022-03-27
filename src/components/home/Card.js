import React, { useContext } from 'react'
import { toast } from 'react-toastify'

import styles from './styles/Card.module.css'

import Stars from '../shared/Stars'
import { request } from '../../util/APICall'
import { Context } from '../../context_store/ContextAPI'


function Card({product}) {
  const {user, setUser} = useContext(Context).user

  

  const addToCart = (event) =>{
      request('GET', `cart/add-to-cart?user=${user.id}&product=${product.id}&quantity=1`, {}, {})
      .then(response=>{
        setUser(response.data)
        toast.success("Item added to your cart",{position: toast.POSITION.TOP_CENTER})
      })
      .catch(error=>toast.error("Could not add item to cart. Please login",{position: toast.POSITION.TOP_CENTER}))
  }

  return (
        <div  data-id={product.id} className={styles.card}>
                <img className={styles.img} src={`image/${product.image}`}  alt=""/>
                <h3>{product.name}</h3>
                <p>
                  {
                    (product.quantity !== 0)?(<i className="fa fa-check-circle"  style={{color: 'green'}}></i>):(<i className="fas fa-exclamation-circle" style={{color: 'red'}}></i>)
                  } 
                    {product.quantity} {product.unit}s in stock
                  </p>
                <span>${product.price}</span>
                <button onClick={e=>addToCart(e)} href="#" className="addCartBtn"><i className="fa fa-cart-arrow-down"></i>   add to cart</button>
                <Stars productId={product.id} userId={user.id?user.id:0}/>
    </div>
  )
}

export default Card