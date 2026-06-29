import React from "react";
import { Link , useLocation } from "react-router-dom";
import Button from "../components/Button";

const Projects = () => {
    const location = useLocation()

  return (
    <div className="flex justify-center">

    <div className="flex-col justify-center text-center mt-2 gap-2 shadow-md w-auto">
      <Link to="/projects/payment">
        <Button>Bank Card Payment</Button>
      </Link>
    </div>
    </div>
  );
};

export default Projects;
