import axios from 'axios'
import Cookies from 'js-cookie'

export const request = (type, route, params={}, headers={})=>{
 return new Promise((resolve, reject) => {
    const header = {
        headers: { ...headers,
            Authorization: 'Bearer '+Cookies.get('accessToken')
        }
    }
    if (type === 'GET'){
        axios.get(route,header)
        .then((response)=>{
            resolve(response)

        }).catch((error)=>{ 
            if((error.response.status === 401) &&(error.response.data.message === "expired")){
                if(refrestMyToken().success){
                    request(type, route, headers)
                }
            }
            reject(error)
            
        })
    }
    if (type === 'POST'){
           
             axios.post(route,params,header)
             .then((response)=>{
                resolve(response)

            }).catch((error)=>{ 
                if((error.response.status === 401) &&(error.response.data.message === "expired")){
                    if(refrestMyToken().success){
                        request(type, route, headers)
                    }
                }
                reject(error)
        })
    }
    if (type === 'PATCH'){
           
             axios.patch(route,params,header)
             .then((response)=>{
                resolve(response)

            }).catch((error)=>{ 
                if((error.response.status === 401) &&(error.response.data.message === "expired")){
                    if(refrestMyToken().success){
                        request(type, route, headers)
                    }
                }
                reject(error)
        })
    }
 })    
}

const refrestMyToken = ()=>{
    const refreshToken = Cookies.get('refreshToken')
    const response = {}
    if (refreshToken){
        const headers = {
            headers: { 
                Authorization: 'Bearer '+refreshToken
            }
        }
        axios.get('api/officer/refresh-token',headers)
        .then((res)=>{
            response['success'] = res.data.accessToken ? true: false
        }).catch((e)=>{
            response['success'] = false
        })
    }else{
        response['success'] = false
    }
    return response
    
}