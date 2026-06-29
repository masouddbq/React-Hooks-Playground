import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const ProjectLayout = ({ children }) => {
  return (
    <div className="flex justify-around items-center">
      <Link className="flex gap-x-10 items-center text-indigo-700 p-2 rounded-lg" to="/projects">
        <FaArrowLeft className="scale-150 cursor-pointer" />
        <Button>Back to Projects </Button>
      </Link>
      {children}
    </div>
  );
};

export default ProjectLayout;
