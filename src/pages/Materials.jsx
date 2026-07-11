import React , { Activity, useState } from 'react'
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Materials = () => {

  const [isLoading, setIsLoading] = useState(false);
  const materials = [
    {title : 'Clean-up' , href : '/materials/cleanup'},
    {title : 'PrivateRoute' , href : '/materials/privateRoute'},
    {title : 'ScrollRestoration' , href : '/materials/ScrollRestore'},
    {title : 'Activity' , href : '/materials/Activity'},
  ]

  return (
    <div className='flex justify-center w-full'>
    <div className="grid grid-cols-3 text-center mt-2 p-10 gap-2">
        {materials.map((item) => (
          <Link to={item.href}>
          <Button>{item.title}</Button>
        </Link>
        ))}
        <Activity mode={isLoading ? 'visible' : 'hidden'}>
          Loading...
        </Activity>
    </div>
    </div>
  )
}

export default Materials