import axios from 'axios'
import React, {useLayoutEffect, useState} from 'react'
import { toast } from 'react-toastify'
import Product from './Product'
// import './styles/Categories.css';
import styles from './styles/Categories.module.css'

function Categories() {

    const [categoryProducts, setCategoryProducts] = useState([
      // {id: 1, name:"Banana", image:"dish-1.png", price:13.99},
      // {id: 2, name:"Banana", image:"dish-2.png", price:13.99},
      // {id: 3, name:"Banana", image:"dish-3.png", price:13.99},
      // {id: 4, name:"Banana", image:"dish-4.png", price:13.99},
      // {id: 5, name:"Banana", image:"dish-5.png", price:13.99},
      // {id: 6, name:"Banana", image:"dish-6.png", price:13.99},
      // {id: 5, name:"Banana", image:"dish-5.png", price:13.99},
      // {id: 5, name:"Banana", image:"dish-5.png", price:13.99}
    ])

    // const [categories, setCategories] = useState([
    //       {id: 1, category: "Fruit", image:"dish-1.png", items:19},
    //       {id: 2, category: "Vegetables", image:"dish-2.png", items:23},
    //       {id: 3, category: "Snacks", image:"dish-3.png", items:45},
    //       {id: 4, category: "Meat", image:"dish-4.png", items:35},
    //       {id: 5, category: "Seasoning", image:"dish-5.png", items:65},
    //       {id: 6, category: "Staples", image:"dish-6.png", items:33},
    //       {id: 7, category: "Detergent", image:"dish-3.png", items:25}
    // ])

    const [selectedCategory, setSelectedCategory] = useState(0)

    const [categories, setCategories] = useState([])

    // const [categoryProducts, setCategoryProducts] = useState([])

    useLayoutEffect(()=>{
          axios.get('category/')
          .then(response=>{
                setCategories(response.data) 
                setSelectedCategory(1)        
          })
          .catch(error=>{

                  toast.error(error)
          })
    },[])

    useLayoutEffect(()=>{
        if (selectedCategory === 0) return
        axios.get(`category/products/${selectedCategory}`)
        .then(response=>setCategoryProducts(response.data))
        .catch(error=>toast.error('An error has occur while try to get products'))
    }, [selectedCategory])

  return (
        <div className={styles.categories}>
                <div className={styles.categoryList}>
                        <div className={styles.catBox}>
                              <h1 className={styles.catHeading}>Categories</h1>
                              <div className={styles.items}>
                                        {
                                            categories.map(category=>(
                                                <div onClick={()=>setSelectedCategory(category.id)} className={styles.details} key={category.id}>
                                                        <img className={styles.img} src={`image/${category.image}`} alt=""/>
                                                        <p className={styles.name}>{category.name}</p>
                                                        <p className={styles.number}>{category.products.length}</p>
                                                </div>
                                            ))
                                        }
                              </div>
                        </div>
                </div>

                <div className={styles.products}>
                      {
                        categoryProducts.map(product=>(
                          <Product key={product.id} product={product} />
                        ))
                      }
                        
                </div>
        </div>
  )
}

export default Categories