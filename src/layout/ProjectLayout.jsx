import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const ProjectLayout = ({ children , text }) => {
  return (
    <div className="flex justify-around items-center">
      <div className="flex-col items-center justify-center">
        <Link
          className="flex gap-x-10 items-center text-indigo-700 p-2 rounded-lg"
          to="/projects"
        >
          <FaArrowLeft className="scale-150 cursor-pointer" />
          <Button>Back to Projects</Button>
        </Link>
          <p className="font-bold bg-gradient-to-l from-indigo-950 to-indigo-700 text-white p-4 rounded-3xl ">{text}</p>
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default ProjectLayout;
