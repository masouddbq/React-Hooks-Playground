import React from 'react'
import Counter from '../components/Counter'
import FetchApi from '../components/FetchApi'
import UseEffectFetch from '../components/UseEffectFetch'


const HomePage = () => {
  return (
    <div className='flex justify-center gap-4'>
        <Counter />
        <FetchApi />
        <UseEffectFetch />
    </div>
  )
}

export default HomePage