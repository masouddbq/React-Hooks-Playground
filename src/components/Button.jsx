import React from 'react'

const Button = ({children}) => {
  return (
    <div className='text-indigo-700 font-bold shadow-lg border-indigo-500 border-2  p-2 rounded-lg transition hover:scale-105'>
        {children}
    </div>
  )
}

export default Button