import React, { useState, useContext, useLayoutEffect } from 'react'
import { toast } from 'react-toastify'
import { Context } from '../../context_store/ContextAPI'
import { request } from '../../util/APICall'


import styles from './styles/Cart.module.css'

function Cart({hide, active}) {

    const {user, setUser} = useContext(Context).user
    const [cart, setCart] = useState([])
    

    const computeTotal = ()=>{
        let totalCost = 0
            if(cart.length > 0){
                cart.forEach(item=>{
                    totalCost+=item.product.price*item.quantity
                })
            }   
            return totalCost
    }

    const computeTotalItems = ()=>{
        let totalItems = 0
            if(cart.length > 0){
                cart.forEach(item=>{
                    totalItems+=item.quantity
                })
            }   
            return totalItems
    }
  
    const deleteItem = (event)=>{
        request('GET', `cart/delete?user=${user.id}&product=${event.target.dataset.id}`, {}, {})
        .then(response=>{
            setUser(response.data)
        })
        .catch(error=>toast.error(`${error}`))
    }


    const updateNumberOfItems = (event) => {
        console.log(user.id, " UserID")
        console.log(event.target.dataset.id, " productID")
        console.log(event.target.value, " value")
        request('PATCH', `cart/${user.id}/${event.target.dataset.id}`, {quantity:parseInt(event.target.value)})
        .then(response=>{
            setUser(response.data)
        })
        .catch(error=>toast.error(`${error}`))
    }
  

    useLayoutEffect(()=>{
        Object.keys(user).length === 0?setCart([]):setCart(user.carts)
        computeTotal()
    },[user])

    
  return (
            <div 
                className={`${styles.shoppingCart} ${active.shoppingCart?styles.active:''}`}
            >
                <i onClick={()=>{hide()}} className={`${styles.exit} fas fa-times`}></i>
                <div className={styles.cartItemContainer}>
                {
                        cart.map((item)=>(
                            <div key={item.product.id}  className={styles.box}>
                                <img src={`image/${item.product.image}`}  className={styles.image} alt=""/>
                                <div className={styles.content}>
                                    <h3>{item.product.name}</h3>
                                    <span className={styles.price}>${item.product.price} X</span>
                                    <input
                                        onChange={e=>updateNumberOfItems(e)} 
                                        type="number" 
                                        data-id={item.product.id}
                                        className={styles.quantity} 
                                        value={item.quantity}/>
                                </div>
                                <div className={styles.trashContainer}>
                                        <i onClick={e=>deleteItem(e)} data-id={item.product.id} className={`${styles.trash} fas fa-trash`}></i>
                                </div>
                        </div>
                        ))
                }
                </div>
                
                <div className={styles.totalContainer}>
                        <div className={styles.total}> total : ${computeTotal()} <i className="fas fa-shopping-basket"></i> {computeTotalItems()}</div>
                        <a href="#" className={`${styles.btn} btn`}>checkout</a>
                </div>
            </div>
  )
}

export default Cart