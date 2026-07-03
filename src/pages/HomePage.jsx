import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-8 font-sans">
      <div className="max-w-xl text-center">

        {/* Badge */}
        <div className="flex-col text-center items-center gap-1.5 bg-indigo-50 text-indigo-600 border border-indigo-200 rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase mb-6">
          <span>React Hooks Playground</span>
        </div>

        <Link
          to="/projects"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white no-underline px-7 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-600/30 mb-10"
        >
          Show Projects
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
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
        <br />
        <br />
        <br />

      </div>
    </div>
  );
};

export default HomePage;
