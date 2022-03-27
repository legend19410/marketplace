import React, {createContext, useState} from 'react'

export const Context = createContext()

export function Provider(props) {

    const [user, setUser] = useState({})
    const [isAuth, setIsAuth] = useState(false)

    return (
        <Context.Provider value={{
            auth: {isAuth, setIsAuth},
            user: {user, setUser}
        }}>
            {props.children}
        </Context.Provider>
    )
}
