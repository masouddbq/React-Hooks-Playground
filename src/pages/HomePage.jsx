import React from 'react'
import Counter from '../components/Counter'
import FetchApi from '../components/FetchApi'
import UseEffectFetch from '../components/UseEffectFetch'
import RouteParams from '../components/RouteParams'


const HomePage = () => {
  return (
    <div className='flex justify-center gap-4'>
        <Counter />
        <FetchApi />
        <UseEffectFetch />
        <RouteParams />
    </div>
  )
}

export default HomePage