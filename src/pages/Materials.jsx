import React , { Activity, useState } from 'react'
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Materials = () => {

  const [isLoading, setIsLoading] = useState(false);
  const materials = [
    {title : 'Clean-up' , href : '/materials/cleanup'},
    {title : 'PrivateRoute' , href : '/materials/privateRoute'},
    {title : 'ScrollRestoration' , href : '/materials/ScrollRestore'},
  ]

  return (
    <div className="flex justify-center text-center mt-2 gap-2 shadow-md h-[86vh] w-auto">
        {materials.map((item) => (
          <Link to={item.href}>
          <Button>{item.title}</Button>
        </Link>
        ))}
        <Activity mode={isLoading ? 'visible' : 'hidden'}>
          Loading...
        </Activity>
    </div>
  )
}

export default Materials