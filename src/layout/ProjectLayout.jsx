import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link , useNavigate } from "react-router-dom";
import Button from "../components/Button";

const ProjectLayout = ({ children , text }) => {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/projects', { state: { from: "payment" } }); // ← داخل handler
      };

  return (
    <div className="flex-col md:grid md:grid-cols-2 justify-around items-center">
      <div className="flex-col text-xs md:text-lg mx-10 items-center justify-center">
        <button
          onClick={handleBack}
          className="flex gap-x-10 items-center text-indigo-700 p-2 rounded-lg"
          to="/projects"
        >
          <FaArrowLeft className="scale-150 cursor-pointer" />
          <Button>Back to Projects</Button>
        </button>
          <p className="font-bold bg-gradient-to-l from-blue-800 to-indigo-600 text-white p-4 rounded-3xl ">{text}</p>
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default ProjectLayout;
