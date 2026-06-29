import React from 'react'
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Materials = () => {
  return (
    <div className="flex justify-center text-center mt-2 gap-2 shadow-md h-[86vh] w-auto">
      <Link to="/materials/cleanup">
        <Button>Clean-up</Button>
      </Link>
    </div>
  )
}

export default Materials