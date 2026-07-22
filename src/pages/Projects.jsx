import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { RiExpandLeftRightFill } from "react-icons/ri";

const Projects = () => {
  const [isListShow, setIsListShow] = useState(true);

  const projects = [
    { title: "Bank Card Payment", href: "/projects/payment" },
    { title: "useParams v.s useLocation", href: "/projects/RouteParams" },
    { title: "Counter", href: "/projects/counter" },
    { title: "FetchApi", href: "/projects/fetchApi" },
    { title: "useEffectFetch", href: "/projects/uEffectFetch" },
    { title: "Form(UseReducer)", href: "/projects/form" },
  ];

  return (
    <div className="flex justify-center">
      <div
        className={
          isListShow
            ? `fixed transition-all -left-8 top-4 grid grid-cols-1 lg:grid-cols-3 justify-center p-10  text-center mt-2 gap-1 w-auto`
            : `fixed transition-all -left-[205px] top-4 grid grid-cols-1 lg:grid-cols-3 justify-center p-10  text-center mt-2 gap-1 w-auto`
        }
      >
        {projects.map((item) => (
          <Link to={item.href}>
            <Button>{item.title}</Button>
          </Link>
        ))}
        <div>
          <RiExpandLeftRightFill
            onClick={() => setIsListShow((prev) => !prev)}
            className={
              isListShow
                ? "absolute md:hidden opacity-50 border-[1px] border-l-0 border-indigo-700 rounded-lg cursor-pointer text-indigo-800 text-2xl right-0 top-1/2"
                : "absolute md:hidden bg-white/80 border-[1px] animate-bounce border-indigo-300 border-l-0 opacity-85 rounded-l-none rounded-lg cursor-pointer text-indigo-600 text-2xl right-0 top-1/2"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
