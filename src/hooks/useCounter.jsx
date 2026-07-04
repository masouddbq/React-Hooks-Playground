import React, { useState ,useEffect } from 'react'

const useCounter = (value = Number(localStorage.getItem('number'))) => {
    const [count , setCount] = useState(value)

        
        const increase = () => {
            setCount(count + 1)
        }
        const decrease = () => {
            setCount(count - 1)
        }
        
        useEffect(() => {
            localStorage.setItem('number' , count)
        }, [count]);

        return {count , increase , decrease}
}

export default useCounter