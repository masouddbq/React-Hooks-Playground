import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth";

const HomePage = () => {
  const auth = useContext(AuthContext);

  console.log(auth);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6  font-sans">
      <div className="max-w-3xl w-full text-center">
        {/* Intro heading */}
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-3">
          A hands-on playground for React Hooks
        </h1>
        <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-6">
          Explore real, working examples of React hooks and learn how each one
          behaves in practice.
        </p>

        {/* Badge */}
        <div className="flex-col text-center items-center gap-1.5 bg-indigo-50 text-indigo-600 border border-indigo-200 rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase mb-6">
          <span>React Hooks Playground</span>
        </div>

        <Link
          to="/projects"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white no-underline px-7 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-600/30 mb-10"
        >
          Show Projects
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
        {/* CTA Button */}

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2">
          <span className="font-mono text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-md px-2.5 py-1.5">
            useEffect
          </span>
          <span className="font-mono text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-md px-2.5 py-1.5">
            useState
          </span>
          <span className="font-mono text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-md px-2.5 py-1.5">
            useParams
          </span>
          <span className="font-mono text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-md px-2.5 py-1.5">
            useLocation
          </span>
          <span className="font-mono text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-md px-2.5 py-1.5">
            AbortController
          </span>
          <span className="font-mono text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-md px-2.5 py-1.5">
            Debounce
          </span>
        </div>
        {/* <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> */}
      </div>
    </div>
  );
};

export default HomePage;
