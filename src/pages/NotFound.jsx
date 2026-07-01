import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const NotFound = () => {

    const [redirect , setRedirect] = useState(false)

    useEffect(() => {
        let timer = setTimeout(() => {
            setRedirect(true)
        }, 3000);


        return () => {
            clearTimeout(timer)
        };
    }, []);

    if(redirect) {
        return <Navigate to={'/'} />
    }

  return (
    <div className='flex justify-center items-center'>
        <div className='flex-col shadow-md shadow-indigo-100 text-center mt-40 border-x-4 border-y-2 p-4 border-r-red-600 border-l-indigo-800'>
            <p className='text-red-600 font-bold text-6xl'>404 NOT FOUND</p>
            <h1 className='text-indigo-800 font-extrabold text-3xl'>This page is Not Found... sorry!</h1>
        </div>
    </div>
  )
}

export default NotFound