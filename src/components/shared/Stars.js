import React, {useContext, useLayoutEffect, useState} from 'react'
import { toast } from 'react-toastify'
import { Context } from '../../context_store/ContextAPI'
import { request } from '../../util/APICall'
import styles from './styles/Stars.module.css'

function Stars({productId, userId}) {

    const user = useContext(Context).user.user

    const [value, setValue] = useState(0)
    const [stars, setStars] = useState({
        one: false,
        two: false,
        three: false,
        four: false,
        five: false
    })

    const updateRating = (rating)=>{
        if(rating === 0) setValue(0)
        if(rating === 1) setValue(1)
        if(rating === 2) setValue(2)
        if(rating === 3) setValue(3)
        if(rating === 4) setValue(4)
        if(rating === 5) setValue(5)

        console.log('User= '+userId+' product= '+productId+"rating= "+rating)

        // request('POST','rating/rate-product',{userId:userId, productId:productId, rating:rating })
        request('GET',`rating/rate-product?userId=${userId}&productId=${productId}&rating=${rating}`, {}, {})
        .then(response=>{
            toast.success("Your rating for this product is appreciated")
        })
        .catch(error=>{
            toast.error("your rating was not saved. You should login before you can rate products",{position: toast.POSITION.TOP_CENTER})
        })
    }

    useLayoutEffect(()=>{
        if(userId !== 0){
            request('GET', `rating/${userId}/${productId}`)
            .then(response=>{
                setValue(response.data.rating)
            }).catch(error=>{
                setValue(0)
            })
        }
        
    }, [user])

    useLayoutEffect(()=>{
        if(value === 0) setStars({one:false, two:false, three:false, four:false, five:false})
        if(value === 1) setStars({one:true, two:false, three:false, four:false, five:false})
        if(value === 2) setStars({one:true, two:true, three:false, four:false, five:false})
        if(value === 3) setStars({one:true, two:true, three:true, four:false, five:false})
        if(value === 4) setStars({one:true, two:true, three:true, four:true, five:false})
        if(value === 5) setStars({one:true, two:true, three:true, four:true, five:true})
    },[value])

  return (
        <div className={styles.stars}>
                <i onClick={()=>{updateRating(1)}} className={`${styles.starOne} fas fa-star ${stars.one?styles.set:styles.unset}`} ></i>
                <i onClick={()=>{updateRating(2)}} className={`${styles.starTwo} fas fa-star ${stars.two?styles.set:styles.unset}`} ></i>
                <i onClick={()=>{updateRating(3)}} className={`${styles.starThree} fas fa-star ${stars.three?styles.set:styles.unset}`} ></i>
                <i onClick={()=>{updateRating(4)}} className={`${styles.starFour} fas fa-star ${stars.four?styles.set:styles.unset}`} ></i>
                <i onClick={()=>{updateRating(5)}} className={`${styles.starFive} fas fa-star ${stars.five?styles.set:styles.unset}`} ></i>
        </div>
  )
}

export default Stars