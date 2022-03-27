import Cookies from 'js-cookie'
import {request} from './APICall'


export const isAuthenticated = () => {
    return new Promise((resolve, reject)=>{
        request('GET', 'api/is-authenticated', {}, {})
        .then(res=>resolve(res))
        .catch(err=>reject(err))
    })
}

export const logout = () => {
    Cookies.remove('accessToken')
    Cookies.remove('refreshToken')
}
