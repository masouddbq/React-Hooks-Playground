import React, { useState , lazy , Suspense , Activity } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { RiExpandLeftRightFill } from "react-icons/ri";

const CardPayment = lazy(() => import("../components/BankCardPayment"));
const Params = lazy(() => import("../components/RouteParams"));
const Counter = lazy(() => import("../components/Counter"));
const FetchApi = lazy(() => import("../components/FetchApi"));
const UseEffectFetch = lazy(() => import("../components/UseEffectFetch"));
const Form = lazy(() => import("../components/FormUseReducer"));


const Projects = () => {
  const [activeKey, setActiveKey] = useState("Bank");
  const [isListShow, setIsListShow] = useState(true);

  const projects = [
    { key: 'Bank' , title: "Bank Card Payment", Component : CardPayment },
    { key: 'useParams' , title: "useParams v.s useLocation", Component : Params },
    { key: 'Counter' , title: "Counter", Component : Counter },
    { key: 'FetchApi' , title: "FetchApi", Component : FetchApi },
    { key: 'useEffectFetch' , title: "useEffectFetch", Component : UseEffectFetch },
    { key: 'Form' , title: "Form(UseReducer)", Component : Form },
  ];

 

  const setActivate = (key) => {
    setActiveKey(key)
    setIsListShow(false);
  }
  const activeProjects = projects.find(
    (item) => item.key === activeKey
  );

  return (
    <div className="flex justify-center items-center w-full">
      <div
        className={
          isListShow
            ? `fixed z-10 border-[1px] md:border-none bg-white/80 shadow-lg md:shadow-none rounded-b-xl transition-all -left-6 md:left-12 top-8 grid grid-cols-1 md:grid-cols-1 justify-center p-10 text-center mt-2 gap-0`
            : `fixed transition-all -left-[205px] top-4 md:left-12  md:top-8 grid grid-cols-1 lg:grid-cols-1 justify-center p-10  text-center mt-2 gap-0 w-auto`
        }
      >
        {projects.map((item) => (
            <Button key={item.key} onClick={() => setActivate(item.key)}>{item.title}</Button>
        ))}
        <div>
          <RiExpandLeftRightFill
            onClick={() => setIsListShow((prev) => !prev)}
            className={
              isListShow
                ? "absolute z-10 md:hidden opacity-50 border-[1px] border-l-0 border-indigo-700 rounded-r-lg cursor-pointer text-indigo-800 text-2xl -right-6 top-1/2"
                : "absolute md:hidden bg-white/80 border-[1px] animate-bounce border-indigo-300 border-l-0 opacity-85 rounded-l-none rounded-lg cursor-pointer text-indigo-600 text-2xl right-2 top-1/2"
            }
          />
        </div>
      </div>
      <div
        className={
          !isListShow
            ? "md:absolute md:top-14 md:blur-0 transition duration-300"
            : "flex blur-sm transition duration-300 justify-center items-center md:absolute md:top-12 right-1 w-full md:right-auto"
        }
      >
        <Activity mode="visible">
          <Suspense fallback={<div>Loading...</div>}>
            {activeProjects && <activeProjects.Component />}
          </Suspense>
        </Activity>
      </div>
    </div>
  );
};

export default Projects;
