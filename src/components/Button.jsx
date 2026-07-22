import React from 'react'

const Button = ({children , onClick}) => {
  return (
    <div onClick={onClick} className='text-xs text-indigo-700 font-bold block py-2 rounded-lg transition hover:scale-105 cursor-pointer'>
        {children}
    </div>
  )
}

export default Button