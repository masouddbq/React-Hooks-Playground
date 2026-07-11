import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Projects = () => {

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
      <div className="grid grid-cols-2 lg:grid-cols-3 justify-center p-10  text-center mt-2 gap-1 w-auto">
        {projects.map((item) => (

          <Link to={item.href}>
            <Button>{item.title}</Button>
          </Link>
      ))}
      </div>
    </div>
  );
};

export default Projects;
