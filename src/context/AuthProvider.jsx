import React, { useEffect, useState } from 'react'
import AuthContext from './auth'

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);

    useEffect(() => {
        fetch('http://sabzlearn.ir/api', {
            method : 'POST'
        })

        setUser({id : 1 , username : 'Masoud'})

        
    },[])

    const logout = () => {
        fetch('http://sabzlearn.ir/logout')
    }


  return (
    <AuthContext.Provider value={{user , logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider