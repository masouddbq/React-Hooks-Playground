import React from 'react'

const Button = ({children , onClick}) => {
  return (
    <div onClick={onClick} className='text-sm text-indigo-700 font-bold block shadow-sm py-2 rounded-lg transition hover:scale-105 cursor-pointer'>
        {children}
    </div>
  )
}

export default Button