import React, {useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import { Context } from '../../context_store/ContextAPI'
import { request } from '../../util/APICall'

function UserHome() {

    const {id} = useParams()

    const [user, setUser] = useContext(Context).user

    useEffect(() => {
            request("GET", `user/${id}`, {}, {})
            .then(res=>console.log(res.data))
            .catch(error=>console.log(error))
    }, [])
    
  return (
    <div>

    </div>
  )
}

export default UserHome